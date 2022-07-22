import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

class Login extends Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }

  render() {
    return (
      <div className={styles.box}>
        <div>
          <h5>登录页</h5>
          <br />
          <Link to="/">跳转到首页</Link>
        </div>
      </div>
    );
  }
}

export default Login;
