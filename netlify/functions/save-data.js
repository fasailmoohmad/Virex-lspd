const crypto = require("node:crypto");

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": process.env.URL || "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    },
    body: JSON.stringify(body)
  };
}

function validAdminToken(token, secret) {
  try {
    const [payload, signature] = String(token || "").split(".");
    if (!payload || !signature) return false;
    const expected = crypto.createHmac("sha256", secret).update(payload).digest();
    const actual = Buffer.from(signature, "base64url");
    if (actual.length !== expected.length || !crypto.timingSafeEqual(actual, expected)) return false;
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return decoded.role === "admin" && Number(decoded.exp) > Math.floor(Date.now() / 1000);
  } catch { return false; }
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return response(204, {});
  if (event.httpMethod !== "POST") return response(405, { error: "Method not allowed" });

  const secret = process.env.SESSION_SECRET;
  const githubToken = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";

  if (!secret || !githubToken || !owner || !repo) {
    return response(500, { error: "إعدادات الحفظ غير مكتملة في Netlify." });
  }
  const auth = event.headers.authorization || event.headers.Authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!validAdminToken(token, secret)) return response(401, { error: "انتهت جلسة الإدارة أو أنها غير صالحة. سجّل الدخول مجددًا." });

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch { return response(400, { error: "بيانات غير صالحة." }); }

  const data = body.data;
  if (!data || !Array.isArray(data.rules) || !Array.isArray(data.ranks) ||
      !Array.isArray(data.penalties) || !Array.isArray(data.announcements)) {
    return response(400, { error: "صيغة بيانات الموقع غير صحيحة." });
  }

  const path = "site-data.json";
  const apiBase = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers = {
    "Authorization": `Bearer ${githubToken}`,
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "LSPD-Site-Admin"
  };

  try {
    const current = await fetch(`${apiBase}?ref=${encodeURIComponent(branch)}`, { headers });
    let sha;
    if (current.ok) {
      const existing = await current.json();
      sha = existing.sha;
    } else if (current.status !== 404) {
      const detail = await current.text();
      return response(502, { error: `تعذر قراءة الملف من GitHub (${current.status}). ${detail.slice(0, 180)}` });
    }

    const payload = {
      message: "Update LSPD site content",
      content: Buffer.from(JSON.stringify(data, null, 2), "utf8").toString("base64"),
      branch
    };
    if (sha) payload.sha = sha;

    const saved = await fetch(apiBase, {
      method: "PUT",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!saved.ok) {
      const detail = await saved.text();
      return response(502, { error: `فشل حفظ التعديلات في GitHub (${saved.status}). تأكد من صلاحية Contents: Read and write. ${detail.slice(0, 180)}` });
    }
    return response(200, { ok: true, message: "تم حفظ البيانات في GitHub وبدء النشر التلقائي." });
  } catch (error) {
    return response(502, { error: "تعذر الاتصال بـ GitHub. تحقق من الإعدادات وحاول مجددًا." });
  }
};
