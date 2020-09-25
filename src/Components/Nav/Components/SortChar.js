import React from "react";
import "./DropDownMain.scss";

class SortChar extends React.Component {
  constructor() {
    super();
    this.state = {
      isImgOn: false,
    };
  }
  render() {
    const { id, name, nameKor, imgOn, img } = this.props;
    const { isImgOn } = this.state;
    return (
      <li
        key={id}
        className="sortByCharacter"
        onMouseOver={() => this.setState({ isImgOn: true })}
        onMouseOut={() => this.setState({ isImgOn: false })}
      >
        <div className="selectCharWrap1">
          <div className="selectCharWrap2">
            <span className="charImgWrap">
              <img
                alt={name}
                src={isImgOn ? imgOn : img}
                className="eachChar"
              />
            </span>
          </div>
          <span className="charName">{nameKor}</span>
        </div>
      </li>
    );
  }
}

export default SortChar;
