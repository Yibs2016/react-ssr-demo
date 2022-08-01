import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserList } from "../../store/actions";
import styles from "./styles.module.css";

class Home extends Component {
  componentDidMount() {
    this.props.getUserList();
  }

  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }

  render() {
    const { userList } = this.props;
    return (
      <div className={styles.box}>
        <h5>首页</h5>
        <ul>
          {userList.map((user) => {
            const { first_name, last_name, email, id } = user;
            return (
              <li key={id}>
                <div>姓名：{`${first_name}${last_name}`}</div>
                <div>email：{email}</div>
              </li>
            );
          })}
        </ul>
        <br />
        <Link to="/login">跳转到登录页</Link>
        <br />
        <button onClick={() => console.log("click me")}>点击</button>
      </div>
    );
  }
}

Home.getInitialData = (store) => {
  return store.dispatch(getUserList());
};

const mapStateToProps = (state) => ({
  name: state.name,
  userList: state.userList,
});

const mapDispatchToProps = (dispatch) => ({
  getUserList() {
    dispatch(getUserList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// css module工具层面生成局部的css规范，通过文件路径生成唯一hash值
// staticRouter支持context属性，被访问的组件可以共享该属性，
