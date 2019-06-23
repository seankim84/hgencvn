import React, { Component } from 'react';
import './Greeting.css'

class Greeting extends Component {
    render() {
        return ( 
            <div className = "Greeting" >
                <div className = "GreetingTitle" >
                <h1> Tổng Giám Đốc | Lời ngỏ </h1>  
                </div> 
                <div className = "GreetingExplain">
                    <div className="ceoExplain1">
                        Được thành lập vào năm 2002, <br />
                        Công ty TNHH Xây dựng và Kỹ thuật HG ENC đã đạt được
                        những thành tựu đáng kể tại Việt Nam <br />
                        bằng sự hài lòng của khách hàng thông qua Dịch vụ tốt nhất, <br />
                        Chất lượng cao nhất và Giá cạnh tranh.
                </div> 
                    <div className = "ceoExplain2" >
                        <div className = "ceoExplain3" >
                            Trong suốt 17 năm hoạt động với nhiều loại hình dự án cơ khí và xây dựng khác nhau.
                            HG ENC đã tích lũy được đáng kể kinh nghiệm và chuyên môn <br />
                            Thông qua những ưu thế trên, chúng tôi cung cấp một đội ngũ kỹ thuật chuyên môn cao and các dịch vụ xây dựng ở nhiều loại hình dự án nhà máy có thể kể đến như: nhà máy cán thép, nhà máy năng lượng, nhà máy hóa chất, và các loại hình nhà máy sản xuất khác.<br />
                            Bằng đam mê và tinh thần tiên phong, HG ENC sẽ tiếp tục hướng về phía trước để trở thành đơn vị dẫn đầu tại Việt Nam về xây dựng nhà máy.<br />
                            Cảm ơn
                        </div> 
                    <div>
            <img width="100%" height={"100%"} src='http://drive.google.com/uc?export=view&id=1Y79Vgo8dzjZ6GsWuIRQCpiAyWMvVu5PG' alt = "hgenc ceo" />
                </div> 
            </div> 
        </div> 
    </div>
        );
    }
}

export default Greeting;
