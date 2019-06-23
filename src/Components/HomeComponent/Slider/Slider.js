import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }

  next() {
    this.carousel.next();
  }

  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      autoplay: true,   
      dots: false,
      infinite: true, 
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 1000,
    };

    return (
      <div className="mainSlider">
        <Carousel ref={node => this.carousel = node } {...props}>
            <div className="mainSlider1">
              <h3 className="mainSliderExplain">
                Kiến trúc là bộ môn nghệ thuật<br /> 
                điêu khắc về chỗ ở con người</h3>
            </div>
            <div className="mainSlider2">
              <h3 className="mainSliderExplain">Cuộc sống là kiến trúc và kiến trúc là <br />chiếc gương phản chiếu của cuộc sống</h3>
            </div>
            <div className="mainSlider3">
              <h3 className="mainSliderExplain">Mỗi vị trí mới đòi hỏi một kiến trúc mới</h3>
            </div>
            <div className="mainSlider4">
              <h3 className="mainSliderExplain">Chúng ta được tạo nên từ những <br />điều tốt đẹp mà chúng ta đang làm</h3>
            </div>
        </Carousel>

        <div className="sliderButton">
          <div className="buttonLeft" onClick={this.previous}>
            <Icon style={{ fontSize:"2.5rem", color: "#ffffff" }} className="leftIcon" type="left" />
          </div>
          <div className="buttonRight" onClick={this.next}>
            <Icon style={{ fontSize:"2.5rem", color: "#ffffff" }} className="rightIcon" type="right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;