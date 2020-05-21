import React from 'react'
import { Link } from 'react-router-dom'
export default class Password extends React.Component{
  render(){
    return <div>
      <h1>找回密码</h1>
      <Link to="/login">登录</Link>/<Link to="/regist">注册</Link>
    </div>
  }
}
