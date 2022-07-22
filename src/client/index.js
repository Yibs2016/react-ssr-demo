import React from "react";
import { hydrate } from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { getClientStore } from "../store";
import Routes from "../Routes";

const store = getClientStore();

const App = ()=>{
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </Provider>
  )
}

hydrate(<App />,document.getElementById("root"));

// 服务器端的ssr只是个静态页面，所以需要浏览器再执行一次，绑定事件
// hydrate和render的区别就是hydrate会复用已有节点，render会重新渲染全部节点。
// 浏览器接管页面后，hydrate在渲染的时候会复用原本已经存在的DOM节点，减少重新生成节点以及删除原本DOM节点的开销，只进行事件处理绑定。
