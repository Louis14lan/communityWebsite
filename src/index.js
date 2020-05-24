import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import ResetPassword from '@/pages/password/ResetPassword'
import ForgetPassword from '@/pages/password/ForgetPassword'
import Login from '@/pages/login/index'
/* 引入公共样式 */
import '~/common.less'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/resetPassword' component={ResetPassword}></Route>
        <Route path='/forgetPassword' component={ForgetPassword}></Route>
        <Redirect to="/login" />
      </Switch>
    )
  }
}
ReactDOM.render(<Router><App /></Router>, document.getElementById("app"))
