import React from "react";
import "./LocationDetail.scss";

class LocationDetail extends React.Component {
  render() {
    const { img, storeShop, phone, time, adress, link } = this.props.detailShop;

    return (
      <div className="locationDetail">
        <div className="shopDetailImg">
          <img alt="이미지" src={img} />
          <div className="shopDetail">
            <strong>{storeShop}</strong>
            <div className="wrapText">
              <div className="textinfo">
                <img
                  alt="이미지"
                  src="https://t1.kakaocdn.net/friends/new_store/ico_phone.png"
                />
                <span>{phone}</span>
              </div>
              <div className="textinfo">
                <img
                  alt="이미지"
                  src="https://t1.kakaocdn.net/friends/new_store/ico_time.png"
                />
                <span>{time}</span>
              </div>
              <div className="textinfo">
                <img
                  alt="이미지"
                  src="https://t1.kakaocdn.net/friends/new_store/ico_map.png"
                />
                <span>
                  {adress}
                  <br />
                  <a href={link}>지도 자세히 보기</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationDetail;
