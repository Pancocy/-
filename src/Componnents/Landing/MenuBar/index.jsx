import {Menu} from "antd";
import './index.css'
import logo from '../../../assets/images/running.svg'
import {HomeOutlined,DashboardOutlined,BarChartOutlined,FormOutlined,OrderedListOutlined,HeartOutlined} from '@ant-design/icons'
import {useNavigate,useLocation} from "react-router-dom";
import persistStore from "../../../api/login/persistStore";
function MenuBar(){
    //定义menubar的选项
    const MenuList =[
        {
            key:'/',
            label:'首页',
            icon:<HomeOutlined />
        },
        {
            key:'/dashboard',
            label: '仪表盘',
            icon:<DashboardOutlined />
        },
        {
            key:'/physical-index',
            label:'身体指标',
            icon:<BarChartOutlined />
        },
        {
            key:'/sports-record',
            label:'运动记录',
            icon:<FormOutlined />
        },
        {
            key:'/sleep-condition',
            label:'睡眠情况',
            icon:<OrderedListOutlined />
        },
        {
            key:'/record-mood',
            label:'记录心情',
            icon:<HeartOutlined />
        },
    ]
    //定义点击每个item后路由跳转的方法
    const navigate = useNavigate()
    const location =useLocation()
    const navigation=(e)=>{
        // console.log(e)
        navigate(e.key)
    }
    const loginOut=()=>{
        persistStore.removeUser()
        navigate('/login',{replace:true})
    }
    return(
        <div className="menubar">
            <div className="menu-header">
                <img src={logo} alt={'loading error'}/>
            </div>
            <Menu
            className={'menu'}
            mode={'inline'}
            defaultSelectedKeys={'/'}
            selectedKeys={location.pathname}
            items={ MenuList }
            onClick={navigation}
            >
            </Menu>
            <div className="login-out">
                <button onClick={loginOut}>退出登录</button>
            </div>
        </div>
    )
}

export default MenuBar