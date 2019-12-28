import React from "react"
import { 
  Card, 
  Button 
} from "antd"
import "./detail.less"

class Details extends React.Component{
  render(){
    return(
      <div>
        <Card>
          <Button type="primary">原始轨迹</Button>
          <div id="orderDetailMap"></div>
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">用车模式</div>
                <div className="detail-form-center"></div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-center"></div>
              </li>
              <li>
                <div className="detail-form-left">车辆编号</div>
                <div className="detail-form-center"></div>
              </li>
              <li>
                <div className="detail-form-left">用户姓名</div>
                <div className="detail-form-center"></div>
              </li>
              <li>
                <div className="detail-form-left">手机号码</div>
                <div className="detail-form-center"></div>
              </li>
            </ul>
          </div>
          <div className="detail-items">
            <div className="item-title">行驶轨迹</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">形成起点</div>
                <div className="detail-form-center"></div>
              </li>
              <li>
                <div className="detail-form-left">行程终点</div>
                <div className="detail-form-center"></div>
              </li>
              <li>
                <div className="detail-form-left">行驶里程</div>
                <div className="detail-form-center"></div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    )
  }
}

export default Details