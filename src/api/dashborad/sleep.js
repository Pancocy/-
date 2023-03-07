import app from "../index";

export default function getSleep(){
    return app({
        url:'/api/sleep',
        method:'GET',
    })
}