import React from "react";
import "./Card.scss";

class Card extends React.Component {
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

export default Card;
