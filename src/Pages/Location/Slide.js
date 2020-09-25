import React from "react";
import Slider from "react-slick";
import "./Slide.scss";

class Slide extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: "on",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2200,
    };
    return (
      <Slider {...settings} className="babo">
        {SLIDERS.map((slide, index) => {
          return (
            <div key={index}>
              <img src={slide} alt="라이언" />
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default Slide;

const SLIDERS = [
  "https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_01_W_180219.jpg",
  "https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_02_W.jpg",
  "https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_03_W.jpg",
  "https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_04_W.jpg",
  "https://t1.kakaocdn.net/friends/prod/info/bg_storeInfo_05_W.jpg",
];
