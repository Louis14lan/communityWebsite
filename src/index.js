import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'

import ResetPassword from '@/pages/password/ResetPassword'
import ForgetPassword from '@/pages/password/ForgetPassword'

import { Button } from 'antd';


class App extends React.Component{
  render() {
    return (
      <div>
        <ResetPassword/>
        <route path='/resetPassword' Component={ResetPassword}></route>
        <route path='/forgetPassword' Component={ForgetPassword}></route>
      </div>
    )
  }
}


ReactDOM.render(<Router><App/></Router>,document.getElementById("app"))

