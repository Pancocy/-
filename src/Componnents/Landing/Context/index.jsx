import {Layout} from "antd";
import './index.css'
import {Routes,Route} from "react-router-dom";
//引入对应路由组件
import Home from "../../Pages/Home/index.tsx";
import Dashboard from "../../Pages/Dashboard";
import PhysicalIndex from "../../Pages/PhysicalIndex/index.jsx";
import SportsRecord from "../../Pages/SportsRecord";
import SleepCondition from "../../Pages/SleepCondition";
import RecordMood from "../../Pages/RecordMood";
const {Content} = Layout
function Context(){
    return(
        <div className="context">
            <Layout>
                <Content>
                    <Routes>
                        <Route path={'*'} element={<Home/>}></Route>
                        <Route path={'/dashboard'} element={<Dashboard/>}></Route>
                        <Route path={'/physical-index'} element={<PhysicalIndex/>}></Route>
                        <Route path={'/sports-record'} element={<SportsRecord/>}></Route>
                        <Route path={'/sleep-condition'} element={<SleepCondition/>}></Route>
                        <Route path={'/record-mood'} element={<RecordMood/>}></Route>
                    </Routes>
                </Content>
            </Layout>
        </div>
    )
}

export default Context