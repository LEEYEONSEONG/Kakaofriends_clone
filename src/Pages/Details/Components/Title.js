import React, { Component } from "react";
import "../Details.scss";

export class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { productInfo } = this.props;
    return (
      <div className="Title">
        <div className="titleWrap">
          <h2 className="titleText">{productInfo[0] && productInfo[0].name}</h2>
          <ul className="share">
            <li className="shareBtn">
              <img
                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_katalk.png"
                alt=""
                className="btnImg"
              />
            </li>
            <li className="shareBtn">
              <img
                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_kastory.png"
                alt=""
                className="btnImg"
              />
            </li>
            <li className="shareBtn">
              <img
                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_facebook.png"
                alt=""
                className="btnImg"
              />
            </li>
            <li className="shareBtn">
              <img
                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_twitter.png"
                alt=""
                className="btnImg"
              />
            </li>
          </ul>
          <div className="titlePrice">
            {productInfo[0] && productInfo[0].price.toLocaleString()}원
          </div>
          <div className="titleScore">
            <div className="star">
              {productInfo[0] &&
                Array(productInfo[0].score)
                  .fill(1)
                  .map((filledstar) => {
                    return <span className="eachStar"></span>;
                  })}
              {productInfo[0] &&
                Array(5 - productInfo[0].score)
                  .fill(1)
                  .map((emptystar) => {
                    return <span className="blankStar"></span>;
                  })}
            </div>
            ({productInfo[0] && productInfo[0].review_count})
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
