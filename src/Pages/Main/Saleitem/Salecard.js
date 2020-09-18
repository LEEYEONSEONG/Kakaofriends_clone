import React from "react";
import "./SaleCard.scss";

class SaleCard extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <ul className="SaleCard">
        {productList.map((product) => {
          return (
            <li className="SalecardList" key={product.key}>
              <div>
                <div className="thumnailWrap">
                  <div className="imgWrap" />
                  <img
                    className="cardImage"
                    alt="상품이미지"
                    src={product.img}
                  />
                </div>
                <div className="productInfo">
                  <p className="productName">{product.name}</p>
                  <p className="productDiscountPrice">
                    {product.dcpercent}% {product.dcprice.toLocaleString()}원
                  </p>
                  <p className="productPrice">
                    {product.price.toLocaleString()}원
                  </p>
                </div>
              </div>
              <div className="cartWrap">
                <button type="button" className="addCart">
                  담기
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SaleCard;
