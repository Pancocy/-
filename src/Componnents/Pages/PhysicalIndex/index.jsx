import './index.css'
import Scene from "./Scene";
import React ,{Suspense} from "react";
export default function PhysicalIndex(){
    React.useEffect(()=>{
        let Els = document.querySelector('.model-one')
        console.log(Els)
            new Scene(Els)
    },[])
    return (
        <div className="physical-index">
            <div className="main-content">
                <div className="main-content-info">
                    <h2>用户信息</h2>
                </div>
                <div className="main-content-model">
                    <Suspense fallback={null}>
                        <canvas className={'model-one'}></canvas>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}