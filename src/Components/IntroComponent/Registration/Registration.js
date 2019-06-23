import { Modal } from 'antd';
import React, { Component } from 'react';
import '../Certification/Certification.css';
import './Registration.css';


class Registration extends Component {
    render(){
        function Certi() {
            Modal.success({
                title: 'Authorized by the Vietnamese government',
                content: <div className="CertiContent">
                    <img style={{ width: "22vw" }} src='http://drive.google.com/uc?export=view&id=1nH2XO8k6adtiOz5fnlMlkptXeDuBBnLI' alt="Vietnam Registration"/>
                </div>,
            });
        }

        function Certi1() {
            Modal.success({
                title: 'Authorized by the Vietnamese government',
                content: <div>
                    <img style={{ width: "22vw" }} src='http://drive.google.com/uc?export=view&id=1LBlu9UhSk1WXGTa9lEm7MQd0NM5bbxoS' alt="Vietnam Registration"/>
                </div>,
            });
        }
        return(
            <div className="Certification" style={{background: "#f8f8f8"}}>
                <div className="CertiTitle"><h1>Đăng ký kinh doanh</h1></div>
                <div className="CertiBox">
                    
                    <div className="RegiBox">
                        <p>
                            Tài liệu đăng ký công ty là một văn <br />
                            bản của Chính phủ Việt Nam <br />
                            xác nhận rằng Công ty HG ENC tồn tại hợp pháp
                            Số đăng ký kinh doanh<br /> 
                            ( cũng được hiểu là mã số Công ty)<br /> 
                            Được sử dụng để nhận diện Công ty HG ENC tại VIệt Nam
                        </p>
                    </div>
                    <div className="CertiImageBox">
                        <div className="CertiImage">
                            <img 
                             style={{ width:"18vw"}} 
                             onClick={Certi} 
                             src='http://drive.google.com/uc?export=view&id=1nH2XO8k6adtiOz5fnlMlkptXeDuBBnLI' 
                             alt="ISO Certificate" 
                             />
                        </div>
                        <div>
                            <img  
                             style={{ width:"18vw"}} 
                             onClick={Certi1} 
                             src='http://drive.google.com/uc?export=view&id=1LBlu9UhSk1WXGTa9lEm7MQd0NM5bbxoS' 
                             alt="ISO Certificate" 
                             />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;
