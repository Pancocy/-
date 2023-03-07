//用于持久化存储用户登录信息的模块

import store from 'store'

const local_key = 'User_key'

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    //定义保存用户的方法
    saveUser(data){
        store.set(local_key,data)
    },
    //定义读取user的方法
    getUser(){
        return store.get(local_key) || {}
    },
    //定义删除用户的方法
    removeUser(){
        store.remove(local_key)
    }
}