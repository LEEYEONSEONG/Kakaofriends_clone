import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class ImgSlider extends Component {
  constructor() {
    super();

    this.state = {
      source: this.props.productDetails.image_list,
    };
  }

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
        {this.state.source.map((el) => {
          return (
            <div className="slideWrap">
              <img src={el} alt="" className="slideImg" />
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default ImgSlider;
