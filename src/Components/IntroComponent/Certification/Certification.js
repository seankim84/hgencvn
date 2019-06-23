import { Modal } from 'antd';
import React, { Component } from 'react';

import './Certification.css';

class Certification extends Component {
    render(){
        function Certi() {
            Modal.success({
                title: 'ISO Certification EN',
                content: <div className="CertiContent">
                    <img style={{ width: "22vw" }} src='http://drive.google.com/uc?export=view&id=139io2whWZnN0C4pqiVhdHHsgtt25NHEn' alt="ISO Certification"/>
                </div>,
            });
        }

        function Certi1() {
            Modal.success({
                title: 'ISO Certification VN',
                content: <div>
                    <img style={{ width: "22vw" }} src='http://drive.google.com/uc?export=view&id=1b30LZ-h35S4HT5dGYPkQielmoaWWeIr_' alt="ISO Certification"/>
                </div>,
            });
        }
        return(
            <div className="Certification">
                <div className="CertiTitle"><h1>Chứng nhận</h1></div>
                <div className="CertiBox">
                    <div className="CertiImageBox">
                        <div className="CertiImage">
                            <img 
                             style={{ width:"15vw"}} 
                             onClick={Certi} 
                             src='http://drive.google.com/uc?export=view&id=139io2whWZnN0C4pqiVhdHHsgtt25NHEn' 
                             alt="ISO Certificate" 
                             />
                        </div>
                        <div className="CertiImage">
                            <img  
                             style={{ width:"15vw"}} 
                             onClick={Certi1} 
                             src='http://drive.google.com/uc?export=view&id=1b30LZ-h35S4HT5dGYPkQielmoaWWeIr_' 
                             alt="ISO Certificate" 
                             />
                        </div>
                    </div>
                    <div className="CertiBox2">
                        <p>
                            Chứng nhận ISO 9001 được chứng nhận có nghĩa là một tổ chức đã đáp ứng đầy đủ các yêu cầu qui định trong ISO 9001.
                            Được định nghĩa như là hệ thống quản lý chất lượng ISO 9000(QMS)
                            ISO 9001 đánh giá xem Hệ thống quản lý chất lượng của bạn có phù hợp và hiệu quả hay không, đồng thời buộc bạn phải xác định và thực hiện các cải tiến.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Certification;
