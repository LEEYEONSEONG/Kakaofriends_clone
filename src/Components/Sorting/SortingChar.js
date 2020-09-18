import React from "react";

class SortingChar extends React.Component {
  constructor() {
    super();
    this.state = {
      isImgOn: false,
    };
  }
  render() {
    const { name, nameKor, imgOn, img } = this.props;
    const { isImgOn } = this.state;
    return (
      <li
        className="selectModalItem"
        onMouseOver={() => this.setState({ isImgOn: true })}
        onMouseOut={() => this.setState({ isImgOn: false })}
      >
        <div className="selectCharWrap">
          <div>
            <span className="charImgWrap">
              <img alt={name} src={isImgOn ? imgOn : img} />
            </span>
            <span>
              <img
                alt="선택된 옵션"
                className="selectedCharIcon notSelected"
                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/category_icn-done.png"
              />
            </span>
          </div>
          <span>{nameKor}</span>
        </div>
      </li>
    );
  }
}

export default SortingChar;
