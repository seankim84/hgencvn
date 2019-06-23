import React, { Component } from 'react'
import { Link } from  'react-router-dom';
import HeaderDrawer from './Drawer/HeaderDrawer';
import './Header.css';

class Header extends Component {
  render(){
    return(
      <div className="HeaderMain">
        <div className="ShadowHeader">
          <div className="ShadowTitle">
            <div className="ShadowLogo">
              <Link style={{ textDecoration:"none" }} to='/'>
                <img width="100%" height="100%" src='http://drive.google.com/uc?export=view&id=1TXI40glkXTJbYhfusahwxG0jSuNLyL6d' alt="shadow header" />
              </Link>
            </div>
            <div className="ShadowMenu"><HeaderDrawer /></div>
          </div>
          
        </div>

    <div className="Header">
      <div className="blueLine"></div>
      <div className="HeaderNav">
        <div className="HeaderTitle">
        <Link to='/'>
          <img style={{ width:"100%" }} src='http://drive.google.com/uc?export=view&id=1TXI40glkXTJbYhfusahwxG0jSuNLyL6d' alt="hgenc"/>
        </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/intro'}>Giới thiệu</Link>
            </li>
            <li>
              <Link to={'/mechanical'}>Cơ khí</Link>
            </li>
            <li>
              <Link to={'/civil'}>Xây dựng</Link>
            </li>
            <li>
              <Link to={'/invest'}>Đối tác</Link>
            </li>
            <li>
              <Link to={'/factory'}>Nhà máy</Link>
            </li>
            <li>
              <Link to={'/contact'}>Liên hệ</Link>
            </li>
          </ul>
        </nav>
      </div>
      
        <div className="redLine"></div>
      
    </div>
  </div>
    )
  } 
}

export default Header;