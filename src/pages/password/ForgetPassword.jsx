import React, { Component } from 'react'
import {Input,Button} from 'antd'
import './password.less'

export default class ForgetPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            tip:'获取验证码',
            interval:null
        }
    }
    componentWillUnmount(){
        clearInterval(this.state.interval)
    }
    sendVerify = ()=>{
        let self = this;
        let tip = self.state.tip;
        if(tip!=='获取验证码') return;

        self.setState({
            tip:30,
        })
        // 计时操作
        let interval = setInterval(()=>{
            tip = self.state.tip
            if(parseInt(tip)<=1){
                self.setState({
                    tip:'获取验证码',
                })
                clearInterval(self.state.interval)
            }else{
                console.log(tip)
                self.setState({
                    tip:tip-1,
                })
            }
        },1000)
        self.setState({
            interval:interval,
        })

        // send 请求操作
        // ...
    }

    render() {
        let self = this;
        return (
            <div className='container'>
                <form className='box'>
                    <h2>忘记密码</h2><br/>
                    <Input placeholder='注册邮箱'/>
                    <div className='verify-input'>
                        <Input placeholder='验证码'/>
                        <div className='tip' onClick={self.sendVerify}>{self.state.tip + (self.state.tip==='获取验证码'?'':' S')}</div>
                    </div>
                    <Button type='primary'>下一步</Button>
                    <div><a>密码登陆</a></div>
                </form>
            </div>
        )
    }
}
