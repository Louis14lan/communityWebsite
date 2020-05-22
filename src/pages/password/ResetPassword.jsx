import React,{Component} from 'react'

import { Button,Input } from 'antd';

import './password.less'

class ResetPassword extends Component{
  render(){
    return <div className='container'>
      <div className='box'>
        <h2>输入新密码</h2><br/>
        <Input.Password placeholder='输入新密码'></Input.Password>
        <Input.Password placeholder='确认密码'></Input.Password><br/>
        <Button type='primary'>完成</Button>
        <div><a>密码登陆</a></div>
      </div>
  </div>
    
  }
}

export default ResetPassword