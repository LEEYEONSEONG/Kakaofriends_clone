import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class ImgSlider extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { productInfo } = this.props;
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
            src={productInfo[0] && productInfo[0].image_list[0]}
            alt=""
            className="slideImg"
          />
        </div>

        <div className="slideWrap">
          <img
            src={productInfo[0] && productInfo[0].image_list[1]}
            alt=""
            className="slideImg"
          />
        </div>

        <div className="slideWrap">
          <img
            src={productInfo[0] && productInfo[0].image_list[2]}
            alt=""
            className="slideImg"
          />
        </div>
      </Slider>
    );
  }
}

export default ImgSlider;
