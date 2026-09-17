import express from "express";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

export function mountFrontend(app, directory = fileURLToPath(new URL("../../frontend/dist/", import.meta.url))) {
  const index = path.join(directory, "index.html");
  if (!existsSync(index)) {
    // Keep backend-only development and hosting health probes available.
    app.get("/", (req, res) => res.json({ success: true, message: "Jaypro Infratech API is running" }));
    return;
  }
  const staticFiles = express.static(directory, { dotfiles: "ignore", index: false });
  app.use((req, res, next) => {
    if (req.path === "/api" || req.path.startsWith("/api/")) return next();
    return staticFiles(req, res, next);
  });
  app.get("*", (req, res, next) => {
    // Unknown API routes and missing assets must never return the SPA HTML.
    if (req.path === "/api" || req.path.startsWith("/api/") || path.extname(req.path) || req.path.split('/').some(segment => segment.startsWith('.'))) return next();
    res.set("Cache-Control", "no-cache");
    res.sendFile(index);
  });
}
