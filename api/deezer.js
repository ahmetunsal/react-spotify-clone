export default async function handler(req, res) {
  const { path = "", ...query } = req.query;
  const cleanPath = String(path).replace(/^\/+/, "");

  if (!cleanPath || cleanPath.includes("://")) {
    return res.status(400).json({ error: "Invalid Deezer path" });
  }

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) {
      params.append(key, String(value));
    }
  }

  const qs = params.toString();
  const url = `https://api.deezer.com/${cleanPath}${qs ? `?${qs}` : ""}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Accept-Language": "tr-TR,tr;q=0.9",
      },
    });
    const data = await response.json();
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    return res.status(response.status).json(data);
  } catch {
    return res.status(500).json({ error: "Deezer proxy error" });
  }
}
