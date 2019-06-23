import { Icon } from 'antd';
import React from 'react';
import './Construct.css';
 
const Construct = () => {
    return (
        <div className="Construct">
            <div className="constructTitle">
                <h1>Nhà máy</h1>
            </div>
            <div className="constructBox">
                <div className="constructInnerBox">
                    <div className="constructIcon">
                        <Icon style={{fontSize:"3.5rem", color: "#EC2434"}} type="fire" />
                    </div>
                    <div className="constructExplain">
                        <h4>Nhóm thiết kế</h4>
                        <p>
                            Kiến thức sâu rộng về sử dụng phần mềm thiết kế kết cấu Tekla<br /> 
                            Phần mềm AutoCad cho công tác gia công chế tạo kết cấu thép
                        </p>
                    </div>
                </div>
                <div className="constructInnerBox">
                    <div className="constructIcon">
                        <Icon style={{fontSize:"3.5rem", color: "#26396f"}} type="like" />
                    </div>
                     <div className="constructExplain">
                        <h4>Nhóm gia công chế tạo</h4>
                        <p>
                            Kinh nghiệm phong phú về gia công chế tạo các loại hình <br /> 
                            kết cấu thép khác nhau như kết cấu thép xây dựng, <br />
                            bồn chứa chịu áp lực, và các cấu kiện kết cấu thép khác.
                        </p>
                    </div>
                </div>
                <div className="constructInnerBox">
                    <div className="constructIcon">
                        <Icon style={{fontSize:"3.5rem", color: "#24A44C"}} type="global" />
                    </div>
                     <div className="constructExplain">
                        <h4>Nhóm quản lý dự án</h4>
                        <p>
                           Kỹ năng quản lý bao quát chuyên sâu<br />
                           phù hợp với các loại hình dự án gia công đảm bảo tiến độ giao hàng đúng cam kết
                        </p>
                    </div>
                </div>
            </div>
            <div className="factoryBox">
                <div className="factoryExplain1">
                  <div className="factoryInnerExplain1">
                    <h1 style={{color:"#223973"}}>MAIN & ITEMS</h1>
                    <p><Icon type="tool" /> Kết cấu thép, Ống thông gió, Đường ống</p>
                    <p><Icon type="setting" /> Bồn áp lực, thiết bị chuyển nhiệt</p>
                    <p><Icon type="tags" /> Những sản phẩm kết cấu thép khác</p>
                    <div className="factoryButton">
                        <button><a target="blank" href="https://www.google.com/maps/place/C%C3%94NG+TY+TNHH+MTV+HG+ENC+VINA/@10.698458,106.844361,16z/data=!4m5!3m4!1s0x0:0xdea93749bbfdb390!8m2!3d10.698458!4d106.844361?hl=ko-KR">View More</a></button>
                    </div>
                  </div>
                </div>
                <div className="factoryExplain2">
                  <div className="innerFactoryPhoto">
                    <img width="100%" height="100%" src='http://drive.google.com/uc?export=view&id=1JjTBVivMvnLL0xbSNSYMWfPB80U-Q86v' alt="factory menu" />
                  </div>
                  <div className="innerFactoryPhoto">
                    <img width="100%" height="100%" src='http://drive.google.com/uc?export=view&id=1Q-nVYw6Bi-kz2VbYAtgkfLAC6ROHXiYc' alt="factory menu" />
                  </div>
                  <div className="innerFactoryPhoto">
                    <img width="100%" height="100%" src='http://drive.google.com/uc?export=view&id=1W8GElRDARaZOfHUU-aEsdJiL5u0s3Id1' alt="factory menu" />
                  </div>
                  <div className="innerFactoryPhoto">
                    <img width="100%" height="100%" src='http://drive.google.com/uc?export=view&id=10vqjaKhs74mzWb8tueCMklaImg1lj_Up' alt="factory menu" />
                  </div>
                </div>
            </div>
        </div>
    ) 
}

export default Construct;