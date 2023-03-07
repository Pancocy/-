import app from '../index'

export default function ValidateLogin(data){
    return app({
        url:'/api/login',
        method:'POST',
        data
    })
}
