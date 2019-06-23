import { Icon } from 'antd';
import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => (
    <div className="contactInfo">
        <div className="contactInfoBox">
            <div className="InnerContactBox">
                <div className="contactBoxTitle">
                    <h1><Icon style={{ color: "#26396f" }} type="desktop" /> Văn phòng</h1>
                </div>
                <div className="contactContent">
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="pushpin" /> Địa điểm</p>
                        </div>
                        <div>
                            <span>
                                Tầng 8 Khu Phức Hợp Cantavil An Phú,<br /> 
                                Số 1 Đường Song Hành Xa Lộ Hà Nội, Phường An Phú, Quận 2, Thành phố Hồ Chí Minh
                            </span>
                        </div>
                    </div>
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="phone" /> Điện thoại</p>
                        </div>
                        <div>
                            <span>
                                0283.74013 68 / 69
                            </span>
                        </div>
                    </div>
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="mail" /> EMAIL</p>
                        </div>
                        <div>
                            <span>
                                hansangwoo@hg-enc.com
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="InnerContactBox">
                <div className="contactBoxTitle">
                    <h1><Icon style={{ color: "#a52218" }} type="setting" /> Nhà máy</h1>
                </div>
                <div className="contactContent">
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="pushpin" /> Địa điểm</p>
                        </div>
                        <div>
                            <span>
                                Khu tiểu thủ công nghiệp Nhơn Trạch, <br />
                                Xã Phú Thạnh, Huyện Nhơn Trạch, Tỉnh Đồng Nai
                            </span>
                        </div>
                    </div>
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="phone" /> Điện thoại</p>
                        </div>
                        <div>
                            <span>
                                0251.3519368
                            </span>
                        </div>
                    </div>
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="mail" /> EMAIL</p>
                        </div>
                        <div>
                            <span>
                                yunkyongbok@hg-enc.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default ContactInfo;