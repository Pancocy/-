import app from "../index";
export default function getHeart(type){
    return app({
        url:'/api/heart',
        method:'GET',
        params:{
            type
        }
    })
}