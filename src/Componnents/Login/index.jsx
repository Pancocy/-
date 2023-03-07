import React from "react";
import './index.css'
import {Form,Input,Button,Checkbox,message} from "antd";
import {EyeOutlined,EyeInvisibleOutlined }  from '@ant-design/icons'
import Bell from '../../assets/images/bell.gif'
import {useNavigate} from 'react-router-dom'

//引入验证登录的接口
import ValidateLogin from "../../api/login/login";

//引入持久化存储
import persistStore from "../../api/login/persistStore";
//定义输入框的前端校验规则
const userNameVerify =[
    {required:true,message:'请输入用户名'},
    {min:4,message: '用户名太短了'},
    {max:8,message: '用户名太长了'},
    {pattern:/^[a-zA-Z0-9_]+$/ ,message:'用户名必须是字母、数字或下划线'}
]
const passWordVerify =[
    {required: true,message: '请输入密码' },
    {min:5,message:'密码至少五个字符'},
    {max:12,message:'密码不超过12个字符'},
    {pattern:/^[a-zA-Z0-9_@.]+$/ ,message:'密码必须是字母、数字、下划线、@符或.'}
]


function Login(){
    const {useState } = React
    // eslint-disable-next-line
    const [passwordVisible, setPasswordVisible] =useState(false)

    //定义提交登录表单的回调
    const navigate = useNavigate()
    const submitLogin =(values)=>{
        ValidateLogin(values).then((res)=>{
            if(res.status !== 200){
                message.error({
                    content: '用户名或密码错误',
                    className: 'errorTip'
                }).then(()=>{})
            }
            else{
                message.success({
                    type:'success',
                    content:'登录成功',
                    className:'successTip',
                    duration:1.2
                }).then(()=>{
                    persistStore.saveUser(res.data)
                    navigate('/',{replace:true})
                })
            }
        })
    }


    return (
            <div className='login'>
                <div className="main">
                    <div className="login-header">
                        <img src={Bell} className={'bell'} alt={'loading error'}/>
                        <h3>欢迎来到个人健康中心</h3>
                        <p>欢迎来到个人健康中心，在这里你可以深度监视个人健康数据以及日常生活数据</p>
                    </div>
                    <div className="login-content">
                        <Form
                        initialValues={
                            {remember: true}
                        }
                        onFinish={submitLogin}
                        >
                            <Form.Item
                            name={'username'}
                            rules={userNameVerify}
                            >
                                <div className="admin">
                                    <p>用户名</p>
                                    <Input type="text" autoComplete='false'/>
                                </div>
                            </Form.Item>
                            <Form.Item
                            name={'password'}
                            rules={passWordVerify}
                            >
                                <div className="pass">
                                    <p>密码</p>
                                    <Input.Password type="password" autoComplete='false'
                                                    size='small'
                                    iconRender={(passwordVisible)=>(passwordVisible ? <EyeOutlined/> : <EyeInvisibleOutlined/> )}
                                    />
                                </div>
                            </Form.Item>
                            <Form.Item className='select'>
                                <Form.Item name={'remember'} valuePropName={'checked'}>
                                    <Checkbox><span className='tips'>记住密码</span></Checkbox>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item>
                                <div className="login-footer">
                                    <Button htmlType={'submit'}>登录</Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
    )
}
export default  Login