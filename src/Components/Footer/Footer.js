import { Icon } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <div className="footer">
        <div className="footerIntro">
            <span>HG Corporation | Copyright&copy; All rights reserved |  2019 HG E&C Corporation</span>
        </div>
        <div className="footerLogo">
            <Link to={"/"}>
                <img style={{width:"15%"}} src='http://drive.google.com/uc?export=view&id=1TXI40glkXTJbYhfusahwxG0jSuNLyL6d' alt="hgenc"/>
            </Link>
        </div>
            
        <div className="footerIcon">
            <div className="facebook"><a target="blank" href={"https://www.facebook.com/HGENCVN/"}><Icon style={{ padding:"0 1rem", fontSize:"2.5rem" }} type="facebook" /></a></div>
            <div className="linkedin"><a target="blank" href={"https://www.linkedin.com/company/hgenc/"}><Icon style={{ padding:"0 1rem", fontSize:"2.5rem" }} type="linkedin" /></a></div>
            <div className="instagram"><a href={"http://localhost:3000/contact"}><Icon style={{ padding:"0 1rem", fontSize:"2.5rem" }} type="mail" /></a></div>
        </div>
    </div>
)
    
export default Footer;