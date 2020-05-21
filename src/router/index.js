import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Regist from '../pages/regist'
import Password from '../pages/password'
import Error from '../components/Error'
import Footer from '../components/Footer/footer'

export default function IRouter() {
    return <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/regist' component={Regist} />
            <Route path='/password' component={Password} />
            <Route component={Error} />
        </Switch>
        <Footer path='/'/>
    </Router>
}