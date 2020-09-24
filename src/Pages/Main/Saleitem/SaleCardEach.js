import React from "react";
import "./SaleCardEach.scss";

class SaleCardEach extends React.Component {
  constructor() {
    super();

    this.state = {
      isCartAdd: false,
    };
  }

  handleCart = () => {
    this.setState({
      isCartAdd: !this.state.isCartAdd,
    });
  };

  render() {
    const { isCartAdd } = this.state;
    const { product } = this.props;
    return (
      <li className="SaleCardEach" key={product.key}>
        <div>
          <div className="thumnailWrap">
            <div className="imgWrap" />
            <img
              className="cardImage"
              alt="상품이미지"
              src={product.main_image}
            />
          </div>
          <div className="productInfo">
            <p className="productName">{product.name}</p>
            <p className="productDiscountPrice">
              {product.discount_rate}%{" "}
              {product.discount_price?.toLocaleString()}원
            </p>
            <p className="productPrice">{product.price?.toLocaleString()}원</p>
          </div>
        </div>
        <div className="cartWrap">
          <button
            className={isCartAdd ? "addCart" : ""}
            onClick={this.handleCart}
            type="button"
          >
            담기
          </button>
        </div>
      </li>
    );
  }
}

export default SaleCardEach;
