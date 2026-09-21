/* ============================================================
   2027 届校园招聘信息汇总 · 数据文件
   ------------------------------------------------------------
   想新增/修改一家公司？直接编辑本文件里的 COMPANIES 数组即可，
   页面会自动渲染，不需要任何构建工具。

   字段说明：
     name      公司全称或通用简称
     alias     别名 / 英文名（用于搜索命中）
     industry  行业（须来自 INDUSTRIES 列表）
     nature    公司性质：央企 / 国企 / 民营 / 外企 / 合资 / 事业单位
     natureSub 性质补充说明，例如「央企 · 国有大行」
     hq        总部城市
     cities    主要工作地
     roles     主要招聘岗位方向
     url       官方投递入口（以官网为准，失效时用卡片上的「搜索兜底」）
     channel   投递渠道说明（官网 / 公众号 / 内推 / 宣讲会等）
     timeline  该公司常见的校招节奏
     tags      标签，用于筛选
     note      给求职者的实用备注
   ============================================================ */

window.SITE_META = {
  updated: "2026-09-21",
  version: "1.1.0",
  targetClass: "2027 届（2027 年 6—7 月毕业）"
};

/* 行业分类：顺序即页面筛选按钮顺序 */
window.INDUSTRIES = [
  "互联网/软件",
  "人工智能",
  "半导体/芯片",
  "通信/电子",
  "汽车/新能源车",
  "能源/电力",
  "银行",
  "证券/保险/基金",
  "军工/航天",
  "建筑/基建",
  "快消/零售",
  "医药/生物",
  "制造/装备",
  "化工/材料",
  "咨询/会计/法律",
  "交通/物流/民航",
  "游戏/传媒",
  "地产/物业",
  "农业/食品",
  "公共部门/编制"
];

window.NATURES = ["央企", "国企", "民营", "外企", "合资", "事业单位"];

/* ============================================================
   会员 / 支持（平台会员制）
   ------------------------------------------------------------
   网站本身不收款、不做用户系统：付费内容放在知识星球 / 小报童 /
   小鹅通这类平台上，由平台代收、处理退款与发票，你在平台提现到
   银行卡。这里只放一个引流入口。

   启用步骤：
     1. 在平台开好你的星球 / 专栏
     2. 把链接填到下面的 url
     3. 按实际情况改 platform / name / price / includes
   url 留空时，页面会显示「链接待填写」而不是一个坏掉的按钮。

   注意：excludes 里的两条是这个项目的底线，请不要删——
   网站的避坑指南第一条就是「付费内推一律不要碰」，
   收费内容一旦涉及内推或代投，整个站的立场就站不住了。
   ============================================================ */
window.MEMBERSHIP = {
  enabled: true,
  platform: "知识星球",           // 知识星球 / 小报童 / 小鹅通，按实际改
  name: "2027 校招更新圈",
  url: "",                        // ← 把你的星球 / 专栏链接填在这里
  /* 价格：可以写成一个字符串（如 "￥49 / 年"），也可以像下面这样
     拆成首月价 + 常规价。留空或删掉整个 price 则不显示价格。

     ⚠️ note 这行是给用户看的续费说明，必须和你在平台的实际设置一致。
     知识星球、小报童这类平台通常是「到期手动续费」，拿不到微信支付的
     委托代扣能力（那需要商户号和营业执照）。所以在确认平台真的支持
     之前，不要在页面上写「自动续费」「连续包月」——写了但实际不扣款
     算不上骗人，反过来如果真自动扣款而页面没写清楚，会直接引来投诉。*/
  price: {
    firstLabel: "首月",
    first: "￥9.9",
    regular: "之后 ￥19.9 / 月",
    note: "到期需要手动续费，不会自动扣款。"
  },
  intro: "这个网站会一直免费。如果你希望有人替你盯住每天变动的批次和截止日期，可以来更新圈——你付费买的是持续的人工跟进，不是这张表。",
  includes: [
    "每周更新：新开的批次、新增的企业、已经截止的入口，整理好一次性告诉你",
    "截止日期提醒：国家电网、四大行、三桶油这类大批次网申截止前提前提醒",
    "补录与捡漏批：秋招补录、春招补缺的公告，这部分信息最分散也最容易错过",
    "提问答疑：投递批次怎么选、三方条款看不懂，可以直接问"
  ],
  excludes: [
    "不提供内推、不代投简历、不承诺任何 offer",
    "网站上这 166 家企业的信息永久免费，不会被挪进付费区"
  ]
};

/* ============ 更新日志 ============
   每次更新数据后在最前面加一条，让持续投入可见。
   date 用 YYYY-MM-DD，items 写这次具体改了什么。            */
window.CHANGELOG = [
  {
    date: "2026-09-21",
    items: [
      "新增「更新日志」板块，之后每次数据更新都会记在这里",
      "复核秋招正式批阶段的时间轴说明，当前处于 8—10 月网申高峰"
    ]
  },
  {
    date: "2026-09-09",
    items: [
      "首次发布：收录 166 家企业与机构，覆盖 20 个行业",
      "上线校招时间轴、投递看板、通用投递渠道与避坑指南"
    ]
  }
];

/* ============ 2027 届校招时间轴 ============ */
window.CALENDAR = [
  {
    period: "2026.03 — 2026.06",
    title: "暑期实习季（转正通道）",
    state: "past",
    desc: "互联网大厂、券商、外企的暑期实习集中开放。这是 2027 届含金量最高的一环——大厂技术岗的秋招 HC 有相当一部分由实习转正消化掉。若已错过，可主攻下面的提前批与正式批。",
    todo: ["实习转正结果一般 8—9 月出，未转正要立刻切回秋招节奏", "把实习项目整理成 STAR 结构写进简历"]
  },
  {
    period: "2026.06 — 2026.07",
    title: "秋招提前批开闸",
    state: "past",
    desc: "华为、字节跳动、中兴、美的、宁德时代、部分军工院所与央企率先启动。提前批通常流程更短、竞争人数更少，多数公司「提前批不过不影响正式批」。",
    todo: ["提前批基本只走内推 + 官网，多留意公众号推文", "简历此时必须已定稿"]
  },
  {
    period: "2026.08 — 2026.09",
    title: "秋招正式批开闸 · 当前阶段",
    state: "now",
    desc: "绝大多数企业在 8 月中下旬至 9 月集中放出网申入口，国家电网、四大行、三桶油、中建中铁等央企的第一批网申也在这个窗口。网申截止后往往一周内就安排笔试。",
    todo: ["按「网申截止日」建表，别按公司名建表", "同一天可能撞多场笔试，提前排优先级", "国家电网一批网申通常 9 月底—10 月初截止，务必盯紧"]
  },
  {
    period: "2026.09 — 2026.11",
    title: "秋招高峰：笔试面试密集期",
    state: "upcoming",
    desc: "宣讲会、笔试、群面、专业面高度重叠。国考公告一般 10 月发布、11 月底笔试；各省定向选调生公告也在 9—12 月陆续发布。",
    todo: ["体检、成绩单、四六级证书、获奖证明提前扫描存档", "拿到第一个 offer 后不要停止投递，但要标好保底"]
  },
  {
    period: "2026.11 — 2027.01",
    title: "补录 + 三方签约期",
    state: "upcoming",
    desc: "秋招补录（俗称「捡漏批」）名额往往被低估，很多人此时已放弃投递，反而竞争变小。同时进入三方协议签署高峰。",
    todo: ["签三方前务必看清违约金条款与派遣地", "国家电网二批、部分银行补录在此窗口"]
  },
  {
    period: "2027.02 — 2027.04",
    title: "春招（金三银四）",
    state: "upcoming",
    desc: "秋招补缺 + 外企/快消/银行的春季管培生批次。整体 HC 少于秋招，但对秋招失利者是完整的第二次机会。",
    todo: ["春招 HC 少、节奏快，简历要针对岗位改写", "同步准备省考（多数省份 3 月笔试）"]
  },
  {
    period: "2027.05 — 2027.06",
    title: "最后补招 / 择业期",
    state: "upcoming",
    desc: "毕业前最后一波，多为急招与替补名额。同时注意：毕业后两年内仍保留应届生身份（各地政策不同），别浪费这个身份。",
    todo: ["确认档案、户口、报到证去向", "未就业可关注人社部门的见习岗位"]
  }
];

/* ============ 通用投递渠道（不属于单个公司） ============ */
window.CHANNELS = [
  { name: "各公司官方招聘官网", desc: "唯一权威入口。所有第三方信息最后都要回官网核对时间与岗位。", type: "官方" },
  { name: "公司微信公众号", desc: "多数企业的提前批、补录只在公众号推文里发，官网反而不更新。搜「XX招聘」并开启消息提醒。", type: "官方" },
  { name: "校园宣讲会 / 学校就业网", desc: "校招最容易被忽视的高性价比渠道，本校专场竞争远小于全网网申，部分岗位只对宣讲会现场投递开放。", type: "官方" },
  { name: "牛客网", desc: "互联网/技术岗的信息与笔面经聚集地，秋招时间表更新快。", type: "社区" },
  { name: "应届生求职网 (yingjiesheng)", desc: "国企、央企、银行的公告收录最全，老牌但依然好用。", type: "社区" },
  { name: "实习僧 / 青藤之类实习平台", desc: "找日常实习和暑期实习为主，实习转正是进大厂性价比最高的路。", type: "平台" },
  { name: "BOSS 直聘 / 智联 / 前程无忧", desc: "社招为主，但校招季也有大量补录岗位，适合捡漏。", type: "平台" },
  { name: "国家大学生就业服务平台", desc: "教育部官方平台，24365 校园招聘，公益、无中介费。", type: "官方" },
  { name: "国资小新 / 各地国资委公众号", desc: "央企国企统一招聘公告的第一手来源。", type: "官方" },
  { name: "学长学姐内推", desc: "免费的内推码 + 一次简历评估，成功率远高于海投。优先找目标公司在职的同校校友。", type: "人脉" }
];

/* ============ 避坑指南 ============ */
window.TIPS = [
  { icon: "!", title: "付费内推一律不要碰", body: "正规企业的内推永远免费。任何以「保offer」「付费直通终面」「内部有名额」为由收费的，都是骗局或灰产，且可能让你的简历进入黑名单。" },
  { icon: "!", title: "警惕黑中介与培训贷", body: "遇到「先交培训费再上岗」「入职前买设备/服装」「押身份证原件」的，直接走。正规企业不会在录用前向应聘者收取任何费用。" },
  { icon: "3", title: "三方协议看清三件事", body: "①违约金金额（常见 3000—10000 元，有的高达一个月工资的数倍）②派遣工作地（很多央企签的是集团，实际派到县级项目部）③报到期限。签前拍照留档。" },
  { icon: "2", title: "应届生身份只有一次", body: "多数央企、银行、选调、编制岗位只招应届生。不要为了一份不确定的工作随便签劳动合同、缴社保，这可能直接让你失去应届生身份。" },
  { icon: "=", title: "offer 别只比月薪", body: "对比总包时要算清：13/14/16 薪、公积金比例（5% 和 12% 差距巨大）、是否解决户口、是否包住宿、加班强度、派驻地生活成本。二线城市 20 万可能优于一线 28 万。" },
  { icon: "@", title: "简历一页够了", body: "HR 单份简历平均停留 10—30 秒。用「动词 + 做了什么 + 量化结果」写经历，删掉「熟悉 Office」「性格开朗」这类无信息量内容。" },
  { icon: "#", title: "网申信息一次填对", body: "很多国企的网申系统提交后不可修改，且以第一次填写为准。政治面貌、生源地、四六级分数、家庭成员信息提前准备好，避免填错影响政审。" },
  { icon: "*", title: "别把鸡蛋放一个篮子", body: "秋招合理节奏是「冲刺 5 家 + 匹配 15 家 + 保底 10 家」并行推进。拿到保底 offer 再谈心仪岗位，心态完全不同。" }
];

