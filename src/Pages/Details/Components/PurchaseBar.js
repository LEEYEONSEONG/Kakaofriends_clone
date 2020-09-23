import React, { Component } from "react";
import "../Details.scss";

export class PurchaseBar extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      price: this.props.productDetails.price,
    };
  }

  preventDefault = (e) => {
    e.target.preventDefault();
  };

  render() {
    return (
      <div className="PurchaseBar">
        <div className="counter">
          <div className="counterWrap">
            <button
              className={this.state.count === 1 ? "minusBtnOff" : "minusBtnOn"}
              onClick={
                this.state.count > 1
                  ? () =>
                      this.setState(
                        { count: this.state.count - 1 },
                        () => this.multiply
                      )
                  : null
              }
            ></button>
            <input
              className="typeCount"
              type="textbox"
              value={this.state.count}
            ></input>
            <button
              className="plusBtn"
              onClick={() =>
                this.setState(
                  { count: this.state.count + 1 },
                  () => this.multiply
                )
              }
            ></button>
          </div>
          <div className="totalPrice">
            <span className="totalText">총 상품금액</span>
            <span className="price">
              {(this.state.price * this.state.count)?.toLocaleString()}원
            </span>
          </div>
        </div>
        <div className="addToCart">
          <form action="" className="submit">
            <button className="toCart"></button>
            <button className="toPurchase" onClick={this.preventDefault}>
              바로구매
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PurchaseBar;
