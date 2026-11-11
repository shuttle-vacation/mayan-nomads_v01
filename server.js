const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;

app.disable("x-powered-by");

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");

  // Keep project and package metadata out of the public web root.
  const blocked = new Set([
    "/package.json",
    "/package-lock.json",
    "/README.md",
    "/server.js"
  ]);

  if (blocked.has(req.path)) {
    return res.sendStatus(404);
  }

  next();
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    app: "mayan-nomads",
    timestamp: new Date().toISOString()
  });
});

app.use(express.static(ROOT, {
  dotfiles: "ignore",
  index: "index.html",
  extensions: ["html"],
  maxAge: process.env.NODE_ENV === "production" ? "1h" : 0,
  setHeaders(res, filePath) {
    if (filePath.endsWith(".html")) {
      res.setHeader("Cache-Control", "no-cache");
    }
  }
}));

app.use((req, res) => {
  res.status(404).sendFile(path.join(ROOT, "404.html"), error => {
    if (error && !res.headersSent) res.status(404).send("Página no encontrada.");
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Mayan Nomads running on port ${PORT}`);
});
