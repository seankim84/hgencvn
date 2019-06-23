import { Steps, Button } from 'antd';
import React,{ Component } from 'react';
import './ContactMap.css';

const Step = Steps.Step;

const steps = [{
  title: 'OFFICE',
  content: <div className="googleMap">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9701502283615!2d106.74491965473493!3d10.800989784250735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175261317be47af%3A0xcd4d9403baeb592f!2sAn+Phu+Cantavil!5e0!3m2!1sko!2skr!4v1548744967831" 
            width="100%" 
            height="450"
            title="HG Office"
            frameborder="0" 
            styles={{border: 0}}
            allowfullscreen>
    </iframe>
  </div>,
}, 

{
  title: 'FACTORY',
  content: <div className="googleMap">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.466472621308!2d106.84217231480008!3d10.698457992374477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175233434440a35%3A0xdea93749bbfdb390!2sC%C3%94NG+TY+TNHH+MTV+HG+ENC+VINA!5e0!3m2!1sko!2s!4v1548743084815" 
            width="100%" 
            height="450"
            title="HG Factory" 
            frameborder="0" 
            styles={{broder:0}} 
            allowfullscreen>
    </iframe>
  </div>,
}
];

class ContactMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className="MapContainer">
        <div className="MapTitle">
          <h1>Liên hệ</h1>
        </div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Nhà máy</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Văn phòng 
            </Button>
            )
          }
        </div>
      </div>
    );
  }
}

export default ContactMap;