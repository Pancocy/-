import axios from "axios";

const app =axios.create()


//2.设置请求拦截器
app.interceptors.request.use((config) => {
    return config;
}, (error) => {
    Promise.reject(error).then(() =>{} );
})

//3.设置响应拦截器
app.interceptors.response.use((reaponse) => {
    return reaponse.data;
}, (error) => {
    return Promise.reject(error);
})

export default app