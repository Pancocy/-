import EChartsReact from "echarts-for-react";
import React from "react";
//引入请求跑步数据的接口
import getRun from "../../../../api/dashborad/run";
export default function Run(){
    const [inside,setInside] = React.useState([])
    const [out,setOut] = React.useState([])
    React.useEffect(()=>{
        Promise.all([getRun('室内'),getRun('室外')]).then((res)=>{
            let arr = []
            let brr = []
            res[0].forEach((e)=>{
                arr.push(e.distance)
                setOut(arr)
            })
            res[1].forEach((e)=>{
                brr.push(e.distance)
                setInside(brr)
            })
        })
    },[])

    const option ={
        title: {
            text: '过去两周每天室内外跑步里程'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {},
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: true },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['2月1日', '2月2日', '2月3日', '2月4日', '2月 5日', '2月6日', '2月7日', '2月8日', '2月9日', '2月10日', '2月11日','2月12日', '2月13日', '2月14日',]
        },
        yAxis: {
            type: 'value',
            interval:5,
            axisLabel: {
                formatter: '{value} KM'
            }
        },
        series: [
            {
                name: '室外',
                type: 'line',
                data:out,
                color :['#FFC637'],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            },
            {
                name: '室内',
                type: 'line',
                data: inside,
                color: ['#4DCC17'],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'Avg' },
                        [
                            {
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            },
                            {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Max'
                                },
                                type: 'max',
                                name: '最高点'
                            }
                        ]
                    ]
                }
            }
        ]
    }
    return (


    <EChartsReact option={option} style={{ height:'100%' }}/>
    )
}
