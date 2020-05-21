import React from 'react'
import '~/home.less'
import {Link} from 'react-router-dom'
export default class Home extends React.Component{
  render(){
    return <div>
      <h1>这里是Home页面</h1>
      <Link to="/login">登录</Link>/<Link to="/regist">注册</Link>
    </div>
  }
}
