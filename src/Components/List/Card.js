import React from "react";
import { withRouter } from "react-router-dom";
import URL from "../../url";
import "./Card.scss";

class Card extends React.Component {
  state = {
    isCartAdd: false,
    productID: this.props.id,
    cartID: 0,
  };

  handleCart = cartID => {
    const { isCartAdd, productID } = this.state;
    if (!isCartAdd) {
      fetch(URL + "cart", {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          product: productID,
          count: "1",
          isCartAdd: true,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message) {
            alert("로그인해주세요!");
            return;
          }
          this.setState({
            isCartAdd: !isCartAdd,
            cartID: res.cart_id,
          });
        });
    } else {
      fetch(URL + "cart/" + cartID, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      this.setState({
        isCartAdd: !isCartAdd,
      });
    }
  };

  render() {
    const { isCartAdd, cartID } = this.state;
    const { id, name, img, price, dcprice, dcpercent } = this.props;
    return (
      <li
        className="Card"
        onClick={() => this.props.history.push(`/details/${id}`)}
      >
        <div>
          <div className="thumnailWrap">
            <div className="imgWrap" />
            <img alt="상품이미지" className="cardImage" src={img} />
          </div>
          <p className="productName">{name}</p>
          {dcprice !== 0 && (
            <p className="productDiscountPrice bold">
              {dcpercent}% {dcprice?.toLocaleString()}원
            </p>
          )}
          <p className={`productPrice bold ${dcprice !== 0 && "original"}`}>
            {price?.toLocaleString()}원
          </p>
        </div>
        <div className="cartWrap">
          <button
            className={isCartAdd ? "addCart" : ""}
            onClick={() => this.handleCart(cartID)}
            type="button"
          >
            담기
          </button>
        </div>
      </li>
    );
  }
}

export default withRouter(Card);
