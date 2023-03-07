import React from "react";
import EChartsReact from "echarts-for-react";
import getSleep from "../../../../api/dashborad/sleep";
export default function Sleep(){
    const [low,setlow]=React.useState(0)
    const [height,setheight]=React.useState(0)
    const [normal,setnormal]=React.useState(0)
    React.useEffect(()=>{
        getSleep().then((res)=>{
            setlow(res.week1.length)
            setheight(res.week2.length)
            setnormal(res.week3.length)
        })
    },[low,height,normal])
    
    const option ={
        tooltip: {
            trigger: 'axis',
            axiosPointer:{
                type:'shadow'
            }
        },
        legend:{},
        grid:{},
        yAxis:{
            type: 'value',
            interval:5
        },
        xAxis:{
            type:'category',
            data:[
                '第一周', '第二周', '第三周'
            ]
        },
        series: [
            {
                name: '大于8小时',
                type: 'bar',
                data:[low,height,normal],
                color:['#6C63FF']
            },
            {
                name: '小于8小时',
                type: 'bar',
                data:[7-low,7-height,7-normal],
                color:['#407AFF']
            },

        ]
    }
    return (
        <EChartsReact option={option} style={{ height:'220px' }}/>
    )
}