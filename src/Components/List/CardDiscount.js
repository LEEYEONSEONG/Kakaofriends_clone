import React from "react";
import "./CardDiscount.scss";

class CardDiscount extends React.Component {
    render() {
        const { key, id, name, img, price, dcprice } = this.props;
        return (
            <li className="CardDiscount" key={key} id={id}>
                <div>
                    <div className="thumnailWrap">
                        <div className="imgWrap" />
                        <img alt="상품이미지" className="cardImage" src={img} />
                    </div>
                    <p className="productName">{name}</p>
                    <p className="productDiscountPrice">{dcprice}</p>
                    <p className="productPrice">{price}</p>
                </div>
                <div className="cartWrap">
                    <button type="button">담기</button>
                </div>
            </li>
        );
    }
}

export default CardDiscount;
