import { createServer } from "node:http";

import qwikCity from "./server/entry.preview.js";

const { router, notFound, staticFile } = qwikCity;
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || "3000");

const middlewares = [staticFile, router, notFound];

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
