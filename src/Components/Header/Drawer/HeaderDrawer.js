import { Drawer, Icon } from "antd";
import React ,{ Component } from 'react';
import { Link } from "react-router-dom";
import './HeaderDrawer.css';


class HeaderDrawer extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
      });
    };

  onClose = () => {
      this.setState({
          visible: false,
      });
  };

  render() {
    return (
      <div>
          <div className="MenuDrawer">
            <Icon style={{fontSize: "1.5rem"}} type="align-left" onClick={this.showDrawer} />
          </div>
          <Drawer 
              className="DrawerItems" 
              placement={"top"} 
              closable={false} 
              onClose={this.onClose} 
              visible={this.state.visible}
              height={60}
              >
          <div className="DrawerItems">
            <Link to={"/intro"}>Intro</Link>
            <Link to={'/business'}>Mechanical</Link>
            <Link to={"/civil"}>Civil</Link>
            <Link to={"/invest"}>Invest</Link>
            <Link to={"/factory"}>Factory</Link>
            <Link to={'/contact'}>Contact</Link>
          </div>
          </Drawer>
      </div>
      );
  }
}

export default HeaderDrawer;