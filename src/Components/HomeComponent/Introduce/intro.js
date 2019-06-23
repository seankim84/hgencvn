import React, { Component } from 'react';
import './intro.css';


class Intro extends Component {
    render() {
        return(
            <div className="intro">
                <div className="introTitle">
                    <h1>Chúng ta là ai</h1>
                </div>
                <div className="introBox">
                    <div className="Plant">
                        <h3>Nhà máy</h3>
                        <div className="eachExplain">
                            Công ty hàng đầu  <br />
                            xây dựng dự án nhà  <br />
                            máy tại Việt Nam
                        </div>
                    </div>
                    <div className="Experience">
                        <h3>Kinh nghiệm</h3>
                        <div className="eachExplain">
                            Hơn 15 năm  <br />
                            kinh nghiệm hoạt  <br />
                            động tại Việt Nam
                        </div>
                    </div>
                    <div className="Employees">
                        <h3>Nhân viên</h3>
                        <div className="eachExplain">
                            Với qui mô khoảng  <br />
                            600 nhân viên <br />
                            bao gồm các kỹ sư<br /> 
                            có trình độ kinh nghiệm cao
                        </div>
                    </div>
                    <div className="Fabrication">
                        <h3>Gia công chế tạo</h3>
                        <div className="eachExplain">
                            Công ty HG E&C<br /> 
                            có nhà máy  <br/>
                            gia công chế tạo riêng
                        </div>
                    </div>
                </div>
                <div className="introFooter">
                        <span> Một trong những đơn <strong style={{color: "#1d3977"}}> vị hàng đầu trong lĩnh vực Nhà xưởng </strong> <strong style={{color:"#B40404"}}>công nghiệp tại</strong> Việt Nam </span>
                </div>
            </div>
        )
    }
}

export default Intro