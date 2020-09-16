import React from "react";
import "./Card.scss";

class Card extends React.Component {
    render() {
        const { key, id, name, img, price } = this.props;
        return (
            <li className="Card" key={key} id={id}>
                <div>
                    <div className="thumnailWrap">
                        <div className="imgWrap" />
                        <img alt="상품이미지" className="cardImage" src={img} />
                    </div>
                    <p className="productName">{name}</p>
                    <p className="productPrice">{price}</p>
                </div>
                <div className="cartWrap">
                    <button type="button">담기</button>
                </div>
            </li>
        );
    }
}

export default Card;
