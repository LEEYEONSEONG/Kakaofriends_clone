import React from "react";
import Slide from "./Slide";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import LocationInfo from "./LocationInfo";
import LocationDetail from "./LocationDetail";
import "./Location.scss";

class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      shopList: [],
      shopDetailList: [],
    };
  }

  componentDidMount() {
    fetch("/Data/locationmock.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          shopList: res.data,
          shopDetailList: res.detailData,
        });
      });
  }

  render() {
    const { shopList, shopDetailList } = this.state;

    return (
      <>
        <div className="location">
          <Nav />
          <Slide />
          <div className="kakaoContent">
            <ul className="language">
              <li>한국어</li>
              <li>English</li>
              <li>日本語</li>
              <li>中文(简体)</li>
              <li>中文(繁體)</li>
            </ul>
          </div>
          {shopList.map((info, i) => {
            return <LocationInfo key={i} shop={info} />;
          })}
          <div className="kakakoDetail">
            <ul className="kakaoShop">
              <li>스토어 전체</li>
              <li>한국</li>
              <li>일본</li>
            </ul>
          </div>
          <div className="detailList">
            {shopDetailList.map((detailInfo, i) => {
              return <LocationDetail key={i} detailShop={detailInfo} />;
            })}
          </div>
          <div className="bottomBanner">
            <img
              alt="배너"
              src="https://t1.kakaocdn.net/friends/prod/info/banner_charInfo_kr_W.png"
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Location;
