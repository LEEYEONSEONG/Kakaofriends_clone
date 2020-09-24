import React, { Component } from "react";
import "./HotCard.scss";

class HotCard extends Component {
  state = {
    isToggle: false,
  };

  render() {
    const { isToggle } = this.state;
    const { img } = this.props;

    return (
      <div className="cardList">
        <img src={img} alt="이미지"></img>
        <div
          className="checkBox"
          onClick={() => this.setState({ isToggle: !isToggle })}
        >
          <button className={isToggle ? "toggle On" : "toggle"}></button>
        </div>
      </div>
    );
  }
}

export default HotCard;
