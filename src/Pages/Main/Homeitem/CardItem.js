import React from "react";
import "./CardItem.scss";

class CardItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <li className="CardItem">
        <div>
          <div className="thumnailWrap">
            <div className="imgWrap" />
            <img alt="상품이미지" className="cardImage" src={item.img} />
          </div>
          <p className="productName">{item.name}</p>
          {item.dcprice !== 0 && (
            <p className="productDiscountPrice bold">
              {item.dcpercent}% {item.dcprice.toLocaleString()}원
            </p>
          )}
          <p className={`productPrice bold ${item.dcprice && "original"}`}>
            {item.price.toLocaleString()}원
          </p>
        </div>
        <div className="cartWrap">
          <button type="button">담기</button>
        </div>
      </li>
    );
  }
}

export default CardItem;
