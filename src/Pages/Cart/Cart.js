import React from "react";
import "./Cart.scss";

class Cart extends React.Component {
  render() {
    return <div className="Cart">
      <div className="headerCartBorder">
      둘레
      <div className="headerCart">
       장바구니
      </div>
      <div className="emptyCart">
       빈 장바구니
      </div>
    </div>
    </div>;
  }
}

export default Cart;
