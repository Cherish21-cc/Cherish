// Brand Lab · 只读分享链接（Netlify Functions + Netlify Blobs）
// POST   /api/share            保存一份项目快照，返回 id 与撤销口令（设置了 BRANDLAB_ACCESS_CODE 时需要访问码）
// GET    /api/share?id=...     任何拿到链接的人都可以读取快照（只读）
// GET    /api/share            检查服务是否可用、是否需要访问码
// DELETE /api/share?id=...     凭创建时返回的撤销口令删除快照
import { getStore } from "@netlify/blobs";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

const MAX_BODY = 300_000;
const ID_RE = /^[A-Za-z0-9]{16}$/;
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

const json = (status, obj) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
const randomId = (n) => Array.from(randomBytes(n), (b) => ALPHABET[b % ALPHABET.length]).join("");
const sha = (s) => createHash("sha256").update(s).digest();
const store = () => getStore({ name: "brandlab-shares", consistency: "strong" });

export default async (req) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const code = process.env.BRANDLAB_ACCESS_CODE || "";

  try {
    if (req.method === "GET") {
      if (!id) return json(200, { available: true, needsCode: Boolean(code) });
      if (!ID_RE.test(id)) return json(404, { error: "分享链接无效。" });
      const rec = await store().get(id, { type: "json" });
      if (!rec) return json(404, { error: "这个分享链接不存在，或已被分享者撤销。" });
      return json(200, { data: rec.data, createdAt: rec.createdAt, title: rec.title });
    }

    if (req.method === "POST") {
      if (code && req.headers.get("x-access-code") !== code) return json(401, { error: "访问码不正确，无法生成分享链接。" });
      const raw = await req.text();
      if (raw.length > MAX_BODY) return json(413, { error: "项目内容过大，无法分享。" });
      let body;
      try { body = JSON.parse(raw); } catch { return json(400, { error: "请求格式不正确。" }); }
      const data = body?.data;
      if (!data || typeof data !== "object" || !data.brief || typeof data.brief !== "object") return json(400, { error: "这不是有效的 Brand Lab 项目。" });
      const newId = randomId(16);
      const token = randomId(24);
      const title = String(data.brief.name || "未命名项目").slice(0, 80);
      const createdAt = new Date().toISOString();
      await store().setJSON(newId, { data, title, createdAt, tokenHash: sha(token).toString("hex") });
      return json(201, { id: newId, token, createdAt, title });
    }

    if (req.method === "DELETE") {
      if (!id || !ID_RE.test(id)) return json(404, { error: "分享链接无效。" });
      const token = req.headers.get("x-share-token") || "";
      const s = store();
      const rec = await s.get(id, { type: "json" });
      if (!rec) return json(200, { deleted: true });
      const ok = token && timingSafeEqual(sha(token), Buffer.from(rec.tokenHash, "hex"));
      if (!ok) return json(403, { error: "撤销口令不正确。" });
      await s.delete(id);
      return json(200, { deleted: true });
    }

    return json(405, { error: "不支持的请求方法。" });
  } catch (error) {
    console.error(error);
    return json(500, { error: "分享服务暂时不可用，请稍后再试。" });
  }
};

export const config = { path: "/api/share" };
