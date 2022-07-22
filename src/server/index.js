import express from "express";
import React from "react";
import { StaticRouter } from "react-router-dom";
import apiController from "./controllers/api-controller";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { getStore } from "../store";
import Routes from "../Routes";
import { render } from "./render";
import { renderRoutes, matchRoutes } from "react-router-config";

const app = express();
app.use(express.static("public"));
// API路由
app.use("/api", apiController);

app.get("*", function (req, res) {
  render(req, res);
});

app.listen(9000);
// const stream = renderToNodeStream(<App/>)
// stream.pipe(res, {end: false})
// stream.on('end', ()=> res.write(""); res.end())

// 渐进式渲染是个相对较新的概念，对于首屏信息输出，用户体验的提升具有重要意义
// renderToNodeStream 页面TTFB(服务器响应首字节的时间)时间明显缩短

// next.js 基于react服务端渲染构建同构应用的框架   react+webpack+babel

// 数据获取
// import "isomorphic-fetch";
// export default class extends React.Component {
//   static async getInitialProps() {
//     const res = await fetch("xxx");
//     const data = await res.json();
//     return { username: data.profile.username };
//   }
// }
