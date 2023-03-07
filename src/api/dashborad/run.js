import app from '../index'

 export default function getRun(type){
    return app({
        url:'/api/getRun',
        method:'GET',
        params:{
            type
        }
    })
}
