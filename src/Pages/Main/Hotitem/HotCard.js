import React, { Component } from "react";
import "./HotCard.scss";

class HotCard extends Component {
  constructor() {
    super();

    this.state = {
      isTogle: false,
    };
  }

  render() {
    const { isTogle } = this.state;
    const { img } = this.props;

    return (
      <div className="cardList">
        <img src={img} alt="이미지"></img>
        <div
          className="checkBox"
          onClick={() => this.setState({ isTogle: !isTogle })}
        >
          <button className={isTogle ? "togle On" : "togle"}></button>
        </div>
      </div>
    );
  }
}

export default HotCard;
