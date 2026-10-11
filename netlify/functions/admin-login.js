const crypto = require("node:crypto");

function json(statusCode, body) {
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

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed" });

  const adminPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.SESSION_SECRET;
  if (!adminPassword || !sessionSecret) {
    return json(500, { error: "إعدادات الإدارة غير مكتملة في Netlify." });
  }

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch { return json(400, { error: "طلب غير صالح." }); }

  const provided = Buffer.from(String(body.password || ""));
  const expected = Buffer.from(adminPassword);
  const valid = provided.length === expected.length && crypto.timingSafeEqual(provided, expected);
  if (!valid) return json(401, { error: "كلمة المرور غير صحيحة." });

  const payload = Buffer.from(JSON.stringify({
    role: "admin",
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8
  })).toString("base64url");
  const signature = crypto.createHmac("sha256", sessionSecret).update(payload).digest("base64url");
  return json(200, { token: `${payload}.${signature}` });
};
