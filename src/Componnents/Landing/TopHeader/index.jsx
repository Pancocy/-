import './index.css'
import {Form,Input,Select} from "antd";
import {DollarCircleOutlined,BellOutlined} from '@ant-design/icons'
import persistStore from "../../../api/login/persistStore";
const {Option} =Select
function TopHeader(){
    const validate = persistStore.getUser()
    return(
        <div className={'top-header'}>
            <div className="search-form">
                <Form  style={{maxWidth: 800,height:'40px'}}>
                    <Form.Item>
                        <Input.Group compact>
                            <Form.Item>
                                <Input
                                    placeholder={'请输入内容'}
                                    style={{width:'400px'}}
                                />
                            </Form.Item>
                            <Form.Item style={{marginLeft:'20px'}}>
                                <Select placeholder={'请选择分类'}>
                                    <Option value="Zhejiang">Zhejiang</Option>
                                    <Option value="Jiangsu">Jiangsu</Option>
                                </Select>
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>
                </Form>
            </div>
            <div className="userInfo">
                <div className="account-level">
                    <DollarCircleOutlined />
                    <p>{validate.level}</p>
                </div>
                <div className="notifications">
                    <BellOutlined />
                </div>
                <div className="user">
                    <li>
                        <img src={require(`../../../assets/avatar/${validate.level}.png`)} alt={'loading error'}/>
                    </li>
                    <p>
                        {validate.nickname}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default TopHeader