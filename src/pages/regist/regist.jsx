import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Input, Button} from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import './regist.less'
export default class Regist extends React.Component {
    constructor(props) {
        super(props)
        // 绑定表单
        this.form = React.createRef();
    }
    submit = values => {
        // 提交表单
    };
    render() {
        // 
        function Text() {
            return <div className="text">
                <Link className="home" to="/">大菜菜带小鹅</Link>
                <span>有两种类型的人会告诉你，在这个世界上你不能有所作为；那些害怕尝试的人和那些害怕你会成功的人</span>
            </div>
        }
        return (<div className="bgc">
            <Text />
            <Card title="注册" className="wrap">
                <Form
                    ref={this.form}
                    name="normal"
                    className="form"
                    initialValues={{ remember: true }}
                    onFinish={this.submit}
                >
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: '请输入用户名'
                        }, {
                            min: 2,
                            message: '内容不能少于2个字'
                        }, {
                            pattern: /^[^\s]*$/,
                            message: '禁止输入空格',
                        }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        hasFeedback
                        rules={[{
                            required: true,
                            message: '请输入密码'
                        }, {
                            min: 6,
                            message: '密码不能少于6个字符'
                        }, {
                            pattern: /^[^\s]*$/,
                            message: '禁止输入空格',
                        }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认您的密码！',
                            }, {
                                min: 6,
                                message: '密码不能少于6个字符'
                            }, ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('两次输入的密码不相同!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="重复密码" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: '请检查邮箱格式',
                            }, {
                                required: true,
                                message: '请输入邮箱'
                            }, {
                                pattern: /^[^\s]*$/,
                                message: '禁止输入空格',
                            }
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />} placeholder="绑定邮箱" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="danger" htmlType="submit" className="form-button" >
                            注册
                        </Button>
                    </Form.Item>
                    <Form.Item className="regist_bottom">
                        <Link className="form-forgot" to="/password"> 忘记密码？ </Link>
                        <span> 已有账号？<Link to="/login">登录</Link> </span>
                    </Form.Item>
                </Form>
            </Card>
        </div >)
    }
}