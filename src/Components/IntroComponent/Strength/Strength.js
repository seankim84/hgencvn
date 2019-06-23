import { Icon } from 'antd';
import React from 'react';
import './Strength.css'

const Strength = () => {
    return (
        <div className="strength">
        <div className="strengthTitle">
            <h1>Thế mạnh</h1>
        </div>
        <div className="stContent">
            <div className="stBox1">
                <div className="stTitle">
                    <Icon type="sound" />   
                    <h1>Quản ly nhân lực trực tiếp</h1>
                </div>
                <div className="stExplain">
                    <p>
                      Cách thức quản lý nhân lực trực tiếp hợp lý <br />
                      Để tiếp cận công tác quản lý dự án xây dựng
                    
                    </p>
                </div>
            </div>
            <div className="stBox2">
                <div className="stTitle">
                    <Icon type="eye" />
                    <h1>Nội địa hóa</h1>
                </div>
                <div className="stExplain">
                    <p>
                        Với 16 năm kinh nghiệm tại Việt Nam với khả năng quản lý rủi ro
                    </p>
                </div>
            </div>
            <div className="stBox3">
                <div className="stTitle">
                    <Icon type="setting" />
                    <h1>Nhà máy sản xuất gia công </h1>
                </div>
                <div className="stExplain">
                    <p>
                        Dày dạn kinh nghiệm về chế tạo các sản phẩm kết cấu thép để hỗ trợ công trường thi công (kết cấu thép, bể chứa, silo)
                    </p>
                </div>
            </div>
            <div className="stBox4">
                <div className="stTitle">
                    <Icon type="dollar" />
                    <h1>Giá thành cạnh tranh hợp lý</h1>
                </div>
                <div className="stExplain">
                    <p>
                        Dựa trên cơ sở kinh nghiệm phong phú về cơ khí và xây dựng
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Strength;