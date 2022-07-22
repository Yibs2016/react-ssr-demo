import Home from "./container/Home";
import Login from "./container/Login";

export default [
  {
    key: "home", 
    path: "/",
    exact: true,
    component: Home,
  },
  {
    key: "login",  
    path: "/login",
    exact: true,
    component: Login,
  },
];
