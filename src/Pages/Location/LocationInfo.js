import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import "./LocationInfo.scss";

class LocationInfo extends React.Component {
  render() {
    const {
      img,
      storeShop,
      phone,
      time,
      adress,
      latitude,
      longitude,
    } = this.props.shop;

    return (
      <div className="locationInfo">
        <div className="wrapImg">
          <img alt="이미지" src={img} />
        </div>
        <div className="wrapContent">
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
              <span>{adress}</span>
            </div>
          </div>
          <div className="MapApi">
            <div>
              <Map
                containerStyle={mapStyle}
                google={this.props.google}
                zoom={17}
                initialCenter={{ lat: latitude, lng: longitude }}
              >
                <Marker
                  title={"LEEYEONSEONG"}
                  name={"KAKAOFRIEND's Shop"}
                  position={{ lat: latitude, lng: longitude }}
                />
              </Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD_OTGEAMBOHRJRlP891YETExxSwn_0bJ8",
})(LocationInfo);

const mapStyle = {
  width: "500px",
  height: "200px",
  right: "36px",
  top: "44px",
};
