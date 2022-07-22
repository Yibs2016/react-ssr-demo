#### 同构
基于同构，浏览器和服务端可以运行同一份代码，服务端直出组件后，浏览器接管页面，然后剩下的工作由浏览器来完成。  
服务端渲染完成页面结构，客户端绑定事件。   
spa基础上利用服务端直出首屏，解决了单页面应用首屏渲染慢的问题  

！！！服务端与浏览器端都要运行React



```
├── src
│   ├── client
│   │   ├── index.js // 客户端业务入口文件
│   ├── server
│   │   └── index.js // 服务端业务入口文件
│   ├── container    // React 组件
│   │   └── Home
│   │       └── Home.js
│   │
├── config // 配置文件夹
│   ├── webpack.client.js // 客户端配置文件
│   ├── webpack.server.js // 服务端配置文件
│   ├── webpack.common.js // 共有配置文件
├── .babelrc // babel 配置文件
├── package.json
 

```

##### 概览
浏览器请求 --> 服务端运行react，返回html --> 显示网页内容 --> 浏览器加载js文件 --> 绑定DOM事件，客户端接管界面 --> 客户端路由跳转，无需请求后台


##### isomorphic-style-loader vs style-loader
style-loader把生成的css动态插入到html，服务端渲染没办法操作dom