import express from "express";
const server = express();
import nunjucks from "nunjucks";
import {pageLanding, pageStudy, pageGiveClasses, saveClasses} from './pages.js'

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
.use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  .listen(5500);
