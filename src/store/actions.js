// import axios from 'axios';
require('isomorphic-fetch');
import {CHANGE_USER_LIST} from "./constants";

const changeUserList = (list)=>{
  return {
    type: CHANGE_USER_LIST,
    list
  }
}

export const getUserList = ()=>{
  return (dispatch)=>{
    return fetch('http://localhost:9000/api/users').then((res)=>{
      return res.json().then((data)=> {
        dispatch(changeUserList(data.data));
      })
    });
  }
}
