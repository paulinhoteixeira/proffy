import express from "express";
const server = express();
import nunjucks from "nunjucks";
import {pageLanding, pageStudy, pageGiveClasses} from './pages.js'

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)

  .listen(5500);
