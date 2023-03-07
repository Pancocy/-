import './index.css'
import React from "react";
import {Layout} from "antd";
//引入landing页面左侧导航栏的组件
import MenuBar from "./MenuBar";
//引入顶部的头部组件
import TopHeader from "./TopHeader";
//引入主体路由切换区域
import Context from "./Context";

import {Navigate} from "react-router-dom";
import persistStore from "../../api/login/persistStore";



const {Header,Sider} = Layout


function Landing(props){
    const validate = persistStore.getUser()
    if(!validate.token){
        return <Navigate to='/login' replace='true'/>
    }
    return(
        <div className="landing">
            <div className="main">
                <Layout className='layout-container'>
                    <Sider className='slider'>
                        <MenuBar/>
                    </Sider>
                    <Layout className='content'>
                        <Header>
                            <TopHeader/>
                        </Header>
                        <Context/>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}
export default Landing