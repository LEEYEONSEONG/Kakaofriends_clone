import React from "react";
import URL from "../../url";
import "./Card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCartAdd: false,
      productID: this.props.id,
      cartID: 0,
    };
  }

  handleCart = (cartID) => {
    const { isCartAdd } = this.state;
    if (!isCartAdd) {
      fetch(URL + "cart/products", {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          product: this.state.productID,
          count: "1",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message !== "SUCCESS") {
            alert("로그인해주세요!");
            return;
          }
          this.setState({
            isCartAdd: !this.state.isCartAdd,
            cartID: res.cart_id,
          });
        });
    } else {
      fetch(URL + "cart/" + cartID, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          product: this.state.productID,
          // count: "1",
        }),
      });
      this.setState({
        isCartAdd: !this.state.isCartAdd,
      });
    }
  };

  render() {
    const { isCartAdd } = this.state;
    const { name, img, price, dcprice, dcpercent } = this.props;
    return (
      <li className="Card">
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
            onClick={this.handleCart(this.state.cartID)}
            type="button"
          >
            담기
          </button>
        </div>
      </li>
    );
  }
}

export default Card;
