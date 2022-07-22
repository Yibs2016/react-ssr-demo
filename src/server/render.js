import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { getStore } from "../store";
import Routes from "../Routes";
import { renderRoutes, matchRoutes } from "react-router-config";


export const render = (req,res)=>{
  const store = getStore(), context = {
    css: []
  };

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    const component = route.component;
    return component.getInitialData ? component.getInitialData(store) : null;
  });

  Promise.all(promises).then(()=>{
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>{renderRoutes(Routes)}</StaticRouter>
      </Provider>
    ));
    const css = context.css.length ? context.css.join('\n') : '';
    res.send( `
      <!doctype html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <style>${css}</style>
            <title>React SSR</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.INITIAL_STATE = ${JSON.stringify(store.getState())}
          </script>
          <script src="/index.js"></script>  
        </body>
      </html>
    `)
  })
}

// json.stringify 脱水 变成字符串形式传输到浏览器  
// client store中注水 直接获取数据