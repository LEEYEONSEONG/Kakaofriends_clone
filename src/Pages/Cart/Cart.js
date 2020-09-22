import React from "react";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import "./EmptyCart.scss";
import "./FilledCart.scss";
import "./Cart.scss";


class Cart extends React.Component {
  render() {
    return (
    <div className="Cart">
      <EmptyCart/>
      <FilledCart/>
    </div>
    )
  }
}

export default Cart;