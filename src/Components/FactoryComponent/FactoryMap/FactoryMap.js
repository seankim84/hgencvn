import { Modal } from 'antd';
import React, { Component } from 'react';
import './FactoryMap.css';


function info1() {
  Modal.info({
    title: 'Thiết bị tổ hợp và dây chuyền máy CNC',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src='http://drive.google.com/uc?export=view&id=1Ougtz55xqYcCfu8FPNzqnQ0R65zXFgNW' alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info2() {
  Modal.info({
    title: 'Dây chuyền công tác hàn',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src='http://drive.google.com/uc?export=view&id=1hncGBwNuwnqo9lQesrEqIq217nLhPNZ3' alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info3() {
  Modal.info({
    title: 'Khu vực nhà sơn',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src='http://drive.google.com/uc?export=view&id=1_AEUKsQADjFnzV55vKYsto8yVdQa9EfN' alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info4() {
  Modal.info({
    title: 'Khu vực đóng kiện thành phẩm',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src='http://drive.google.com/uc?export=view&id=14q6kSUig8eqktohqXXv6-XAgM-6m2-5J' alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info5() {
  Modal.info({
    title: 'Bãi gia công lộ thiên (bồn chứa)',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src='https://drive.google.com/open?id=1bCCTks1TVlMaGHyVFhRfS7RpWUdFaWWI' alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info6() {
  Modal.info({
    title: 'Kho chứa vật liệu thô',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src='https://drive.google.com/open?id=1AMovZrHI_q9ZipGmZp_huaQVWgN08sfX' alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

class FactoryMap extends Component {
    render() {
        return (
            <div className="FactoryMap">
                <div className="mapTitle">
                    <h1>Mặt bằng tổng quan nhà máy</h1>
                </div>
                <div className="mapBox">
                    <div className="mapExplain">
                        <strong className="layOutTitle1">Khu vực</strong>
                        <strong className="layOutTitle2">làm việc </strong>
                        <div className="mapList">
                            <div onClick={info1} className="ListMap"><p className="hoverlayout1"><strong>1</strong> Thiết bị tổ hợp và dây chuyền máy CNC</p></div><br />
                            <div onClick={info2} className="ListMap"><p className="hoverlayout2"><strong>2</strong> Dây chuyền công tác hàn</p></div><br />
                            <div onClick={info3} className="ListMap"><p className="hoverlayout3"><strong>3</strong> Khu vực nhà sơn</p></div><br />
                            <div onClick={info4} className="ListMap"><p className="hoverlayout4"><strong>4</strong> Khu vực đóng kiện thành phẩm</p></div><br />
                            <div onClick={info5} className="ListMap"><p className="hoverlayout5"><strong>5</strong> Bãi gia công lộ thiên (bồn chứa)</p></div><br />
                            <div onClick={info6} className="ListMap"><p className="hoverlayout6"><strong>6</strong> Kho chứa vật liệu thô</p></div>
                        </div>
                    </div>
                    <div className="Layout"><img width="100%" height="90%" src='http://drive.google.com/uc?export=view&id=1FXfXy63h8v-dezAudoGdGbB3TP1rnh-0' alt="hgenc factory"/></div>
                </div>
            </div>
        ) 
    }
}

export default FactoryMap;