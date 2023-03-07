import React from "react";
import EChartsReact from "echarts-for-react";

import getHeart from "../../../../api/dashborad/heart";
export default function Heart(){
    const [low,setlow]=React.useState(0)
    const [high,sethigh]=React.useState(0)
    const [normal,setnormal]=React.useState(0)

    React.useEffect(()=>{
       getHeart('low').then((res)=>{
           setlow(res.data.length)
       })
        getHeart('high').then((res)=>{
            sethigh(res.data.length)
        })
        getHeart('normal').then((res)=>{
            setnormal(res.data.length)
        })
    },[low,high,normal])
    const option ={
        tooltip: {
            trigger: 'item',
            formatter:'{b} , {c}次'
        },
        series: [
            {
                name: '心率',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 12,
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: normal, name: '90~110次/分' },
                    {value:high,name: '大于110次/分'},
                    { value: low, name: '小于90次/分' }
                ],
                color:['#4DCC17','#EB505B','#E5E2E2']

            }
        ]
    }
    return (
        <EChartsReact option={option} style={{ height:'100%' }}/>
    )
}