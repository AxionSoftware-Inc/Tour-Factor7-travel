import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

import qwikCity from "./server/entry.preview.js";

const { router, notFound, staticFile } = qwikCity;
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || "3000");
const distRoot = resolve(process.cwd(), "dist");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

const serveDistFile = (req, res, next) => {
  const requestUrl = req.url || "/";
  const pathname = new URL(requestUrl, `http://${req.headers.host || "localhost"}`).pathname;

  if (!pathname.includes(".")) {
    next();
    return;
  }

  const relativePath = pathname.replace(/^\/+/, "");
  const filePath = normalize(join(distRoot, relativePath));

  if (!filePath.startsWith(distRoot) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    next();
    return;
  }

  const extension = extname(filePath).toLowerCase();
  res.statusCode = 200;
  res.setHeader("Content-Type", contentTypes[extension] || "application/octet-stream");
  createReadStream(filePath).pipe(res);
};

const middlewares = [serveDistFile, staticFile, router, notFound];

const server = createServer((req, res) => {
  let index = 0;

  const next = (error) => {
    if (error) {
      console.error(error);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
      }
      res.end("Internal Server Error");
      return;
    }

    const middleware = middlewares[index++];
    if (!middleware) {
      if (!res.headersSent) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
      }
      res.end("Not Found");
      return;
    }

    Promise.resolve(middleware(req, res, next)).catch(next);
  };

  next();
});

server.listen(port, host, () => {
  console.log(`Tour Factor7 frontend production server listening on http://${host}:${port}`);
});