/* ============ 公司库 ============ */
window.COMPANIES = [
/* ---------- 互联网 / 软件 ---------- */
{name:"腾讯",alias:"Tencent QQ 微信",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股上市",hq:"深圳",cities:"深圳 北京 上海 广州 成都 武汉",roles:"技术 产品 设计 市场 职能 游戏策划",url:"https://join.qq.com/",channel:"官网网申 + 公众号「腾讯招聘」+ 内推码",timeline:"7—8 月青云计划/提前批，8—10 月正式批",tags:["大厂","提前批","校招量大"],note:"技术岗 HC 大量被暑期实习转正消化，秋招正式批相对紧张。游戏（IEG）与微信事业群独立招聘，可分别投递。"},
{name:"阿里巴巴",alias:"Alibaba 淘天 阿里云",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股/美股上市",hq:"杭州",cities:"杭州 北京 上海 深圳 成都",roles:"技术 算法 产品 运营 供应链 国际化",url:"https://talent.alibaba.com/campus",channel:"官网网申 + 公众号「阿里巴巴招聘」",timeline:"7 月启动，9—10 月为主",tags:["大厂","校招量大","出海/海外岗"],note:"淘天集团、阿里云、阿里国际（AIDC）、菜鸟等已分拆独立招聘，投递前先确认目标业务群。国际化岗位出海机会多。"},
{name:"字节跳动",alias:"ByteDance 抖音 TikTok",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 未上市",hq:"北京",cities:"北京 上海 深圳 杭州 武汉 广州",roles:"研发 算法 产品 运营 商业化 数据",url:"https://jobs.bytedance.com/campus",channel:"官网网申 + 公众号「字节跳动招聘」+ 内推码",timeline:"6—7 月提前批，8 月正式批",tags:["大厂","提前批","校招量大"],note:"提前批开得最早，且明确不影响正式批，务必参加。算法岗竞争激烈，建议同时投研发工程岗。"},
{name:"美团",alias:"Meituan 大众点评",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股上市",hq:"北京",cities:"北京 上海 成都 厦门",roles:"研发 算法 产品 运营 供应链 商业分析",url:"https://campus.meituan.com/",channel:"官网网申 + 公众号「美团招聘」",timeline:"7 月北斗计划提前批，8—10 月正式批",tags:["大厂","提前批","培养体系好"],note:"「北斗计划」是面向顶尖人才的提前批，待遇上浮明显。到店/到家/配送等业务线笔试题库不同。"},
{name:"拼多多",alias:"PDD Temu 多多",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 美股上市",hq:"上海",cities:"上海 北京 杭州 武汉",roles:"研发 算法 运营 商业分析 跨境电商",url:"https://careers.pinduoduo.com/campus",channel:"官网网申 + 公众号「拼多多招聘」",timeline:"7 月启动，9—11 月",tags:["大厂","高薪"],note:"薪资在同梯队中处于头部，对应的工作强度也在头部，投递前对作息心里有数。Temu 出海岗位增长快。"},
{name:"京东",alias:"JD 京东物流 京东健康",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股/美股上市",hq:"北京",cities:"北京 上海 宿迁 西安 成都",roles:"研发 采销 供应链 产品 物流管培",url:"https://campus.jd.com/",channel:"官网网申 + 公众号「京东招聘」",timeline:"8—10 月",tags:["大厂","校招量大","培养体系好"],note:"「京东管培生」（TET/JDT）为重点培养项目，采销岗是京东的核心业务岗，非技术背景可重点关注。"},
{name:"百度",alias:"Baidu 文心 Apollo",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股/美股上市",hq:"北京",cities:"北京 上海 深圳 成都",roles:"研发 算法 大模型 自动驾驶 产品",url:"https://talent.baidu.com/jobs/social-list",channel:"官网网申 + 公众号「百度招聘」",timeline:"7 月 AIDU 提前批，8—10 月正式批",tags:["大厂","提前批","技术岗为主"],note:"「AIDU 计划」面向 AI 方向顶尖学生，流程独立、待遇更高。Apollo 自动驾驶与文心大模型是当前扩招方向。"},
{name:"网易",alias:"NetEase 网易游戏 网易云音乐",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股/美股上市",hq:"杭州",cities:"杭州 广州 北京 上海",roles:"研发 游戏策划 美术 产品 运营",url:"https://campus.163.com/",channel:"官网网申 + 公众号「网易招聘」",timeline:"7 月提前批，8—10 月",tags:["大厂","提前批","培养体系好"],note:"网易游戏（广州）与网易集团（杭州）招聘体系相对独立。游戏策划岗需要做「策划案」笔试，提前准备。"},
{name:"华为",alias:"Huawei 海思 鸿蒙",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 员工持股",hq:"深圳",cities:"深圳 东莞 上海 杭州 南京 西安 成都 武汉",roles:"软件开发 硬件 芯片 通信 销售 供应链",url:"https://career.huawei.com/reccampportal/portal5/campus-recruitment.html",channel:"官网网申 + 公众号「华为招聘」+ 校园大使内推",timeline:"3 月实习批，6—7 月提前批，8 月起正式批",tags:["大厂","提前批","校招量大","技术岗为主"],note:"校招体量全国最大之一，理工科几乎全专业覆盖。「天才少年」为顶尖计划。注意确认岗位所在基地城市，与总部深圳可能不同。"},
{name:"小米",alias:"Xiaomi 小米汽车 MIUI",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股上市",hq:"北京",cities:"北京 武汉 南京 上海 深圳",roles:"软件 硬件 汽车 算法 供应链 产品",url:"https://hr.xiaomi.com/campus",channel:"官网网申 + 公众号「小米招聘」",timeline:"7 月提前批，8—10 月",tags:["大厂","提前批"],note:"手机、IoT、汽车三条线合并招聘但基地不同，小米汽车岗位主要在北京亦庄。"},
{name:"快手",alias:"Kuaishou 可灵",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股上市",hq:"北京",cities:"北京 杭州 深圳",roles:"研发 算法 产品 运营 商业化",url:"https://campus.kuaishou.cn/",channel:"官网网申 + 公众号「快手招聘」",timeline:"7 月提前批，8—10 月",tags:["大厂","提前批"],note:"可灵（视频生成大模型）团队是近两年重点扩招方向，算法岗待遇上浮。"},
{name:"蚂蚁集团",alias:"AntGroup 支付宝",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 未上市",hq:"杭州",cities:"杭州 上海 北京 成都",roles:"研发 算法 风控 产品 金融科技",url:"https://talent.antgroup.com/campus",channel:"官网网申 + 公众号「蚂蚁集团招聘」",timeline:"7—8 月提前批，9—10 月",tags:["大厂","提前批","门槛高"],note:"「蚂蚁星」等专项计划面向顶尖学生。金融科技属性强，风控、量化方向欢迎数理背景。"},
{name:"滴滴出行",alias:"DiDi",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 未上市",hq:"北京",cities:"北京 杭州 上海",roles:"研发 算法 产品 运营 数据",url:"https://campus.didiglobal.com/",channel:"官网网申 + 公众号「滴滴招聘」",timeline:"8—10 月",tags:["大厂"],note:"国际化业务（拉美、亚太）岗位较多，接受外派可加分。"},
{name:"哔哩哔哩",alias:"B站 bilibili",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股/美股上市",hq:"上海",cities:"上海 北京 武汉",roles:"研发 算法 内容运营 产品 商业化",url:"https://jobs.bilibili.com/campus",channel:"官网网申 + 公众号「哔哩哔哩招聘」",timeline:"8—10 月",tags:["大厂"],note:"内容与社区运营岗对社区理解要求高，投递时可在简历中体现相关兴趣与作品。"},
{name:"小红书",alias:"RED xiaohongshu",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 未上市",hq:"上海",cities:"上海 北京 杭州 武汉",roles:"研发 算法 产品 运营 商业化 设计",url:"https://job.xiaohongshu.com/campus",channel:"官网网申 + 公众号「小红书招聘」",timeline:"7—8 月提前批，9—10 月",tags:["提前批","高薪"],note:"近两年扩招明显，算法与商业化岗薪资对标一线大厂，竞争度快速上升。"},
{name:"携程集团",alias:"Ctrip Trip.com",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股/美股上市",hq:"上海",cities:"上海 南通 北京",roles:"研发 产品 运营 商旅 国际化",url:"https://campus.ctrip.com/",channel:"官网网申 + 公众号「携程招聘」",timeline:"8—10 月",tags:["培养体系好","出海/海外岗"],note:"作息在互联网行业中相对规律，Trip.com 国际业务线英语要求较高。"},
{name:"金山办公 WPS",alias:"WPS Kingsoft",industry:"互联网/软件",nature:"民营",natureSub:"民营 · A股上市",hq:"北京",cities:"北京 珠海 武汉 广州",roles:"研发 产品 测试 AI",url:"https://career.wps.cn/campus",channel:"官网网申 + 公众号「金山办公招聘」",timeline:"8—10 月",tags:["技术岗为主"],note:"珠海基地生活成本低、房价压力小，性价比常被低估。"},
{name:"三六零 360",alias:"360 奇虎",industry:"互联网/软件",nature:"民营",natureSub:"民营 · A股上市",hq:"北京",cities:"北京 西安 武汉",roles:"安全研发 算法 产品",url:"https://hr.360.cn/campus",channel:"官网网申 + 公众号「360招聘」",timeline:"8—10 月",tags:["技术岗为主"],note:"网络安全方向是国内老牌强项，适合安全、逆向、渗透方向学生。"},
{name:"用友网络",alias:"Yonyou",industry:"互联网/软件",nature:"民营",natureSub:"民营 · A股上市",hq:"北京",cities:"北京 南昌 上海 全国",roles:"研发 实施顾问 售前 产品",url:"https://www.yonyou.com/join",channel:"官网网申 + 公众号「用友招聘」",timeline:"9—11 月",tags:["校招量大"],note:"企业软件（ERP）龙头，实施顾问岗需要接受出差驻场。"},
{name:"金蝶国际",alias:"Kingdee",industry:"互联网/软件",nature:"民营",natureSub:"民营 · 港股上市",hq:"深圳",cities:"深圳 上海 北京 全国",roles:"研发 实施 售前 产品",url:"https://www.kingdee.com/about/join",channel:"官网网申 + 公众号「金蝶招聘」",timeline:"9—11 月",tags:["校招量大"],note:"与用友同属企业软件赛道，云转型方向研发岗需求稳定。"},
{name:"微软中国",alias:"Microsoft MSRA",industry:"互联网/软件",nature:"外企",natureSub:"外企 · 美资",hq:"北京（中国区）",cities:"北京 上海 苏州",roles:"软件工程 研究 云计算 数据",url:"https://careers.microsoft.com/",channel:"官网全球系统投递 + 校园宣讲",timeline:"8—10 月，名额少、启动早",tags:["门槛高","培养体系好"],note:"中国区校招 HC 逐年收紧，英文简历与英文面试是硬门槛。MSRA 实习是极佳的科研跳板。"},
{name:"英伟达中国",alias:"NVIDIA",industry:"互联网/软件",nature:"外企",natureSub:"外企 · 美资",hq:"上海（中国区）",cities:"上海 北京 深圳",roles:"GPU 架构 驱动 编译器 AI 软件",url:"https://www.nvidia.com/en-us/about-nvidia/careers/",channel:"官网全球系统投递 + 内推",timeline:"全年开放，秋招 9—11 月",tags:["门槛高","高薪"],note:"体系结构、CUDA、编译器方向优先，英文沟通必需。名额少但待遇顶尖。"},
{name:"Shopee",alias:"Sea 虾皮",industry:"互联网/软件",nature:"外企",natureSub:"外企 · 新加坡",hq:"新加坡",cities:"深圳 上海 北京 新加坡",roles:"研发 算法 产品 运营 跨境电商",url:"https://careers.shopee.com/campus",channel:"官网网申 + 公众号「Shopee招聘」",timeline:"8—10 月",tags:["出海/海外岗"],note:"东南亚电商龙头，有新加坡岗位机会，英语面试为主。国内岗位主要在深圳。"},

/* ---------- 人工智能 ---------- */
{name:"深度求索 DeepSeek",alias:"DeepSeek 幻方",industry:"人工智能",nature:"民营",natureSub:"民营 · 未上市",hq:"杭州/北京",cities:"杭州 北京",roles:"大模型算法 系统 数据",url:"https://www.deepseek.com/",channel:"官网 + 公众号 + 内推（HC 少，内推最有效）",timeline:"常年开放，秋招无固定批次",tags:["门槛高","高薪","技术岗为主"],note:"团队精简、门槛极高，偏好有顶会论文或强工程能力的候选人。招聘信息更新以官网与公众号为准。"},
{name:"月之暗面 Moonshot AI",alias:"Kimi Moonshot",industry:"人工智能",nature:"民营",natureSub:"民营 · 未上市",hq:"北京",cities:"北京",roles:"大模型算法 工程 产品",url:"https://www.moonshot.cn/",channel:"官网 + 内推",timeline:"常年开放",tags:["门槛高","高薪"],note:"Kimi 背后的公司，长文本方向见长。创业公司节奏快，适合能扛不确定性的同学。"},
{name:"智谱 AI",alias:"Zhipu GLM 清华系",industry:"人工智能",nature:"民营",natureSub:"民营 · 未上市",hq:"北京",cities:"北京",roles:"大模型算法 工程 应用 产品",url:"https://zhipuai.cn/",channel:"官网 + 公众号「智谱」+ 内推",timeline:"常年开放，9—11 月集中",tags:["门槛高"],note:"清华技术背景，GLM 系列模型开发方。有开源社区贡献可显著加分。"},
{name:"MiniMax",alias:"稀宇科技 海螺",industry:"人工智能",nature:"民营",natureSub:"民营 · 未上市",hq:"上海",cities:"上海 北京",roles:"多模态算法 工程 产品",url:"https://www.minimaxi.com/",channel:"官网 + 内推",timeline:"常年开放",tags:["高薪"],note:"多模态与语音生成方向强，产品出海比例高。"},
{name:"科大讯飞",alias:"iFlytek",industry:"人工智能",nature:"民营",natureSub:"民营 · A股上市",hq:"合肥",cities:"合肥 北京 上海 广州 全国",roles:"语音算法 NLP 研发 教育 产品 销售",url:"https://campus.iflytek.com/",channel:"官网网申 + 公众号「讯飞招聘」",timeline:"7 月提前批，8—11 月",tags:["提前批","校招量大"],note:"语音技术国内龙头，合肥生活成本低。教育、医疗行业线的解决方案岗位也很多。"},
{name:"商汤科技",alias:"SenseTime",industry:"人工智能",nature:"民营",natureSub:"民营 · 港股上市",hq:"上海",cities:"上海 北京 深圳 杭州",roles:"CV 算法 大模型 研发 交付",url:"https://www.sensetime.com/cn/join-us",channel:"官网 + 公众号「商汤招聘」",timeline:"8—10 月",tags:["技术岗为主"],note:"计算机视觉方向老牌强队，近年重心转向大模型与算力（大装置）。"},
{name:"地平线",alias:"Horizon Robotics 征程",industry:"人工智能",nature:"民营",natureSub:"民营 · 港股上市",hq:"北京",cities:"北京 上海 南京 深圳",roles:"芯片 自动驾驶算法 嵌入式 工具链",url:"https://www.horizon.auto/",channel:"官网 + 公众号「地平线招聘」+ 内推",timeline:"7—8 月提前批，9—11 月",tags:["提前批","高薪","技术岗为主"],note:"智驾芯片头部，芯片 + 算法双线招人，待遇对标互联网大厂。"},
{name:"寒武纪",alias:"Cambricon",industry:"人工智能",nature:"民营",natureSub:"民营 · A股科创板",hq:"北京",cities:"北京 上海 西安 南京",roles:"AI 芯片 编译器 系统软件 硬件",url:"https://www.cambricon.com/",channel:"官网 + 公众号「寒武纪招聘」",timeline:"8—11 月",tags:["技术岗为主","高薪"],note:"国产 AI 芯片代表，编译器/算子开发方向需求大，微电子与计算机背景均可。"},
{name:"旷视科技",alias:"Megvii Face++",industry:"人工智能",nature:"民营",natureSub:"民营 · 未上市",hq:"北京",cities:"北京 上海 成都 苏州",roles:"算法 研发 机器人 物流自动化",url:"https://www.megvii.com/join_us",channel:"官网 + 公众号「旷视招聘」",timeline:"8—11 月",tags:["技术岗为主"],note:"业务重心向物流机器人（河图）与 AIoT 迁移，机械、控制背景也有机会。"},
{name:"云从科技",alias:"CloudWalk",industry:"人工智能",nature:"民营",natureSub:"民营 · A股科创板",hq:"广州",cities:"广州 重庆 上海 北京",roles:"算法 研发 交付 产品",url:"https://www.cloudwalk.com/",channel:"官网 + 公众号",timeline:"9—11 月",tags:[],note:"「AI 四小龙」之一，政企项目交付岗位较多，需接受出差。"},

/* ---------- 半导体 / 芯片 ---------- */
{name:"中芯国际",alias:"SMIC",industry:"半导体/芯片",nature:"国企",natureSub:"国有控股 · A股/港股上市",hq:"上海",cities:"上海 北京 天津 深圳 绍兴",roles:"工艺工程师 设备工程师 良率 研发",url:"https://www.smics.com/site/company_jobs",channel:"官网网申 + 公众号「中芯国际招聘」+ 宣讲会",timeline:"8—11 月",tags:["校招量大","强专业"],note:"晶圆代工龙头，微电子、材料、物理、化工背景优先。产线岗需接受倒班，薪资与股票激励较好。"},
{name:"长江存储",alias:"YMTC",industry:"半导体/芯片",nature:"国企",natureSub:"国有资本 · 未上市",hq:"武汉",cities:"武汉 上海 北京",roles:"工艺 设备 研发 封测 良率",url:"https://www.ymtc.com/cn/join.html",channel:"官网网申 + 公众号「长江存储招聘」",timeline:"8—11 月",tags:["强专业","校招量大"],note:"国产 3D NAND 存储代表，武汉光谷基地体量大，理工科硕士需求多。"},
{name:"长鑫存储",alias:"CXMT 睿力",industry:"半导体/芯片",nature:"国企",natureSub:"国有资本 · 未上市",hq:"合肥",cities:"合肥 上海 北京",roles:"DRAM 工艺 设备 研发 测试",url:"https://www.cxmt.com/",channel:"官网 + 公众号「长鑫存储招聘」",timeline:"8—11 月",tags:["强专业"],note:"国产 DRAM 主力，合肥基地。落户与安家补贴政策友好。"},
{name:"紫光展锐",alias:"UNISOC",industry:"半导体/芯片",nature:"国企",natureSub:"国有资本 · 未上市",hq:"上海",cities:"上海 北京 深圳 西安 成都",roles:"数字IC 模拟IC 射频 软件 算法",url:"https://www.unisoc.com/join",channel:"官网 + 公众号「紫光展锐招聘」",timeline:"8—11 月",tags:["强专业","技术岗为主"],note:"国内少数手机 SoC 全栈设计公司，通信、集成电路方向对口。"},
{name:"北方华创",alias:"NAURA",industry:"半导体/芯片",nature:"国企",natureSub:"国有控股 · A股上市",hq:"北京",cities:"北京 上海 天津 沈阳",roles:"机械 电气 工艺 软件 现场支持",url:"https://www.naura.com/join",channel:"官网 + 公众号「北方华创招聘」",timeline:"8—11 月",tags:["强专业","校招量大"],note:"国产半导体设备龙头，机械、真空、控制、材料专业需求量大，国产替代主线。"},
{name:"中微公司",alias:"AMEC",industry:"半导体/芯片",nature:"民营",natureSub:"民营 · A股科创板",hq:"上海",cities:"上海 南昌",roles:"刻蚀设备研发 工艺 机械 电气",url:"https://www.amec-inc.com/careers",channel:"官网 + 公众号",timeline:"8—11 月",tags:["强专业","高薪"],note:"刻蚀设备国内头部，技术门槛高，硕博待遇优厚。"},
{name:"韦尔股份 / 豪威",alias:"Will Semiconductor OmniVision",industry:"半导体/芯片",nature:"民营",natureSub:"民营 · A股上市",hq:"上海",cities:"上海 北京 深圳 武汉",roles:"图像传感器设计 版图 测试 算法",url:"https://www.willsemi.com/",channel:"官网 + 公众号「豪威集团招聘」",timeline:"8—11 月",tags:["强专业"],note:"CIS 图像传感器全球前三，模拟/混合信号方向对口。"},
{name:"兆易创新",alias:"GigaDevice",industry:"半导体/芯片",nature:"民营",natureSub:"民营 · A股上市",hq:"北京",cities:"北京 上海 合肥 西安 深圳",roles:"存储 MCU 设计 应用 测试",url:"https://www.gigadevice.com.cn/about/join-us/",channel:"官网 + 公众号",timeline:"8—11 月",tags:["强专业"],note:"NOR Flash 与 MCU 龙头，嵌入式方向学生可重点关注应用工程师岗。"},
{name:"海光信息",alias:"Hygon",industry:"半导体/芯片",nature:"国企",natureSub:"国有控股 · A股科创板",hq:"天津",cities:"天津 北京 成都 上海",roles:"CPU/DCU 设计 验证 编译器 系统软件",url:"https://www.hygon.cn/",channel:"官网 + 公众号「海光信息」",timeline:"8—11 月",tags:["强专业","高薪"],note:"国产 CPU/GPGPU 主力，验证与体系结构方向需求大，国资背景稳定性好。"},
{name:"汇顶科技",alias:"Goodix",industry:"半导体/芯片",nature:"民营",natureSub:"民营 · A股上市",hq:"深圳",cities:"深圳 上海 北京 西安",roles:"IC 设计 算法 嵌入式 测试",url:"https://www.goodix.com/zh/about/careers",channel:"官网 + 公众号",timeline:"8—11 月",tags:["强专业"],note:"指纹识别与触控芯片起家，近年拓展汽车电子与 IoT。"},
{name:"华虹集团",alias:"Hua Hong 华虹宏力",industry:"半导体/芯片",nature:"国企",natureSub:"国有控股 · A股/港股上市",hq:"上海",cities:"上海 无锡",roles:"工艺 设备 良率 研发",url:"https://www.huahonggrace.com/",channel:"官网 + 公众号「华虹集团招聘」",timeline:"8—11 月",tags:["强专业"],note:"特色工艺代工龙头，无锡基地扩产带来较多 HC，上海户口政策对硕士友好。"},
{name:"英特尔中国",alias:"Intel",industry:"半导体/芯片",nature:"外企",natureSub:"外企 · 美资",hq:"上海（中国区）",cities:"上海 北京 成都 大连",roles:"芯片设计 验证 软件 制造工程",url:"https://jobs.intel.com/",channel:"官网全球系统 + 校园宣讲",timeline:"9—11 月",tags:["培养体系好"],note:"作息规律、培训体系成熟，英文为工作语言。成都封测基地岗位偏制造工程。"},
{name:"德州仪器中国",alias:"TI Texas Instruments",industry:"半导体/芯片",nature:"外企",natureSub:"外企 · 美资",hq:"上海（中国区）",cities:"上海 成都 深圳",roles:"模拟 IC 设计 应用工程 测试",url:"https://careers.ti.com/",channel:"官网全球系统 + 校园宣讲",timeline:"9—11 月",tags:["门槛高","培养体系好"],note:"模拟芯片全球龙头，模拟电路方向的黄金去处，招聘量小、门槛高。"},

/* ---------- 通信 / 电子 ---------- */
{name:"中国移动",alias:"China Mobile 移动 咪咕",industry:"通信/电子",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国各省市公司",roles:"网络工程 研发 市场 数据 职能",url:"https://campus.chinamobile.com/",channel:"集团统一官网网申（分省公司/专业公司分别投递）",timeline:"9—10 月一批网申，11—12 月二批",tags:["校招量大","稳定"],note:"分省公司待遇与工作强度差异极大，投递前打听清楚目标省份/地市。研究院、设计院、信科等专业子公司门槛高于省公司。"},
{name:"中国电信",alias:"China Telecom 天翼",industry:"通信/电子",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国各省市公司",roles:"网络 云计算 研发 市场 职能",url:"https://hr.chinatelecom.com.cn/",channel:"集团官网网申 + 各省公司公众号",timeline:"9—11 月",tags:["校招量大","稳定"],note:"天翼云是集团重点发展方向，技术岗集中在云公司与研究院。省公司多为属地化招聘。"},
{name:"中国联通",alias:"China Unicom",industry:"通信/电子",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国各省市公司",roles:"网络 IT 研发 市场 职能",url:"https://hr.chinaunicom.cn/",channel:"集团官网网申 + 各省公司公众号",timeline:"9—11 月",tags:["校招量大","稳定"],note:"三大运营商中招聘规模相对小，联通数科、智网创新中心等子公司技术属性更强。"},
{name:"中兴通讯",alias:"ZTE",industry:"通信/电子",nature:"国企",natureSub:"国有控股 · A股/港股上市",hq:"深圳",cities:"深圳 南京 西安 上海 成都",roles:"软件开发 硬件 通信算法 芯片 销售",url:"https://job.zte.com.cn/cn/",channel:"官网网申 + 公众号「中兴通讯招聘」",timeline:"6—7 月提前批，8—10 月正式批",tags:["提前批","校招量大","技术岗为主"],note:"提前批开得早、流程快，是理工科的稳妥保底。南京、西安研究所生活成本低于深圳。"},
{name:"海康威视",alias:"Hikvision",industry:"通信/电子",nature:"央企",natureSub:"央企控股 · A股上市（中电海康）",hq:"杭州",cities:"杭州 全国办事处",roles:"研发 算法 硬件 销售 产品",url:"https://job.hikvision.com/",channel:"官网网申 + 公众号「海康威视招聘」",timeline:"7—8 月提前批，9—11 月",tags:["提前批","校招量大","稳定"],note:"安防龙头，央企背景 + 市场化薪酬，研发在杭州总部，销售岗需下沉到地市。"},
{name:"大华股份",alias:"Dahua",industry:"通信/电子",nature:"民营",natureSub:"民营 · A股上市",hq:"杭州",cities:"杭州 全国",roles:"研发 算法 硬件 销售 解决方案",url:"https://job.dahuatech.com/",channel:"官网 + 公众号「大华股份招聘」",timeline:"8—11 月",tags:["校招量大"],note:"与海康同赛道，杭州总部研发为主，海外业务岗位机会较多。"},
{name:"大疆创新",alias:"DJI",industry:"通信/电子",nature:"民营",natureSub:"民营 · 未上市",hq:"深圳",cities:"深圳 上海 西安 成都",roles:"嵌入式 算法 机械 电子 影像",url:"https://we.dji.com/zh-CN/campus",channel:"官网网申 + 公众号「大疆招聘」+ 机甲大师赛通道",timeline:"7—8 月提前批，9—11 月",tags:["提前批","门槛高","高薪"],note:"消费级无人机全球第一，硬核工程文化。RoboMaster 参赛经历是极强加分项。"},
{name:"京东方 BOE",alias:"BOE 京东方",industry:"通信/电子",nature:"国企",natureSub:"国有控股 · A股上市",hq:"北京",cities:"北京 合肥 成都 重庆 武汉 福州",roles:"工艺 设备 研发 品质 供应链",url:"https://job.boe.com/",channel:"官网网申 + 公众号「BOE招聘」",timeline:"8—11 月",tags:["校招量大","强专业"],note:"显示面板全球龙头，产线岗需倒班，各地基地落户与安居政策较好。"},
{name:"立讯精密",alias:"Luxshare",industry:"通信/电子",nature:"民营",natureSub:"民营 · A股上市",hq:"东莞",cities:"东莞 昆山 常熟 西安 全国",roles:"工艺 设备 研发 品质 项目管理",url:"https://job.luxshare-ict.com/",channel:"官网 + 公众号「立讯精密招聘」",timeline:"8—11 月",tags:["校招量大"],note:"消费电子代工龙头，制造现场岗位多，晋升快但节奏紧。"},
{name:"歌尔股份",alias:"GoerTek",industry:"通信/电子",nature:"民营",natureSub:"民营 · A股上市",hq:"潍坊",cities:"潍坊 青岛 北京 南京",roles:"声学 光学 结构 软件 工艺",url:"https://job.goertek.com/",channel:"官网 + 公众号「歌尔招聘」",timeline:"8—11 月",tags:["校招量大","强专业"],note:"声学与 XR 设备方向强，山东本地生活成本低，对本省生源友好。"},
{name:"TCL 集团",alias:"TCL 华星",industry:"通信/电子",nature:"民营",natureSub:"民营 · A股上市",hq:"深圳/惠州",cities:"深圳 惠州 武汉 广州",roles:"研发 工艺 供应链 市场 管培",url:"https://careers.tcl.com/",channel:"官网 + 公众号「TCL招聘」",timeline:"8—11 月",tags:["校招量大","培养体系好"],note:"「鹰系」管培生项目培养体系完善，半导体显示（华星光电）方向技术岗多。"},

/* ---------- 汽车 / 新能源车 ---------- */
{name:"比亚迪",alias:"BYD 弗迪",industry:"汽车/新能源车",nature:"民营",natureSub:"民营 · A股/港股上市",hq:"深圳",cities:"深圳 西安 长沙 合肥 郑州 常州",roles:"研发 电池 电控 智驾 工艺 生产管理",url:"https://job.byd.com/",channel:"官网网申 + 公众号「比亚迪招聘」",timeline:"7—8 月提前批，9—11 月",tags:["校招量大","提前批"],note:"校招体量极大，几乎覆盖全部工科专业，是理工科最容易拿到 offer 的大厂之一。注意确认工作基地与事业部。"},
{name:"宁德时代",alias:"CATL",industry:"汽车/新能源车",nature:"民营",natureSub:"民营 · A股/港股上市",hq:"宁德",cities:"宁德 福州 厦门 溧阳 宜宾 上海 德国",roles:"电化学 材料 结构 设备 工艺 智能制造",url:"https://campus.catl.com/",channel:"官网网申 + 公众号「CATL招聘」",timeline:"6—7 月提前批，8—11 月",tags:["提前批","高薪","校招量大"],note:"动力电池全球第一，硕士待遇在制造业中顶尖。工作地多在宁德、溧阳、宜宾等非一线城市，海外基地机会多。"},
{name:"上汽集团",alias:"SAIC 上汽",industry:"汽车/新能源车",nature:"国企",natureSub:"地方国企 · 上海市国资委",hq:"上海",cities:"上海 南京 郑州 宁德",roles:"整车研发 三电 智驾 生产 供应链 管培",url:"https://job.saicmotor.com/",channel:"集团官网 + 各子公司公众号",timeline:"8—11 月",tags:["稳定","户口指标"],note:"上海国资龙头，落户积分优势明显。乘用车、大通、零束（软件）等子公司分别招聘，待遇差异较大。"},
{name:"中国一汽",alias:"FAW 红旗 解放",industry:"汽车/新能源车",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"长春",cities:"长春 天津 青岛 佛山 南京",roles:"整车研发 动力 智能网联 制造 管理",url:"https://job.faw.cn/",channel:"官网网申 + 公众号「中国一汽招聘」",timeline:"8—11 月",tags:["稳定","校招量大"],note:"红旗品牌研发投入大，长春基地生活成本低、住房补贴好，适合追求稳定的工科生。"},
{name:"东风汽车集团",alias:"Dongfeng 岚图",industry:"汽车/新能源车",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"武汉",cities:"武汉 十堰 襄阳 广州",roles:"整车研发 新能源 智驾 制造 职能",url:"https://job.dfmc.com.cn/",channel:"官网 + 公众号「东风招聘」",timeline:"8—11 月",tags:["稳定"],note:"岚图、猛士等新能源品牌是扩招重点，武汉总部技术岗为主。"},
{name:"长安汽车",alias:"Changan 阿维塔 深蓝",industry:"汽车/新能源车",nature:"央企",natureSub:"央企 · 兵器装备集团下属",hq:"重庆",cities:"重庆 北京 上海 合肥 南京",roles:"整车 智能化 三电 造型 制造",url:"https://job.changan.com.cn/",channel:"官网 + 公众号「长安汽车招聘」",timeline:"7—8 月提前批，9—11 月",tags:["提前批","稳定"],note:"央企背景 + 新能源转型积极，重庆生活成本低。深蓝、阿维塔独立招聘。"},
{name:"吉利控股",alias:"Geely 极氪 领克",industry:"汽车/新能源车",nature:"民营",natureSub:"民营 · 港股上市",hq:"杭州",cities:"杭州 宁波 宁波杭州湾 西安 上海",roles:"整车 三电 智驾 软件 制造",url:"https://campus.geely.com/",channel:"官网 + 公众号「吉利招聘」",timeline:"8—11 月",tags:["校招量大"],note:"极氪、领克、银河等品牌并行招聘，杭州湾研究院是主要研发基地。"},
{name:"长城汽车",alias:"GWM 魏牌 坦克",industry:"汽车/新能源车",nature:"民营",natureSub:"民营 · A股/港股上市",hq:"保定",cities:"保定 上海 日照 重庆",roles:"整车 动力 智驾 制造 海外",url:"https://campus.gwm.com.cn/",channel:"官网 + 公众号「长城汽车招聘」",timeline:"8—11 月",tags:["校招量大","出海/海外岗"],note:"保定总部提供住房支持，海外市场扩张快，愿意外派的候选人机会多。"},
{name:"奇瑞汽车",alias:"Chery 星途 iCAR",industry:"汽车/新能源车",nature:"国企",natureSub:"地方国企 · 芜湖国资",hq:"芜湖",cities:"芜湖 上海 合肥",roles:"整车 新能源 智能化 制造 海外",url:"https://job.chery.cn/",channel:"官网 + 公众号「奇瑞招聘」",timeline:"8—11 月",tags:["出海/海外岗","校招量大"],note:"出口连续多年国内第一，海外常驻岗位多、补贴高，适合能接受外派的同学。"},
{name:"理想汽车",alias:"Li Auto",industry:"汽车/新能源车",nature:"民营",natureSub:"民营 · 港股/美股上市",hq:"北京",cities:"北京 常州 上海",roles:"智驾算法 软件 三电 整车 供应链",url:"https://careers.lixiang.com/campus",channel:"官网 + 公众号「理想汽车招聘」",timeline:"7—8 月提前批，9—11 月",tags:["提前批","高薪"],note:"新势力中盈利能力较强，智驾与智能座舱岗位薪资对标互联网。"},
{name:"蔚来",alias:"NIO",industry:"汽车/新能源车",nature:"民营",natureSub:"民营 · 港股/美股上市",hq:"上海/合肥",cities:"上海 合肥 北京 南京",roles:"智驾 软件 三电 芯片 用户运营",url:"https://campus.nio.com/",channel:"官网 + 公众号「蔚来招聘」",timeline:"8—11 月",tags:["高薪"],note:"自研芯片与操作系统团队在扩张，用户服务体系（NIO House）也有非技术岗。"},
{name:"小鹏汽车",alias:"XPeng",industry:"汽车/新能源车",nature:"民营",natureSub:"民营 · 港股/美股上市",hq:"广州",cities:"广州 上海 北京 武汉 肇庆",roles:"智驾算法 软件 三电 机器人 飞行汽车",url:"https://www.xiaopeng.com/careers.html",channel:"官网 + 公众号「小鹏汽车招聘」",timeline:"8—11 月",tags:["高薪","技术岗为主"],note:"智驾自研程度高，机器人与飞行汽车（汇天）是新增业务线。"},
{name:"广汽集团",alias:"GAC 埃安 昊铂",industry:"汽车/新能源车",nature:"国企",natureSub:"地方国企 · 广州市国资委",hq:"广州",cities:"广州 番禺 宜昌",roles:"整车 新能源 电池 智驾 制造",url:"https://job.gac.com.cn/",channel:"官网 + 公众号「广汽招聘」",timeline:"8—11 月",tags:["稳定"],note:"埃安（新能源）独立招聘，研究院在番禺。广州落户与人才补贴政策友好。"},
{name:"华为车 BU / 引望",alias:"鸿蒙智行 车BU",industry:"汽车/新能源车",nature:"民营",natureSub:"民营 · 华为体系",hq:"深圳",cities:"深圳 上海 苏州 东莞",roles:"智驾算法 座舱 电驱 传感器",url:"https://career.huawei.com/reccampportal/portal5/campus-recruitment.html",channel:"随华为统一校招投递，选择智能汽车解决方案 BU",timeline:"6—7 月提前批，8 月起",tags:["提前批","高薪","技术岗为主"],note:"投递入口在华为统一校招系统内，注意选择智能汽车解决方案 BU。智驾方向竞争激烈。"},
{name:"博世中国",alias:"Bosch",industry:"汽车/新能源车",nature:"外企",natureSub:"外企 · 德资",hq:"上海（中国区）",cities:"上海 苏州 无锡 长沙 南京",roles:"汽车电子 软件 机械 质量 采购",url:"https://www.bosch.com.cn/careers/",channel:"官网全球系统 + 公众号「博世招聘」",timeline:"9—11 月",tags:["培养体系好"],note:"德企作息规范、培训体系成熟，适合追求工作生活平衡的工科生。中德双语是加分项。"},

/* ---------- 能源 / 电力 ---------- */
{name:"国家电网",alias:"国网 SGCC State Grid",industry:"能源/电力",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国 27 家省电力公司及直属单位",roles:"电气工程 计算机 通信 财务 管理 法律",url:"https://zhaopin.sgcc.com.cn/",channel:"统一门户网申（一年两批），各省公司分别录取",timeline:"一批：9—10 月网申，11 月考试；二批：次年 3—4 月",tags:["稳定","校招量大","强专业"],note:"每年校招体量最大的央企之一。电气工程及其自动化是绝对主力专业，非电专业名额少。务必看清目标省份的「批次公告」与专业目录，各省分数线差异极大。"},
{name:"南方电网",alias:"CSG 南网",industry:"能源/电力",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"广州",cities:"广东 广西 云南 贵州 海南",roles:"电气 计算机 通信 财务 管理",url:"https://job.csg.cn/",channel:"官网统一网申（一年两批）+ 公众号「南方电网招聘」",timeline:"一批：9—11 月；二批：次年 3—5 月",tags:["稳定","强专业"],note:"覆盖五省区，广东省内单位待遇较高、竞争最激烈。同样以电气类为主，二批可捡漏地市局。"},
{name:"中国核工业集团",alias:"中核 CNNC",industry:"能源/电力",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"北京 上海 成都 海南 福建 广西",roles:"核工程 机械 电气 化工 材料 运行",url:"https://job.cnnc.com.cn/",channel:"集团统一招聘平台 + 各成员单位公众号",timeline:"9—12 月",tags:["稳定","强专业"],note:"核电站运行值班员需接受长期驻厂（多在沿海县域），补贴高。研究院所（如中国核动力研究设计院）门槛更高。"},
{name:"国家能源集团",alias:"国家能源 CHN Energy 神华",industry:"能源/电力",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国（内蒙古 陕西 山西 沿海）",roles:"热能 电气 机械 采矿 化工 财务",url:"https://job.ceic.com/",channel:"集团统一招聘平台网申",timeline:"9—12 月，另有春季补招",tags:["稳定","校招量大","派驻外地"],note:"煤电路港航一体化，岗位多在矿区与电厂，地点偏远但薪资与补贴可观，注意确认具体工作地。"},
{name:"中国长江三峡集团",alias:"三峡 CTG",industry:"能源/电力",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"武汉/北京",cities:"武汉 北京 宜昌 成都 福建",roles:"水电 电气 机械 新能源 财务",url:"https://job.ctg.com.cn/",channel:"官网统一网申 + 公众号「三峡招聘」",timeline:"9—11 月",tags:["稳定","门槛高"],note:"央企中的高薪代表之一，竞争激烈，偏好 985/211 硕士。新能源（海上风电）板块扩张快。"},
{name:"中国石油",alias:"中石油 CNPC PetroChina",industry:"能源/电力",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国油田、炼厂、销售公司",roles:"石油工程 地质 化工 机械 财务 销售",url:"https://hr.cnpc.com.cn/",channel:"集团统一招聘平台网申 + 各地区公司公告",timeline:"9—12 月，另有春招",tags:["稳定","校招量大","派驻外地"],note:"油田一线岗位多在西北、东北，实行倒班与野外作业，补贴高。销售公司（加油站体系）遍布全国，非石油专业也有机会。"},
{name:"中国石化",alias:"中石化 Sinopec",industry:"能源/电力",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国炼化企业与销售公司",roles:"化学工程 机械 自动化 材料 销售 财务",url:"https://job.sinopec.com/",channel:"集团统一招聘平台网申",timeline:"9—12 月",tags:["稳定","校招量大"],note:"化工类专业的主要去处，炼化企业多在地级市。研究院（如北京化工研究院）门槛高、待遇好。"},
{name:"中国海洋石油",alias:"中海油 CNOOC",industry:"能源/电力",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"北京 天津 深圳 湛江 上海 海南",roles:"海洋工程 地质 机械 电气 财务",url:"https://hr.cnooc.com.cn/",channel:"集团统一招聘平台网申",timeline:"9—11 月",tags:["稳定","高薪","门槛高"],note:"三桶油中人均待遇最高，招聘量最小、门槛最高。海上作业岗位实行「上一个月休一个月」轮换制。"},
{name:"华能 / 大唐 / 华电 / 国电投",alias:"五大发电集团",industry:"能源/电力",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国各省分公司与电厂",roles:"热能动力 电气 化学 机械 新能源 财务",url:"http://www.chng.com.cn/",channel:"各集团官网 + 「北极星电力招聘」等行业平台汇总公告",timeline:"9—12 月，多批次滚动",tags:["稳定","校招量大","派驻外地"],note:"四家风格相近，均以火电与新能源为主。电厂岗位常在县域，需倒班；省公司与新能源公司岗位更受欢迎。建议四家同时投递。"},

/* ---------- 银行 ---------- */
{name:"中国工商银行",alias:"工行 ICBC",industry:"银行",nature:"央企",natureSub:"央企 · 国有大行",hq:"北京",cities:"全国各省分行 + 软件开发中心",roles:"客户经理 柜员 科技 风险 数据",url:"https://job.icbc.com.cn/",channel:"官网统一网申 + 公众号「工行招聘」",timeline:"9—10 月秋招网申，11 月笔试；次年 3—4 月春招",tags:["稳定","校招量大"],note:"六大行中招聘量最大。软件开发中心（北京/珠海/合肥等）是科技岗主阵地，待遇优于分行且不背营销指标。分行岗位需接受网点轮岗与存款考核。"},
{name:"中国农业银行",alias:"农行 ABC",industry:"银行",nature:"央企",natureSub:"央企 · 国有大行",hq:"北京",cities:"全国各省分行 + 研发中心",roles:"客户经理 柜员 科技 风险 三农业务",url:"https://job.abchina.com/",channel:"官网统一网申 + 公众号「农业银行招聘」",timeline:"9—10 月秋招，次年春招",tags:["稳定","校招量大"],note:"县域网点多，对本地生源友好，回家乡工作的性价比高。研发中心在北京、成都、上海等地。"},
{name:"中国银行",alias:"中行 BOC",industry:"银行",nature:"央企",natureSub:"央企 · 国有大行",hq:"北京",cities:"全国分行 + 海外机构",roles:"客户经理 国际结算 科技 风险 外汇",url:"https://career.bankofchina.com/",channel:"官网统一网申 + 公众号「中国银行人才招聘」",timeline:"9—10 月秋招，次年春招",tags:["稳定","出海/海外岗"],note:"国际化程度最高的国有大行，外语类专业有独特优势，有海外分行外派机会。"},
{name:"中国建设银行",alias:"建行 CCB",industry:"银行",nature:"央企",natureSub:"央企 · 国有大行",hq:"北京",cities:"全国分行 + 建信金科",roles:"客户经理 柜员 科技 风险 数据",url:"https://job.ccb.com/",channel:"官网统一网申 + 公众号「建设银行招聘」",timeline:"9—10 月秋招，次年春招",tags:["稳定","校招量大"],note:"金融科技投入大，建信金融科技为独立科技子公司，技术岗待遇更市场化。"},
{name:"交通银行",alias:"交行 BOCOM",industry:"银行",nature:"央企",natureSub:"央企 · 国有大行",hq:"上海",cities:"全国分行 + 上海总部",roles:"客户经理 科技 风险 财富管理",url:"https://job.bankcomm.com/",channel:"官网网申 + 公众号「交通银行招聘」",timeline:"9—10 月秋招，次年春招",tags:["稳定"],note:"总部在上海，是六大行中唯一总部不在北京的，上海地区岗位对落户友好。"},
{name:"中国邮政储蓄银行",alias:"邮储 PSBC 邮政",industry:"银行",nature:"央企",natureSub:"央企 · 国有大行",hq:"北京",cities:"全国（网点下沉至乡镇）",roles:"客户经理 柜员 科技 风险",url:"https://job.psbc.com/",channel:"官网网申 + 公众号「中国邮政储蓄银行招聘」",timeline:"9—11 月秋招，次年春招",tags:["稳定","校招量大"],note:"网点覆盖县乡，招聘量大、门槛相对友好，适合想留在家乡的同学。注意区分邮储银行与中国邮政集团（两套招聘）。"},
{name:"招商银行",alias:"招行 CMB",industry:"银行",nature:"央企",natureSub:"央企控股 · 招商局集团",hq:"深圳",cities:"全国分行 + 深圳总行",roles:"管培生 客户经理 科技 风险 财富顾问",url:"https://campus.cmbchina.com/",channel:"官网网申 + 公众号「招商银行招聘」",timeline:"8—10 月，比国有大行早",tags:["高薪","培养体系好","门槛高"],note:"股份制银行中的标杆，「Fintech 管培生」与「未来银行家」项目待遇高、竞争激烈。总行科技岗薪资对标互联网。"},
{name:"兴业银行",alias:"CIB",industry:"银行",nature:"国企",natureSub:"国有控股 · 福建省财政厅",hq:"福州",cities:"全国分行 + 福州/上海总部",roles:"管培 客户经理 科技 风险",url:"https://campus.cib.com.cn/",channel:"官网网申 + 公众号「兴业银行招聘」",timeline:"8—10 月",tags:["高薪"],note:"同业业务见长，科技子公司兴业数金在上海、福州招聘。"},
{name:"中信银行",alias:"CITIC Bank",industry:"银行",nature:"央企",natureSub:"央企控股 · 中信集团",hq:"北京",cities:"全国分行",roles:"管培 客户经理 科技 风险",url:"https://campus.citicbank.com/",channel:"官网网申 + 公众号「中信银行招聘」",timeline:"8—10 月",tags:[],note:"中信集团协同资源多，零售转型带来财富管理岗位需求。"},
{name:"平安银行",alias:"Ping An Bank",industry:"银行",nature:"民营",natureSub:"民营 · 中国平安控股",hq:"深圳",cities:"全国分行 + 深圳总行",roles:"管培 客户经理 科技 数据",url:"https://campus.bank.pingan.com/",channel:"官网网申 + 公众号「平安银行招聘」",timeline:"8—10 月",tags:["高薪"],note:"市场化程度高，考核压力大但薪酬弹性大，科技岗数量在股份行中靠前。"},
{name:"浦发 / 民生 / 光大 / 华夏银行",alias:"股份制银行",industry:"银行",nature:"国企",natureSub:"国有控股为主 · 股份制商业银行",hq:"上海/北京",cities:"全国分行",roles:"管培 客户经理 科技 风险",url:"https://campus.spdb.com.cn/",channel:"各行官网网申 + 各自公众号",timeline:"8—11 月",tags:["稳定"],note:"四家节奏相近，秋招早于国有大行，可作为银行方向的并行投递组合。浦发总部在上海，落户友好。"},
{name:"国家开发银行",alias:"国开行 CDB",industry:"银行",nature:"央企",natureSub:"央企 · 政策性银行",hq:"北京",cities:"北京总行 + 各省分行",roles:"信贷 风险 研究 科技 财务",url:"https://career.cdb.com.cn/",channel:"官网网申 + 公众号「国家开发银行招聘」",timeline:"9—11 月",tags:["门槛高","稳定"],note:"三大政策性银行之首，待遇好、强度低于商业银行，不背存款指标，因而竞争极其激烈，偏好名校硕士。"},
{name:"中国人民银行",alias:"央行 PBC 人行",industry:"银行",nature:"事业单位",natureSub:"国家机关 · 参照公务员管理",hq:"北京",cities:"全国分支机构",roles:"金融 经济 会计 法律 计算机 统计",url:"http://www.pbc.gov.cn/",channel:"人民银行统一招录考试（独立于国考，公众号「中国人民银行」发布公告）",timeline:"10 月公告，11 月网上报名，次年 1 月笔试",tags:["编制/事业编","稳定","门槛高"],note:"走独立招录考试，专业课笔试（经济金融/会计/法律/计算机）难度较大。县支行竞争相对小，是性价比高的选择。"},

/* ---------- 证券 / 保险 / 基金 ---------- */
{name:"中信证券",alias:"CITIC Securities",industry:"证券/保险/基金",nature:"央企",natureSub:"央企控股 · 中信集团",hq:"北京",cities:"北京 上海 深圳",roles:"投行 研究 固收 量化 IT 风控",url:"https://job.citics.com/",channel:"官网网申 + 公众号「中信证券招聘」+ 内推",timeline:"7—8 月提前批（暑期实习转正为主），9—11 月",tags:["门槛高","高薪","提前批"],note:"券商龙头。投行与研究所岗位极度依赖暑期实习转正，没有实习经历的秋招直通难度很大。IT 岗（信息技术中心）门槛相对友好。"},
{name:"中国国际金融 中金公司",alias:"CICC 中金",industry:"证券/保险/基金",nature:"央企",natureSub:"央企控股 · 中央汇金",hq:"北京",cities:"北京 上海 深圳 香港",roles:"投行 研究 销售交易 量化 IT",url:"https://job.cicc.com/",channel:"官网网申 + 公众号「中金公司招聘」+ 内推",timeline:"7—9 月，实习转正为主",tags:["门槛高","高薪"],note:"国内投行天花板之一，偏好海外名校与顶尖国内院校。竞争强度高，务必尽早争取暑期实习。"},
{name:"华泰证券",alias:"HTSC",industry:"证券/保险/基金",nature:"国企",natureSub:"地方国企 · 江苏国资",hq:"南京",cities:"南京 上海 深圳 北京",roles:"投行 研究 IT 量化 财富管理",url:"https://job.htsc.com.cn/",channel:"官网网申 + 公众号「华泰证券招聘」",timeline:"8—11 月",tags:["高薪"],note:"金融科技投入领先，IT 岗招聘量在券商中靠前，南京基地生活成本低。"},
{name:"国泰海通证券",alias:"国泰君安 海通 合并",industry:"证券/保险/基金",nature:"国企",natureSub:"地方国企 · 上海国资",hq:"上海",cities:"上海 北京 深圳",roles:"投行 研究 IT 风控 财富管理",url:"https://job.gtht.com/",channel:"官网网申 + 公众号",timeline:"8—11 月",tags:["高薪"],note:"由国泰君安与海通证券合并而来，上海国资背景，规模位居行业前列。请以官网最新主体名称为准。"},
{name:"招商证券 / 广发 / 中信建投",alias:"头部券商",industry:"证券/保险/基金",nature:"国企",natureSub:"国有控股 · 上市券商",hq:"深圳/广州/北京",cities:"深圳 广州 北京 上海",roles:"投行 研究 IT 风控 资管",url:"https://job.cmschina.com/",channel:"各券商官网 + 各自公众号",timeline:"8—11 月",tags:["高薪"],note:"三家均为头部券商，建议并行投递。券商 IT 岗对计算机专业友好，且不要求金融背景。"},
{name:"中国平安",alias:"Ping An 平安集团",industry:"证券/保险/基金",nature:"民营",natureSub:"民营 · A股/港股上市",hq:"深圳",cities:"深圳 上海 北京 全国",roles:"管培 精算 科技 数据 风控 产品",url:"https://campus.pingan.com/",channel:"官网网申 + 公众号「平安招聘」",timeline:"8—11 月",tags:["校招量大","高薪"],note:"「平安留学生管培」与科技条线（平安科技）体量大。注意区分总部/专业公司岗位与代理人渠道岗位。"},
{name:"中国人寿",alias:"China Life 国寿",industry:"证券/保险/基金",nature:"央企",natureSub:"央企 · 财政部/汇金",hq:"北京",cities:"全国各省分公司",roles:"精算 投资 科技 风控 综合管理",url:"https://job.chinalife.com.cn/",channel:"集团官网统一网申 + 公众号",timeline:"9—11 月",tags:["稳定","校招量大"],note:"寿险龙头，省分公司管理岗稳定性好。数学、统计、精算专业可重点关注精算与投资条线。"},
{name:"中国人保 PICC",alias:"人保 PICC",industry:"证券/保险/基金",nature:"央企",natureSub:"央企 · 财政部",hq:"北京",cities:"全国各省分公司",roles:"核保核赔 精算 科技 风控 综合",url:"https://job.picc.com/",channel:"官网网申 + 公众号「中国人保招聘」",timeline:"9—11 月",tags:["稳定"],note:"财险龙头，理赔与核保岗位覆盖面广，对本地生源友好。"},
{name:"易方达 / 华夏 / 南方基金",alias:"头部公募基金",industry:"证券/保险/基金",nature:"国企",natureSub:"多为国有控股 · 公募基金",hq:"广州/北京/深圳",cities:"广州 北京 深圳 上海",roles:"研究员 交易 量化 产品 IT 合规",url:"https://www.efunds.com.cn/",channel:"各公司官网 + 公众号，HC 少、内推重要",timeline:"7—10 月，实习转正为主",tags:["门槛高","高薪"],note:"公募基金校招名额极少（每家常为个位数到几十人），几乎全部通过暑期实习转正，必须提前一年布局实习。"},

/* ---------- 军工 / 航天 ---------- */
{name:"中国航天科技集团",alias:"航天科技 CASC 一院 五院",industry:"军工/航天",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"北京 上海 西安 天津 成都",roles:"飞行器设计 控制 电子 机械 材料 软件",url:"https://rc.spacechina.com/",channel:"集团统一招聘门户 + 各院所公众号 + 校园宣讲",timeline:"8—12 月，院所自主节奏",tags:["稳定","强专业","门槛高"],note:"下属研究院（如一院、五院、八院）各自独立招聘，待遇与落户政策差异较大。政治审查严格，需注意直系亲属与出国经历。北京、上海院所常提供落户指标。"},
{name:"中国航天科工集团",alias:"航天科工 CASIC 二院 三院",industry:"军工/航天",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"北京 武汉 南京 贵阳 湖北",roles:"控制 雷达 电子 机械 软件 材料",url:"https://rc.casic.cn/",channel:"集团招聘门户 + 各院所公众号",timeline:"8—12 月",tags:["稳定","强专业"],note:"与航天科技并称「双航天」，导弹与信息技术方向为主。武汉、南京基地生活成本较低。"},
{name:"中国航空工业集团",alias:"中航工业 AVIC 601所 611所",industry:"军工/航天",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"沈阳 成都 西安 南昌 景德镇",roles:"飞行器 结构 航电 材料 制造 软件",url:"https://job.avic.com/",channel:"集团招聘平台 + 各主机所/厂公众号 + 宣讲会",timeline:"8—12 月",tags:["稳定","强专业"],note:"沈阳 601 所、成都 611 所等主机设计所是航空航天专业的顶级去处，竞争激烈。制造厂岗位门槛相对友好。"},
{name:"中国电子科技集团",alias:"中国电科 CETC 14所 28所",industry:"军工/航天",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"南京 成都 石家庄 合肥 北京 全国",roles:"雷达 通信 信号处理 软件 芯片 电子",url:"https://rc.cetc.com.cn/",channel:"集团招聘平台 + 各研究所公众号（所与所之间独立）",timeline:"7—12 月，部分所很早启动",tags:["稳定","强专业","门槛高"],note:"共有几十家研究所，14 所（南京，雷达）、10/29/30 所（成都）、38 所（合肥）等最热门。各所待遇差距大，务必按所打听。电子、通信、计算机专业主力去向。"},
{name:"中国兵器工业集团",alias:"兵器工业 北方工业 NORINCO",industry:"军工/航天",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"北京 西安 内蒙古 重庆 太原",roles:"机械 材料 火炸药 光电 控制 车辆",url:"https://job.norincogroup.com.cn/",channel:"集团招聘平台 + 各院所公众号",timeline:"8—12 月",tags:["稳定","强专业"],note:"含大量特色专业（弹药、含能材料、光电对抗），对口专业竞争压力小于泛工科。部分单位在西部，注意工作地。"},
{name:"中国船舶集团",alias:"中船 CSSC 七院 江南造船",industry:"军工/航天",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京/上海",cities:"上海 武汉 大连 无锡 北京",roles:"船舶与海洋工程 动力 电气 材料 焊接",url:"https://job.cssc.net.cn/",channel:"集团招聘平台 + 各院所/船厂公众号",timeline:"8—12 月",tags:["稳定","强专业"],note:"七〇二所（无锡）、七〇一所（武汉）、七〇八所（上海）等设计所热度高。造船业景气度近年回升，招聘量增加。"},
{name:"中国电子信息产业集团",alias:"中国电子 CEC 中电",industry:"军工/航天",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"深圳",cities:"深圳 北京 天津 上海 长沙",roles:"信创软件 芯片 网络安全 系统集成",url:"https://job.cec.com.cn/",channel:"集团招聘平台 + 成员企业公众号",timeline:"9—12 月",tags:["稳定"],note:"信创（国产化替代）主力央企，麒麟软件、飞腾 CPU、中国长城等为核心成员企业。"},
{name:"中国航发",alias:"AECC 航发 606所 624所",industry:"军工/航天",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"沈阳 西安 成都 上海 株洲 贵阳",roles:"航空发动机设计 材料 燃烧 试验 制造",url:"https://job.aecc.cn/",channel:"集团招聘平台 + 各院所公众号",timeline:"8—12 月",tags:["稳定","强专业"],note:"航空发动机专项方向，动力工程、材料、力学专业对口，长期投入型行业，稳定性极强。"},

/* ---------- 建筑 / 基建 ---------- */
{name:"中国建筑",alias:"中建 CSCEC 中建三局 八局",industry:"建筑/基建",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国项目部（随项目流动）",roles:"土木 工程管理 造价 机电 财务 商务",url:"https://job.cscec.com/",channel:"各工程局分别招聘（中建一至八局 + 中海地产等）+ 校园宣讲",timeline:"8—11 月，各局节奏不同",tags:["校招量大","派驻外地"],note:"土木类招聘量最大的央企。请按「局」投递（如中建三局、八局），不同局待遇差异明显。项目制工作需常驻工地、随项目迁移，签约前务必确认。"},
{name:"中国中铁",alias:"中铁 CREC 中铁×局",industry:"建筑/基建",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国项目部",roles:"土木 隧道 桥梁 测量 机械 财务",url:"https://job.crecg.com/",channel:"各工程局与设计院分别招聘 + 宣讲会",timeline:"8—11 月",tags:["校招量大","派驻外地"],note:"设计院（如中铁二院、四院）比工程局更受欢迎，坐办公室、不跟项目，但门槛更高。海外项目补贴丰厚。"},
{name:"中国铁建",alias:"中铁建 CRCC",industry:"建筑/基建",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国项目部",roles:"土木 轨道 测绘 机电 财务 商务",url:"https://job.crcc.cn/",channel:"各局与设计院分别招聘",timeline:"8—11 月",tags:["校招量大","派驻外地"],note:"与中国中铁同源不同集团，投递逻辑一致。铁四院、铁五院等设计院是优选。"},
{name:"中国交建",alias:"中交 CCCC 中交×航局",industry:"建筑/基建",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国及海外项目",roles:"港航 道桥 土木 疏浚 机械 财务",url:"https://job.ccccltd.cn/",channel:"各子公司（一航局至四航局、公路院等）分别招聘",timeline:"8—11 月",tags:["出海/海外岗","派驻外地"],note:"海外项目占比高（一带一路），愿意外派可获得较高补贴。港口、航道方向专业对口性强。"},
{name:"中国电建 / 中国能建",alias:"电建 能建 PowerChina",industry:"建筑/基建",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国及海外",roles:"水利水电 电力设计 新能源 土木 电气",url:"https://job.powerchina.cn/",channel:"各省电力设计院与工程局分别招聘",timeline:"8—11 月",tags:["强专业","出海/海外岗"],note:"电力设计院（如广东院、华东院）是水利、电气专业的优质去处，待遇与工作环境优于施工局。"},
{name:"中国中冶 / 中国五矿",alias:"中冶 MCC 五矿",industry:"建筑/基建",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国项目及设计院",roles:"冶金工程 土木 结构 机电 材料",url:"https://job.minmetals.com.cn/",channel:"各子公司官网 + 宣讲会",timeline:"8—11 月",tags:["强专业"],note:"冶金工程国家队，中冶赛迪、中冶南方等设计院口碑好。"},

/* ---------- 交通 / 物流 / 民航 ---------- */
{name:"中国中车",alias:"CRRC 中车",industry:"交通/物流/民航",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"株洲 青岛 长春 唐山 常州 全国",roles:"机械 电气 材料 控制 焊接 工艺",url:"https://job.crrcgc.cc/",channel:"各主机厂与研究所分别招聘 + 宣讲会",timeline:"8—12 月",tags:["稳定","强专业"],note:"轨道交通装备全球龙头。株洲所（时代电气）、四方所、长客等各自独立招聘，待遇差别较大，建议多家并投。"},
{name:"中国国家铁路集团",alias:"国铁 铁路局 12306",industry:"交通/物流/民航",nature:"央企",natureSub:"央企 · 国务院国资委管理",hq:"北京",cities:"全国 18 个铁路局集团公司",roles:"车辆 供电 工务 电务 运输 调度",url:"http://www.95306.cn/",channel:"各铁路局集团公司官网与公众号分别招聘（如广铁集团、成都局）",timeline:"9—12 月，各局自主发布",tags:["稳定","校招量大","编制/事业编"],note:"必须按「铁路局」投递，不是集团统一招聘。一线岗位（车间、站段）需倒班且工作地可能在小站，稳定性极高。铁道类院校有专场。"},
{name:"顺丰速运",alias:"SF Express 顺丰",industry:"交通/物流/民航",nature:"民营",natureSub:"民营 · A股/港股上市",hq:"深圳",cities:"深圳 上海 武汉 鄂州 全国",roles:"运营管培 数据分析 研发 供应链 航空",url:"https://campus.sf-express.com/",channel:"官网网申 + 公众号「顺丰招聘」",timeline:"8—11 月",tags:["校招量大","培养体系好"],note:"「鲲鹏计划」管培生为核心项目，鄂州花湖机场是航空物流枢纽，相关岗位增长快。"},
{name:"中国邮政集团",alias:"China Post 邮政",industry:"交通/物流/民航",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"全国各省市分公司",roles:"运营 市场 快递物流 金融 综合管理",url:"https://www.chinapost.com.cn/",channel:"各省邮政分公司官网与公众号（省级独立招聘）",timeline:"9—12 月，另有春招",tags:["稳定","校招量大"],note:"注意与「邮储银行」区分：邮政集团做寄递与综合业务，邮储银行是金融机构，两者招聘完全独立。"},
{name:"中国商飞",alias:"COMAC C919",industry:"交通/物流/民航",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"上海",cities:"上海 北京 西安 成都 江西",roles:"飞行器设计 结构 强度 航电 试飞 制造",url:"https://job.comac.cc/",channel:"官网网申 + 公众号「中国商飞」+ 宣讲会",timeline:"9—12 月",tags:["门槛高","强专业","户口指标"],note:"C919 国产大飞机主体单位，上海落户政策友好。航空宇航、力学、材料专业对口，竞争逐年上升。"},
{name:"国航 / 东航 / 南航",alias:"三大航空公司",industry:"交通/物流/民航",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京/上海/广州",cities:"北京 上海 广州 各分公司",roles:"机务维修 签派 空乘 IT 市场 财务",url:"https://job.airchina.com.cn/",channel:"各航司官网 + 公众号，机务/乘务另有专项招聘",timeline:"9—12 月，乘务全年滚动",tags:["稳定"],note:"机务工程（飞机维修）对航空机电专业需求稳定；空乘为独立招聘通道，有身高体检等硬性要求。"},
{name:"中远海运集团",alias:"COSCO 中远",industry:"交通/物流/民航",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"上海",cities:"上海 北京 天津 广州 海外",roles:"航运运营 船舶管理 商务 财务 海员",url:"https://job.coscoshipping.com/",channel:"集团及各子公司官网 + 公众号",timeline:"9—12 月",tags:["出海/海外岗","稳定"],note:"全球最大航运企业之一，海外派驻机会多，航海类院校有对口通道。"},

/* ---------- 快消 / 零售 ---------- */
{name:"宝洁中国",alias:"P&G Procter Gamble",industry:"快消/零售",nature:"外企",natureSub:"外企 · 美资",hq:"广州（中国区）",cities:"广州 北京 上海 成都",roles:"市场 销售 供应链 研发 财务 HR",url:"https://www.pgcareers.com/",channel:"官网网申 + 「宝洁八大问」在线测评 + 校园大使",timeline:"8—10 月",tags:["培养体系好","门槛高"],note:"快消黄埔军校，全球统一的八大问 + Peak Performance 测评，无笔试题库可背，重在结构化表达。培养体系是行业标杆。"},
{name:"联合利华中国",alias:"Unilever UFLP",industry:"快消/零售",nature:"外企",natureSub:"外企 · 英荷资",hq:"上海（中国区）",cities:"上海 合肥 天津 全国",roles:"市场 销售 供应链 研发 财务 HR",url:"https://www.unilever.com.cn/careers/",channel:"官网网申 + UFLP 管培生项目 + 公众号",timeline:"7—10 月，UFLP 启动早",tags:["培养体系好"],note:"UFLP（未来领袖计划）是快消最知名的管培项目之一，流程含在线游戏化测评与 Discovery Center 终面。"},
{name:"玛氏中国",alias:"Mars 德芙 士力架 皇家",industry:"快消/零售",nature:"外企",natureSub:"外企 · 美资家族企业",hq:"上海（中国区）",cities:"上海 北京 广州 嘉兴 保定",roles:"市场 销售 供应链 研发 数据",url:"https://www.mars.com/careers",channel:"官网网申 + MLDP 管培项目 + 公众号「玛氏校园招聘」",timeline:"8—10 月",tags:["培养体系好","门槛高"],note:"薪酬在快消中领先，工作氛围口碑好，HC 少、门槛高。"},
{name:"欧莱雅中国",alias:"L'Oreal 巴黎欧莱雅",industry:"快消/零售",nature:"外企",natureSub:"外企 · 法资",hq:"上海（中国区）",cities:"上海 苏州 宜昌",roles:"市场 电商 销售 供应链 研发",url:"https://www.loreal.com/zh-cn/china/careers/",channel:"官网网申 + Brandstorm 商赛通道 + 公众号",timeline:"8—10 月",tags:["培养体系好"],note:"美妆行业标杆，电商与数字营销岗位多。Brandstorm 商业挑战赛是直通面试的知名通道。"},
{name:"雀巢中国",alias:"Nestle",industry:"快消/零售",nature:"外企",natureSub:"外企 · 瑞士资",hq:"北京（中国区）",cities:"北京 上海 广州 东莞 全国",roles:"销售 市场 供应链 研发 质量",url:"https://www.nestle.com.cn/jobs",channel:"官网网申 + 公众号「雀巢招聘」",timeline:"8—11 月",tags:["校招量大"],note:"食品行业规模最大的外企之一，管培与销售岗招聘量在外企中较大，覆盖城市广。"},
{name:"农夫山泉",alias:"Nongfu Spring",industry:"快消/零售",nature:"民营",natureSub:"民营 · 港股上市",hq:"杭州",cities:"杭州 全国各大区",roles:"销售管培 生产 研发 供应链 品控",url:"https://www.nongfuspring.com/",channel:"官网 + 公众号「农夫山泉招聘」+ 宣讲会",timeline:"8—11 月",tags:["校招量大"],note:"销售体系庞大，管培生需下沉到地级市轮岗，晋升通道清晰。"},
{name:"伊利集团",alias:"Yili 伊利",industry:"快消/零售",nature:"民营",natureSub:"民营 · A股上市",hq:"呼和浩特",cities:"呼和浩特 全国",roles:"销售 研发 生产 品控 供应链",url:"https://job.yili.com/",channel:"官网网申 + 公众号「伊利招聘」",timeline:"8—11 月",tags:["校招量大","培养体系好"],note:"乳业龙头，食品科学、生物工程专业对口，销售岗全国铺开，管培生项目成熟。"},
{name:"蒙牛乳业",alias:"Mengniu",industry:"快消/零售",nature:"国企",natureSub:"国有控股 · 中粮系 · 港股上市",hq:"呼和浩特",cities:"呼和浩特 全国",roles:"销售 研发 生产 品控 供应链",url:"https://campus.mengniu.cn/",channel:"官网 + 公众号「蒙牛招聘」",timeline:"8—11 月",tags:["校招量大"],note:"与伊利同赛道，中粮集团控股带有国资属性，「未来星」管培项目为主。"},

/* ---------- 医药 / 生物 ---------- */
{name:"迈瑞医疗",alias:"Mindray",industry:"医药/生物",nature:"民营",natureSub:"民营 · A股上市",hq:"深圳",cities:"深圳 南京 武汉 成都 西安",roles:"硬件 软件 算法 结构 临床 销售",url:"https://campus.mindray.com/",channel:"官网网申 + 公众号「迈瑞招聘」",timeline:"7—8 月提前批，9—11 月",tags:["提前批","高薪","校招量大"],note:"医疗器械龙头，工科背景（电子、机械、软件、光学）需求量大，薪资在医疗器械行业领先。"},
{name:"药明康德",alias:"WuXi AppTec",industry:"医药/生物",nature:"民营",natureSub:"民营 · A股/港股上市",hq:"上海",cities:"上海 无锡 常州 天津 苏州 武汉",roles:"化学合成 生物分析 CMC 项目管理 QA",url:"https://careers.wuxiapptec.com/",channel:"官网网申 + 公众号「药明康德招聘」",timeline:"8—11 月",tags:["校招量大","强专业"],note:"CRO/CDMO 龙头，化学、药学、生物专业招聘量极大，是相关专业最主要的就业出口之一。"},
{name:"恒瑞医药",alias:"Hengrui",industry:"医药/生物",nature:"民营",natureSub:"民营 · A股上市",hq:"连云港",cities:"连云港 上海 苏州 成都",roles:"药物研发 临床 注册 生产 医药代表",url:"https://job.hrs.com.cn/",channel:"官网 + 公众号「恒瑞医药招聘」",timeline:"8—11 月",tags:["强专业"],note:"国内创新药龙头，上海研发中心与连云港生产基地为主，药学、化学、生物医学专业对口。"},
{name:"百济神州",alias:"BeiGene",industry:"医药/生物",nature:"民营",natureSub:"民营 · A股/港股/美股上市",hq:"北京",cities:"北京 上海 广州 苏州",roles:"临床研究 转化医学 CMC 商业化 注册",url:"https://www.beigene.com.cn/careers/",channel:"官网网申 + 公众号 + 内推",timeline:"9—11 月",tags:["门槛高","高薪"],note:"国际化创新药企，英文为常用工作语言，临床与转化医学方向对博士友好。"},
{name:"复星医药",alias:"Fosun Pharma",industry:"医药/生物",nature:"民营",natureSub:"民营 · A股/港股上市",hq:"上海",cities:"上海 重庆 徐州 全国",roles:"研发 生产 质量 商务 器械",url:"https://job.fosunpharma.com/",channel:"官网 + 公众号「复星医药招聘」",timeline:"9—11 月",tags:[],note:"业务涵盖制药、器械、医疗服务，管培项目覆盖面广。"},
{name:"罗氏 / 阿斯利康 / 辉瑞 中国",alias:"外资药企 MNC Pharma",industry:"医药/生物",nature:"外企",natureSub:"外企 · 欧美资",hq:"上海（中国区）",cities:"上海 北京 无锡 全国",roles:"医学事务 临床 市场 销售 注册 生产",url:"https://careers.roche.com/",channel:"各公司官网全球系统 + 公众号 + 管培项目",timeline:"8—11 月",tags:["培养体系好","门槛高"],note:"外资药企培养体系与合规文化成熟，英语要求高。医学事务（MSL）方向偏好医药类硕博。阿斯利康在无锡、青岛有大型生产基地。"},

/* ---------- 制造 / 装备 ---------- */
{name:"美的集团",alias:"Midea",industry:"制造/装备",nature:"民营",natureSub:"民营 · A股/港股上市",hq:"佛山",cities:"佛山 顺德 上海 深圳 合肥 全国",roles:"研发 机械 电子 供应链 营销 管培",url:"https://campus.midea.com/",channel:"官网网申 + 公众号「美的招聘」",timeline:"6—7 月提前批（很早），8—11 月",tags:["提前批","校招量大","培养体系好"],note:"提前批启动时间在制造业中最早（常在 6 月），「星火计划」管培生待遇优厚。工业技术、机器人（库卡）板块技术岗多。"},
{name:"格力电器",alias:"Gree",industry:"制造/装备",nature:"国企",natureSub:"地方国企背景 · A股上市",hq:"珠海",cities:"珠海 合肥 武汉 郑州",roles:"研发 机械 电气 制造 质量 销售",url:"https://job.gree.com/",channel:"官网 + 公众号「格力招聘」+ 宣讲会",timeline:"8—11 月",tags:["校招量大"],note:"提供员工住房是其特色福利，珠海总部研发岗为主。"},
{name:"海尔集团",alias:"Haier 卡萨帝 卡奥斯",industry:"制造/装备",nature:"国企",natureSub:"集体所有制改制 · A股上市",hq:"青岛",cities:"青岛 佛山 合肥 全国 海外",roles:"研发 智能制造 供应链 市场 管培",url:"https://campus.haier.net/",channel:"官网网申 + 公众号「海尔招聘」",timeline:"8—11 月",tags:["校招量大","出海/海外岗"],note:"海外业务占比高，全球化管培生有外派机会。青岛落户与人才补贴政策友好。"},
{name:"三一重工",alias:"SANY",industry:"制造/装备",nature:"民营",natureSub:"民营 · A股上市",hq:"长沙",cities:"长沙 北京 昆山 全国 海外",roles:"机械 液压 电控 工艺 服务 国际营销",url:"https://campus.sany.com.cn/",channel:"官网 + 公众号「三一招聘」",timeline:"8—11 月",tags:["校招量大","出海/海外岗"],note:"工程机械龙头，国际营销岗外派补贴高。长沙生活成本低，机械类专业主力去向之一。"},
{name:"徐工集团",alias:"XCMG",industry:"制造/装备",nature:"国企",natureSub:"地方国企 · 江苏徐州国资",hq:"徐州",cities:"徐州 南京 全国",roles:"机械 液压 电气 工艺 海外营销",url:"https://job.xcmg.com/",channel:"官网 + 公众号「徐工招聘」",timeline:"8—11 月",tags:["稳定","校招量大"],note:"国企属性 + 工程机械龙头，稳定性好，徐州本地待遇具竞争力。"},
{name:"潍柴动力",alias:"Weichai",industry:"制造/装备",nature:"国企",natureSub:"地方国企 · 山东重工",hq:"潍坊",cities:"潍坊 济南 上海 重庆",roles:"发动机研发 材料 试验 工艺 电控",url:"https://job.weichai.com/",channel:"官网 + 公众号「潍柴招聘」",timeline:"8—11 月",tags:["强专业"],note:"内燃机与新能源动力方向，车辆、动力工程专业对口，山东国企体系稳定。"},
{name:"工业富联",alias:"Foxconn Industrial Internet 富士康",industry:"制造/装备",nature:"外企",natureSub:"台资 · A股上市",hq:"深圳",cities:"深圳 郑州 太原 成都 昆山",roles:"研发 自动化 工艺 IE 品质 供应链",url:"https://job.fii-foxconn.com/",channel:"官网 + 公众号 + 校园宣讲",timeline:"8—12 月",tags:["校招量大"],note:"招聘量极大、门槛相对友好，适合作为工科保底。注意区分「工业富联」总部技术岗与产线管理岗。"},

/* ---------- 化工 / 材料 ---------- */
{name:"万华化学",alias:"Wanhua Chemical",industry:"化工/材料",nature:"国企",natureSub:"地方国企 · 烟台国资 · A股上市",hq:"烟台",cities:"烟台 宁波 福建 北京 上海",roles:"化工工艺 研发 设备 安全 销售",url:"https://job.whchem.com/",channel:"官网网申 + 公众号「万华化学招聘」+ 宣讲会",timeline:"7—8 月提前批，9—11 月",tags:["提前批","高薪","强专业"],note:"化工行业薪资天花板之一，MDI 全球龙头。化工、高分子、材料专业首选目标，硕士待遇优厚。"},
{name:"巴斯夫中国",alias:"BASF",industry:"化工/材料",nature:"外企",natureSub:"外企 · 德资",hq:"上海（中国区）",cities:"上海 南京 湛江 广州",roles:"工艺 研发 销售 供应链 EHS",url:"https://www.basf.com/cn/zh/careers",channel:"官网全球系统 + 公众号「巴斯夫招聘」",timeline:"9—11 月",tags:["培养体系好"],note:"湛江一体化基地在持续扩产，带来较多工艺与操作工程师岗位。德企安全与培训体系规范。"},
{name:"中化集团 / 中国中化",alias:"Sinochem 先正达",industry:"化工/材料",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"北京 上海 全国",roles:"化工 农业 材料 贸易 财务",url:"https://job.sinochem.com/",channel:"集团招聘平台 + 成员企业公众号",timeline:"9—11 月",tags:["稳定"],note:"由中化与中国化工重组而成，覆盖化工、农业（先正达）、材料多板块。"},
{name:"荣盛石化 / 恒力石化",alias:"民营炼化 大炼化",industry:"化工/材料",nature:"民营",natureSub:"民营 · A股上市",hq:"杭州/大连",cities:"舟山 大连 苏州 宁波",roles:"化工工艺 设备 电气 仪表 安全",url:"https://www.hengli.com/",channel:"官网 + 公众号 + 宣讲会",timeline:"8—11 月",tags:["校招量大","高薪"],note:"民营大炼化项目薪资高于行业平均，工作地多在化工园区（如舟山、长兴岛），需接受园区生活与倒班。"},

/* ---------- 咨询 / 会计 / 法律 ---------- */
{name:"麦肯锡 / BCG / 贝恩",alias:"MBB 战略咨询",industry:"咨询/会计/法律",nature:"外企",natureSub:"外企 · 欧美资",hq:"上海/北京",cities:"上海 北京 深圳 香港",roles:"商业分析师 BA 咨询顾问",url:"https://www.mckinsey.com/careers",channel:"官网网申 + 校园宣讲 + 内推",timeline:"7—10 月，名额极少",tags:["门槛高","高薪"],note:"顶级战略咨询，全年招聘规模极小，重 Case Interview（案例面试）能力。需要大量刻意练习与 mock 面试。"},
{name:"德勤 / 普华永道 / 安永 / 毕马威",alias:"四大 Big4 会计师事务所",industry:"咨询/会计/法律",nature:"外企",natureSub:"外企 · 合伙制",hq:"上海/北京",cities:"北京 上海 广州 深圳 成都 全国",roles:"审计 税务 咨询 风险 数据",url:"https://www2.deloitte.com/cn/zh/careers.html",channel:"各所官网网申 + 校园宣讲 + Open Day",timeline:"8—11 月秋招（Fall Intake），另有春招",tags:["校招量大","培养体系好"],note:"会计、财管专业的主要出口，招聘量在外企中最大，门槛相对友好。审计旺季（1—4 月）加班强度大，但履历背书强，是转行金融/企业财务的好跳板。"},
{name:"埃森哲中国",alias:"Accenture",industry:"咨询/会计/法律",nature:"外企",natureSub:"外企 · 爱尔兰注册",hq:"上海（中国区）",cities:"上海 北京 大连 成都 广州",roles:"技术咨询 数字化 数据 战略 交付",url:"https://www.accenture.cn/cn-zh/careers",channel:"官网网申 + 公众号「埃森哲招聘」",timeline:"8—11 月",tags:["校招量大"],note:"技术咨询体量大，对计算机与商科背景都开放，大连、成都交付中心岗位较多。"},
{name:"金杜 / 中伦 / 君合 等红圈所",alias:"律所 红圈所",industry:"咨询/会计/法律",nature:"民营",natureSub:"合伙制律师事务所",hq:"北京/上海",cities:"北京 上海 深圳 广州",roles:"律师助理 实习律师 涉外法律",url:"https://www.kwm.com/cn/zh/careers.html",channel:"官网 + 各所公众号 + 暑期实习转正（最主要通道）",timeline:"全年招聘，暑期实习为主要入口",tags:["门槛高"],note:"顶级律所基本通过实习留用，法学硕士 + 法考通过 + 英语能力是标配。务必大三/研一起就争取实习。"},

/* ---------- 游戏 / 传媒 ---------- */
{name:"米哈游",alias:"miHoYo 原神 崩坏",industry:"游戏/传媒",nature:"民营",natureSub:"民营 · 未上市",hq:"上海",cities:"上海 苏州 新加坡",roles:"游戏开发 图形 美术 策划 技术美术",url:"https://campus.mihoyo.com/",channel:"官网网申 + 公众号「米哈游招聘」",timeline:"7—8 月提前批，9—11 月",tags:["提前批","高薪","门槛高"],note:"游戏行业薪资顶尖，图形学与技术美术方向尤其吃香。作品集（Demo、同人作品）对美术与策划岗至关重要。"},
{name:"腾讯游戏 / 网易游戏",alias:"游戏大厂 IEG",industry:"游戏/传媒",nature:"民营",natureSub:"民营 · 上市公司事业群",hq:"深圳/广州",cities:"深圳 上海 成都 广州 杭州",roles:"游戏客户端 服务端 策划 美术 运营",url:"https://join.qq.com/",channel:"随集团校招投递，选择游戏事业群/雷火·互娱等工作室",timeline:"7—10 月",tags:["大厂","提前批"],note:"游戏策划岗需提交策划案，程序岗看重引擎（Unity/UE）与图形基础。网易雷火、互娱等工作室独立招聘。"},
{name:"三七互娱 / 完美世界 / 莉莉丝",alias:"游戏公司",industry:"游戏/传媒",nature:"民营",natureSub:"民营 · A股/未上市",hq:"广州/北京/上海",cities:"广州 北京 上海 深圳",roles:"游戏研发 发行 买量 策划 美术",url:"https://campus.37.com/",channel:"各公司官网 + 公众号",timeline:"8—11 月",tags:["高薪"],note:"发行与买量（广告投放）岗位对数据分析能力要求高，是非技术背景进入游戏行业的路径。"},
{name:"芒果 TV / 中央广播电视总台",alias:"传媒 广电",industry:"游戏/传媒",nature:"国企",natureSub:"国有 / 事业单位",hq:"长沙/北京",cities:"长沙 北京",roles:"内容制作 编导 记者 技术 新媒体",url:"https://www.mgtv.com/",channel:"官网 + 公众号公告 + 台内统一招聘",timeline:"9—12 月",tags:["编制/事业编","门槛高"],note:"总台招聘含编制岗与聘用岗，需笔试（新闻业务 + 综合）。芒果超媒市场化程度更高。"},

/* ---------- 地产 / 物业 ---------- */
{name:"华润置地",alias:"CR Land 华润",industry:"地产/物业",nature:"央企",natureSub:"央企 · 华润集团",hq:"深圳",cities:"深圳 北京 上海 全国区域公司",roles:"工程 成本 投资 商业运营 管培",url:"https://job.crland.com.cn/",channel:"官网 + 公众号「华润置地招聘」",timeline:"8—11 月",tags:["稳定","培养体系好"],note:"央企地产中口碑较好，商业地产（万象城）运营条线稳定。华润集团旗下还有电力、医药、燃气等多板块可一并关注。"},
{name:"保利发展 / 中海地产",alias:"央企地产",industry:"地产/物业",nature:"央企",natureSub:"央企 · 保利集团 / 中建集团",hq:"广州/深圳",cities:"全国区域公司",roles:"工程 成本 投资 营销 财务",url:"https://job.polycn.com/",channel:"各公司官网 + 公众号",timeline:"8—11 月",tags:["稳定"],note:"地产行业整体收缩，但央企背景企业相对稳健。土木、工程管理专业可作为选项之一，建议与施工央企并行投递。"},

/* ---------- 农业 / 食品 ---------- */
{name:"中粮集团",alias:"COFCO 中粮",industry:"农业/食品",nature:"央企",natureSub:"央企 · 国务院国资委直属",hq:"北京",cities:"北京 全国及海外",roles:"贸易 生产 品控 研发 销售 财务",url:"https://job.cofco.com/",channel:"集团统一招聘平台 + 成员企业公众号",timeline:"9—11 月",tags:["稳定"],note:"粮油食品全产业链央企，国际贸易（中粮国际）方向有海外机会。食品、生物、农学专业对口。"},
{name:"牧原股份 / 温氏股份",alias:"养殖龙头",industry:"农业/食品",nature:"民营",natureSub:"民营 · A股上市",hq:"南阳/云浮",cities:"全国养殖基地（多在县域）",roles:"养殖技术 兽医 饲料 设备 环保",url:"https://job.muyuanfoods.com/",channel:"官网 + 公众号 + 农业院校专场宣讲",timeline:"8—12 月",tags:["校招量大"],note:"农业院校（畜牧、兽医、动科）的主要就业方向，起薪在本科生中偏高，但工作地多在县乡、需驻场封闭管理。"},

/* ---------- 公共部门 / 编制 ---------- */
{name:"中央机关及其直属机构（国考）",alias:"国考 公务员 国家公务员考试",industry:"公共部门/编制",nature:"事业单位",natureSub:"国家机关 · 公务员编制",hq:"北京及全国",cities:"全国（含垂直管理系统：税务、海关、铁路公安等）",roles:"综合管理 财经 法律 计算机 外语",url:"http://bm.scs.gov.cn/",channel:"国家公务员局官网统一报名，公众号「国家公务员局」发布公告",timeline:"10 月发布公告与职位表，10 月中下旬报名，11 月底笔试",tags:["编制/事业编","稳定","校招量大"],note:"应届生身份可报考大量「仅限应届毕业生」职位，竞争比社会考生小得多，是 2027 届最不该错过的通道。国税系统招录量最大。务必用职位表按专业+学历+政治面貌筛选。"},
{name:"各省定向选调生",alias:"选调生 定向选调 省考",industry:"公共部门/编制",nature:"事业单位",natureSub:"党政机关 · 公务员编制（重点培养）",hq:"各省",cities:"全国各省市区县",roles:"党政机关综合管理",url:"http://www.scs.gov.cn/",channel:"各省委组织部发布公告，通过高校就业网/学工部定向宣讲报名",timeline:"9—12 月（多数省份），部分省份次年 3—4 月",tags:["编制/事业编","稳定","门槛高"],note:"多数省份定向选调只面向指定高校（985/双一流）与学生干部/党员，公告只在学校内部渠道发布，务必盯紧本校就业信息网与学院通知。相比国考，起点更高、晋升更快。"},
{name:"事业单位联考",alias:"事业编 联考 ABCDE类",industry:"公共部门/编制",nature:"事业单位",natureSub:"事业编制",hq:"各省市",cities:"全国",roles:"综合管理A 社会科学B 自然科学C 中小学教师D 医疗卫生E",url:"http://www.mohrss.gov.cn/",channel:"各省市人社局官网与公众号发布公告",timeline:"上半年联考 3—5 月，下半年 9—11 月，另有大量单独招聘",tags:["编制/事业编","稳定","校招量大"],note:"按 ABCDE 五类分卷，考「职测 + 综应」。高校、科研院所、医院、图书馆等均属事业单位，招聘公告分散，建议按目标城市订阅当地人社公众号。"},
{name:"军队文职人员",alias:"军队文职 军队人才网",industry:"公共部门/编制",nature:"事业单位",natureSub:"军队编制 · 文职人员",hq:"全国",cities:"全国部队、军队院校、医院、科研单位",roles:"教学 科研 工程 医疗 会计 文秘",url:"http://www.81rc.mil.cn/",channel:"军队人才网统一报名",timeline:"通常 11—12 月公告与报名，次年 3—4 月笔试",tags:["编制/事业编","稳定"],note:"待遇与稳定性好，含大量高校教研岗与医院岗位。需政治考核与体检，公示环节严格。理工科与医学背景机会多。"},
{name:"高校辅导员 / 科研院所 / 三支一扶",alias:"教师编 辅导员 三支一扶 西部计划",industry:"公共部门/编制",nature:"事业单位",natureSub:"事业编制 / 基层服务项目",hq:"各省市",cities:"全国",roles:"辅导员 教师 助理研究员 基层服务",url:"https://www.ncss.cn/",channel:"国家大学生就业服务平台 + 各高校人事处 + 各省人社厅公告",timeline:"全年滚动，基层项目多在 4—6 月",tags:["编制/事业编","稳定"],note:"高校辅导员多要求中共党员 + 硕士 + 学生工作经历。三支一扶、西部计划服务期满后考公有定向岗位与加分政策，是曲线进编的路径。"}
];
