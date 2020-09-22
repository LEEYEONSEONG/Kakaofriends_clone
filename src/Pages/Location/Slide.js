import React from "react";
import Slider from "react-slick";
import "./Slide.scss";

class Slide extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: "on",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    };
    return (
      <Slider {...settings} className="babo">
        <div>
          <img
            src="https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_01_W_180219.jpg"
            alt="라이언"
          />
        </div>
        <div>
          <img
            src="https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_02_W.jpg"
            alt="라이언"
          />
        </div>
        <div>
          <img
            src="https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_03_W.jpg"
            alt="라이언"
          />
        </div>
        <div>
          <img
            src="https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_04_W.jpg"
            alt="라이언"
          />
        </div>
        <div>
          <img
            src="https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_05_W.jpg"
            alt="라이언"
          />
        </div>
      </Slider>
    );
  }
}

export default Slide;
