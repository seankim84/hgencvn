import React from 'react';

import './Quality.css';

const Quality = () => (
    <div className="Quality">
        <div className="qualityTitle">
            <h1>Quản lý chất lượng</h1>
        </div>
        <div className="qualityBox">
            <div className="qualityInner1">
                <table className="type08">
                                <thead>
                                <tr>
                                    <th scope="cols">Kiểm tra</th>
                                    <th scope="cols">Được tiến hành bởi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Kiểm tra bằng chụp chiếu phim tia X </th>
                                    <td>bên thứ 3</td>
                                </tr>
                                <tr>
                                    <th scope="row">Kiểm tra bằng máy siêu âm</th>
                                    <td>bên thứ 3</td>
                                </tr>
                                <tr>
                                    <th scope="row">Kiểm tra từ tính</th>
                                    <td>Điều kiện trong nhà & bên thứ 3</td>
                                </tr>
                                <tr>
                                    <th scope="row">Kiểm tra độ thẩm thấu</th>
                                    <td>Điều kiện trong nhà & bên thứ 3</td>
                                </tr>
                                </tbody>
                            </table>
            </div>
            <div className="qualityInner2">
                <div className="qualityPhoto"><img width="100%" height="100%" src='http://drive.google.com/uc?export=view&id=1_WH3i3UBS08WIsHhz2U5vOPQOk9-Tctb' alt="QualityPhotos"/></div>
                <div className="qualityPhoto"><img width="100%" height="100%" src='http://drive.google.com/uc?export=view&id=12Z4n7ffppAUOQ9MN4CDaXVqc3g08OLrd' alt="QualityPhotos"/></div>
                <div className="qualityPhoto"><img width="100%" height="100%" src='http://drive.google.com/uc?export=view&id=1pt82vjl4nhhgIxV97uk6kLzUSQsA5GYz' alt="QualityPhotos"/></div>
                <div className="qualityPhoto"><img width="100%" height="100%" src='http://drive.google.com/uc?export=view&id=1H48aCq8T3lVq4mR9Xu8IOJ_bkU5PksDx' alt="QualityPhotos"/></div>
            </div>
        </div>
    </div>
)

export default Quality;