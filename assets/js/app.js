/* ===== 2027 届校招信息汇总 · 交互逻辑 ===== */
(function () {
  "use strict";

  var LS_FAV = "cz2027-fav";
  var LS_ST = "cz2027-status";
  var LS_THEME = "cz2027-theme";
  var STATUSES = ["未投递", "已投递", "笔试", "面试", "已拿Offer", "已结束"];

  var companies = window.COMPANIES || [];
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- 本地存储 ---------- */
  function load(key) {
    try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { return {}; }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* 隐私模式下忽略 */ }
  }
  var favs = load(LS_FAV);
  var statuses = load(LS_ST);

  /* ---------- 筛选状态 ---------- */
  var state = { q: "", inds: [], nats: [], tags: [], city: "", sort: "default", favOnly: false, undoneOnly: false };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* 兜底搜索：官方链接失效时，用公司名去搜索引擎找最新公告 */
  function fallbackSearch(c) {
    return "https://www.bing.com/search?q=" + encodeURIComponent(c.name + " 2027 校园招聘 官网");
  }

  /* ---------- 城市选项 ---------- */
  var CITY_KEYS = ["北京", "上海", "广州", "深圳", "杭州", "南京", "成都", "武汉", "西安", "苏州",
    "天津", "重庆", "合肥", "长沙", "青岛", "无锡", "厦门", "宁波", "郑州", "沈阳", "长春",
    "珠海", "佛山", "东莞", "全国", "海外"];

  function matchCity(c, city) {
    if (!city) return true;
    var hay = (c.cities || "") + " " + (c.hq || "");
    return hay.indexOf(city) !== -1;
  }

  /* ---------- 渲染时间轴 ---------- */
  function renderTimeline() {
    var box = $("timeline");
    box.innerHTML = (window.CALENDAR || []).map(function (t) {
      var badge = t.state === "now" ? '<span class="tl-badge b-now">进行中</span>'
        : t.state === "past" ? '<span class="tl-badge b-past">已过去</span>'
        : '<span class="tl-badge b-up">即将到来</span>';
      var todo = (t.todo || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
      return '<article class="tl-item ' + t.state + '">' +
        '<div><div class="tl-period">' + esc(t.period) + "</div>" + badge + "</div>" +
        '<div><h3 class="tl-title">' + esc(t.title) + "</h3>" +
        '<p class="tl-desc">' + esc(t.desc) + "</p>" +
        (todo ? '<ul class="tl-todo">' + todo + "</ul>" : "") +
        "</div></article>";
    }).join("");
  }

  /* ---------- 渲染筛选按钮 ---------- */
  function chipRow(container, values, key, altStyle, countBy) {
    var box = $(container);
    box.innerHTML = values.map(function (v) {
      var n = countBy ? companies.filter(function (c) { return countBy(c, v); }).length : 0;
      if (countBy && n === 0) return "";
      return '<button class="chip" data-v="' + esc(v) + '">' + esc(v) +
        (countBy ? ' <span class="chip-n">' + n + "</span>" : "") + "</button>";
    }).join("");
    box.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      var v = btn.dataset.v;
      var arr = state[key];
      var i = arr.indexOf(v);
      if (i === -1) arr.push(v); else arr.splice(i, 1);
      btn.classList.toggle(altStyle ? "on-alt" : "on");
      render();
    });
  }

  function allTags() {
    var seen = {}, out = [];
    companies.forEach(function (c) {
      (c.tags || []).forEach(function (t) { if (!seen[t]) { seen[t] = 1; out.push(t); } });
    });
    return out;
  }

  /* ---------- 过滤 ---------- */
  function filtered() {
    var q = state.q.trim().toLowerCase();
    var list = companies.filter(function (c) {
      if (state.inds.length && state.inds.indexOf(c.industry) === -1) return false;
      if (state.nats.length && state.nats.indexOf(c.nature) === -1) return false;
      if (state.tags.length && !state.tags.every(function (t) { return (c.tags || []).indexOf(t) !== -1; })) return false;
      if (!matchCity(c, state.city)) return false;
      if (state.favOnly && !favs[c.name]) return false;
      if (state.undoneOnly) {
        var st = statuses[c.name] || "未投递";
        if (st !== "未投递") return false;
      }
      if (q) {
        var hay = [c.name, c.alias, c.industry, c.nature, c.natureSub, c.hq, c.cities,
          c.roles, c.channel, c.timeline, c.note, (c.tags || []).join(" ")].join(" ").toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    if (state.sort === "name") {
      list.sort(function (a, b) { return a.name.localeCompare(b.name, "zh-Hans-CN"); });
    } else if (state.sort === "nature") {
      var order = window.NATURES || [];
      list.sort(function (a, b) {
        var d = order.indexOf(a.nature) - order.indexOf(b.nature);
        return d !== 0 ? d : a.name.localeCompare(b.name, "zh-Hans-CN");
      });
    } else if (state.sort === "industry") {
      var io = window.INDUSTRIES || [];
      list.sort(function (a, b) {
        var d = io.indexOf(a.industry) - io.indexOf(b.industry);
        return d !== 0 ? d : a.name.localeCompare(b.name, "zh-Hans-CN");
      });
    }
    return list;
  }

  /* ---------- 渲染卡片 ---------- */
  function card(c) {
    var st = statuses[c.name] || "未投递";
    var fav = !!favs[c.name];
    var opts = STATUSES.map(function (s) {
      return '<option value="' + s + '"' + (s === st ? " selected" : "") + ">" + s + "</option>";
    }).join("");
    var tags = (c.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("");

    return '<article class="card' + (st !== "未投递" ? " tracked" : "") + '" data-name="' + esc(c.name) + '">' +
      '<div class="card-top"><div>' +
        '<h3 class="cname">' + esc(c.name) + "</h3>" +
        (c.alias ? '<p class="calias">' + esc(c.alias) + "</p>" : "") +
      "</div>" +
      '<button class="star' + (fav ? " on" : "") + '" data-act="fav" title="收藏">' + (fav ? "★" : "☆") + "</button>" +
      "</div>" +
      '<div class="badges">' +
        '<span class="badge n-' + esc(c.nature) + '" title="' + esc(c.natureSub || c.nature) + '">' + esc(c.natureSub || c.nature) + "</span>" +
        '<span class="badge ind">' + esc(c.industry) + "</span>" +
      "</div>" +
      '<dl class="rows">' +
        '<div class="row"><dt>工作地</dt><dd>' + esc(c.cities) + "</dd></div>" +
        '<div class="row"><dt>招聘岗位</dt><dd>' + esc(c.roles) + "</dd></div>" +
        '<div class="row"><dt>投递渠道</dt><dd>' + esc(c.channel) + "</dd></div>" +
        '<div class="row"><dt>招聘节奏</dt><dd>' + esc(c.timeline) + "</dd></div>" +
      "</dl>" +
      '<p class="note">' + esc(c.note) + "</p>" +
      (tags ? '<div class="tagline">' + tags + "</div>" : "") +
      '<div class="card-actions">' +
        '<a class="go" href="' + esc(c.url) + '" target="_blank" rel="noopener noreferrer">投递入口 ↗</a>' +
        '<a class="go alt" href="' + esc(fallbackSearch(c)) + '" target="_blank" rel="noopener noreferrer" title="链接失效时用公司名搜索最新公告">搜一下</a>' +
        '<select class="status" data-act="status" data-v="' + st + '" aria-label="投递状态">' + opts + "</select>" +
      "</div></article>";
  }

  function render() {
    var list = filtered();
    var grid = $("grid");
    grid.innerHTML = list.map(card).join("");
    $("cnt").textContent = list.length;
    $("empty").hidden = list.length !== 0;
    renderBoard();
  }

  /* ---------- 看板 ---------- */
  function renderBoard() {
    var counts = {};
    STATUSES.forEach(function (s) { counts[s] = 0; });
    var tracked = [];
    companies.forEach(function (c) {
      var st = statuses[c.name] || "未投递";
      if (st !== "未投递") { counts[st]++; tracked.push(c); }
    });
    var favCount = Object.keys(favs).filter(function (k) { return favs[k]; }).length;
    var appliedTotal = tracked.length;

    $("s-fav").textContent = favCount;
    $("s-applied").textContent = appliedTotal;

    var cells = [
      { k: "已投递", v: counts["已投递"] }, { k: "笔试", v: counts["笔试"] },
      { k: "面试", v: counts["面试"] }, { k: "已拿Offer", v: counts["已拿Offer"] },
      { k: "已结束", v: counts["已结束"] }, { k: "收藏", v: favCount }
    ];
    $("boardStats").innerHTML = cells.map(function (c) {
      return '<div class="bcell"><b>' + c.v + "</b><span>" + c.k + "</span></div>";
    }).join("");

    var body = $("myBody");
    if (!tracked.length) {
      body.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-3);padding:26px">' +
        "还没有记录。在上面的企业卡片里选择投递状态，这里就会出现。</td></tr>";
      return;
    }
    var order = STATUSES;
    tracked.sort(function (a, b) {
      return order.indexOf(statuses[a.name]) - order.indexOf(statuses[b.name]);
    });
    body.innerHTML = tracked.map(function (c) {
      return "<tr><td><strong>" + esc(c.name) + "</strong></td><td>" + esc(c.industry) + "</td>" +
        "<td>" + esc(c.nature) + "</td><td>" + esc(statuses[c.name]) + "</td>" +
        '<td><a href="' + esc(c.url) + '" target="_blank" rel="noopener noreferrer">官网 ↗</a></td></tr>';
    }).join("");
  }

  /* ---------- 导出 CSV ---------- */
  function csvText() {
    var list = filtered();
    var head = ["公司名称", "行业", "公司性质", "总部", "工作地", "招聘岗位", "投递渠道",
      "招聘节奏", "投递入口", "备注", "标签", "我的状态", "是否收藏"];
    var rows = list.map(function (c) {
      return [c.name, c.industry, c.natureSub || c.nature, c.hq, c.cities, c.roles, c.channel,
        c.timeline, c.url, c.note, (c.tags || []).join("/"),
        statuses[c.name] || "未投递", favs[c.name] ? "是" : ""];
    });
    var csv = [head].concat(rows).map(function (r) {
      return r.map(function (f) { return '"' + String(f == null ? "" : f).replace(/"/g, '""') + '"'; }).join(",");
    }).join("\r\n");
    // 前置 BOM，Excel 才能正确识别 UTF-8 中文
    return "\ufeff" + csv;
  }

  function browserDownload(filename, text) {
    var blob = new Blob([text], { type: "text/csv;charset=utf-8;" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }

  function exportCSV() {
    var btn = $("exportBtn");
    var filename = "2027校招信息_" + new Date().toISOString().slice(0, 10) + ".csv";
    var text = csvText();

    // 在 claude.ai 的分享页里，浏览器直接下载被沙箱拦截，
    // 需要走平台的 downloads 能力；本地/自建托管则走普通浏览器下载。
    if (window.claude && typeof window.claude.use === "function") {
      btn.disabled = true;
      var prev = btn.textContent;
      btn.textContent = "准备中…";
      window.claude.use("downloads").then(function (dl) {
        if (!dl) { browserDownload(filename, text); return; }
        return dl.save({ filename: filename, data: text });
      }).catch(function (err) {
        if (err && err.code === "declined") return;   // 用户主动取消，不提示
        browserDownload(filename, text);
      }).then(function () {
        btn.disabled = false; btn.textContent = prev;
      });
      return;
    }
    browserDownload(filename, text);
  }

  /* ---------- 事件绑定 ---------- */
  function bind() {
    $("grid").addEventListener("click", function (e) {
      var btn = e.target.closest('[data-act="fav"]');
      if (!btn) return;
      var name = btn.closest(".card").dataset.name;
      favs[name] = !favs[name];
      if (!favs[name]) delete favs[name];
      save(LS_FAV, favs);
      btn.classList.toggle("on");
      btn.textContent = favs[name] ? "★" : "☆";
      if (state.favOnly) render(); else renderBoard();
    });

    $("grid").addEventListener("change", function (e) {
      var sel = e.target.closest('[data-act="status"]');
      if (!sel) return;
      var cardEl = sel.closest(".card");
      var name = cardEl.dataset.name;
      statuses[name] = sel.value;
      if (sel.value === "未投递") delete statuses[name];
      save(LS_ST, statuses);
      sel.dataset.v = sel.value;
      cardEl.classList.toggle("tracked", sel.value !== "未投递");
      if (state.undoneOnly) render(); else renderBoard();
    });

    var timer;
    $("q").addEventListener("input", function (e) {
      clearTimeout(timer);
      var v = e.target.value;
      timer = setTimeout(function () { state.q = v; render(); }, 140);
    });

    $("cityF").addEventListener("change", function (e) { state.city = e.target.value; render(); });
    $("sortF").addEventListener("change", function (e) { state.sort = e.target.value; render(); });

    $("favOnly").addEventListener("click", function (e) {
      state.favOnly = !state.favOnly;
      e.target.classList.toggle("primary", state.favOnly);
      e.target.textContent = state.favOnly ? "★ 只看收藏" : "☆ 只看收藏";
      render();
    });
    $("undoneOnly").addEventListener("click", function (e) {
      state.undoneOnly = !state.undoneOnly;
      e.target.classList.toggle("primary", state.undoneOnly);
      render();
    });
    $("reset").addEventListener("click", function () {
      state = { q: "", inds: [], nats: [], tags: [], city: "", sort: "default", favOnly: false, undoneOnly: false };
      $("q").value = ""; $("cityF").value = ""; $("sortF").value = "default";
      document.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("on", "on-alt"); });
      $("favOnly").classList.remove("primary"); $("favOnly").textContent = "☆ 只看收藏";
      $("undoneOnly").classList.remove("primary");
      render();
    });
    $("exportBtn").addEventListener("click", exportCSV);

    $("themeBtn").addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(LS_THEME, next); } catch (e) {}
    });

    var totop = $("totop");
    totop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    window.addEventListener("scroll", function () {
      totop.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
  }

  /* ---------- 静态区块 ---------- */
  function renderStatic() {
    $("channels-list").innerHTML = (window.CHANNELS || []).map(function (c) {
      return '<div class="mini"><h3>' + esc(c.name) + '<span class="pill">' + esc(c.type) + "</span></h3>" +
        "<p>" + esc(c.desc) + "</p></div>";
    }).join("");

    $("tips-list").innerHTML = (window.TIPS || []).map(function (t) {
      return '<div class="mini"><h3><span class="tipmark">' + esc(t.icon) + "</span>" + esc(t.title) + "</h3>" +
        "<p>" + esc(t.body) + "</p></div>";
    }).join("");

    var meta = window.SITE_META || {};
    $("updated").textContent = meta.updated || "";
    $("f-upd").textContent = meta.updated || "";
    $("f-ver").textContent = "v" + (meta.version || "1.0.0");
    $("f-total").textContent = companies.length;
    $("s-total").textContent = companies.length;
    $("s-ind").textContent = (window.INDUSTRIES || []).length;
    $("s-soe").textContent = companies.filter(function (c) {
      return c.nature === "央企" || c.nature === "国企";
    }).length;

    var cityF = $("cityF");
    CITY_KEYS.forEach(function (city) {
      var n = companies.filter(function (c) { return matchCity(c, city); }).length;
      if (!n) return;
      var o = document.createElement("option");
      o.value = city; o.textContent = city + "（" + n + "）";
      cityF.appendChild(o);
    });
  }

  /* ---------- 启动 ---------- */
  renderTimeline();
  chipRow("indChips", window.INDUSTRIES || [], "inds", false,
    function (c, v) { return c.industry === v; });
  chipRow("natChips", window.NATURES || [], "nats", true,
    function (c, v) { return c.nature === v; });
  chipRow("tagChips", allTags(), "tags", true,
    function (c, v) { return (c.tags || []).indexOf(v) !== -1; });
  renderStatic();
  bind();
  render();
})();
