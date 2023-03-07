import './index.css'
import {EnvironmentOutlined} from '@ant-design/icons'
import dayjs from "dayjs";
import React from "react";
//引入表格
import Heart from "./Charts/heart";
import Sleep from "./Charts/sleep";
import Run from "./Charts/run";
//引入Redux连接器
import {connect} from "react-redux";
//引入查询天气的api
import {City,Weather} from "../../../api/dashborad/weather";
//天气redux的action creator
import {weatherCreator} from "../../../Store/Actions/weatherCreator";

 function Dashboard(props){
     // eslint-disable-next-line
     const [str,setStr] =React.useState('tip-heart')
     React.useEffect(()=>{
         City().then((res)=>{
             if(res.status === '1'){
                 Weather(res.adcode).then((resq)=>{
                     props.weatherCreator(resq.lives[0])
                 })
             }
             setStr('tips-heart')
         })// eslint-disable-next-line
     },[str])

     //动态打印时间
     const [now,setNow] = React.useState('')
     setInterval(()=>{
         const date =dayjs(new Date())
         const now =date.format('YYYY-MM-DD HH:mm:ss ddd')
         setNow(now)
     },1000)

     //判断天气显示对应图片的函数
     const confirm =()=>{
         switch (props.weather.weather){
             case '晴': return 'sunny';
                 // eslint-disable-next-line
             break;
             case '雨': return 'rainy';
                 // eslint-disable-next-line
             break;
             default:
                 return 'cloudy'
         }
     }
    return (
        <div className="dashboard">
            <div className="main-header">
                <div className="main-header-items">
                    <div className="toolTip">
                        <img alt={''} src={require('../../../assets/dashboard/heart-rate.gif')}/>
                        <h2 className={str}>心率</h2>
                    </div>
                    <div className="chart">
                        <Heart/>
                    </div>
                </div>
                <div className="main-header-items">
                    <div className="toolTip">
                        <img alt={''} src={require('../../../assets/dashboard/sleep.gif')}/>
                        <h2>睡眠</h2>
                    </div>
                <div className="chart">
                    <Sleep/>
                </div>
                </div>
                <div className="main-header-items">
                    <div className="toolTip">
                        <img alt={''} src={require( `../../../assets/dashboard/${ confirm() }.gif`)}/>
                        <h2>{props.weather.weather}</h2>
                        <p style={{color:'#C7DFF5',fontSize:'16px'}}>{now}</p>
                    </div>
                    <div className="chart">
                        <div className="temperature">
                            <span style={{color:'#407AFF',fontSize:'80px',fontWeight:'600'}}>{props.weather.temperature}</span>
                            <span style={{color:'#C7DFF5',fontSize:'30px'}}>℃</span>
                        </div>
                        <div className="location">
                            <EnvironmentOutlined style={{fontSize:'20px',color:'#FFC637'}} />
                            <span style={{marginLeft:'20px',color:'#407AFF'}}>{props.weather.province}省·{props.weather.city}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <Run/>
            </div>
        </div>
    )
}
export default connect(
    (state)=>{
        return {weather:state.weather}
    },{
        weatherCreator:weatherCreator
    }
)(Dashboard)

