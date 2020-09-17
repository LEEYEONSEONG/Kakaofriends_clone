import React from "react";
import "./CardItem.scss";

class CardItem extends React.Component {
  render() {
    console.log("connected!");
    const { item } = this.props;
    return (
      <li className="CardItem" key={item.id}>
        <div>
          <div className="thumnailWrap">
            <div className="imgWrap" />
            <img alt="상품이미지" className="cardImage" src={item.img} />
          </div>
          <p className="productName">{item.name}</p>
          {item.dcprice && (
            <p className="productDiscountPrice">
              {item.dcpercent}% {item.dcprice}
            </p>
          )}
          <p className={`productPrice ${item.dcprice && "original"}`}>
            {item.price}
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
