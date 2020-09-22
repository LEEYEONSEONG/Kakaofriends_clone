import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class ImgSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: false,
    };
    return (
      <Slider {...settings}>
        <div className="slideWrap">
          <img
            src="https://t1.daumcdn.net/friends/prod/product/8809721503980_AW_00.jpg"
            alt=""
            className="slideImg"
          />
        </div>
        <div className="slideWrap">
          <img
            src="https://t1.daumcdn.net/friends/prod/product/8809721503980_AW_01.jpg"
            alt=""
            className="slideImg"
          />
        </div>
        <div className="slideWrap">
          <img
            src="https://t1.daumcdn.net/friends/prod/product/8809721503980_AW_02.jpg"
            alt=""
            className="slideImg"
          />
        </div>
      </Slider>
    );
  }
}

export default ImgSlider;
