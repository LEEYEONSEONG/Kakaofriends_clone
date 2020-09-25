import React, { Component } from "react";
import "../Details.scss";

export class PurchaseBar extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  preventDefault = (e) => {
    e.target.preventDefault();
  };

  increaseQty = () => {
    return this.state.count > 1
      ? this.setState({ count: this.state.count - 1 })
      : null;
  };

  render() {
    const { count } = this.state;
    const { productInfo } = this.props;
    return (
      <div className="PurchaseBar">
        <div className="counter">
          <div className="counterWrap">
            <button
              className={count === 1 ? "minusBtnOff" : "minusBtnOn"}
              onClick={this.increaseQty}
            ></button>
            <input className="typeCount" type="textbox" value={count}></input>
            <button
              className="plusBtn"
              onClick={() => this.setState({ count: count + 1 })}
            ></button>
          </div>
          <div className="totalPrice">
            <span className="totalText">총 상품금액</span>
            <span className="price">
              {(
                productInfo[0] && productInfo[0].price * count
              )?.toLocaleString()}
              원
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
