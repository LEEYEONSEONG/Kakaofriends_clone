import React from "react";
import "./Card.scss";

class Card extends React.Component {
    render() {
        const { key, id, name, img, price } = this.props;
        return (
            <li className="Card" key={key} id={id}>
                <div>
                    <span className="thumnailWrap">
                        <span className="imgWrap"></span>
                        <img className="cardImage" alt="상품이미지" src={img} />
                    </span>
                    <p className="productName">{name}</p>
                    <p className="productPrice">{price}</p>
                </div>
                <div className="cartWrap">
                    <button type="button" className="addCart">
                        담기
                    </button>
                </div>
            </li>
        );
    }
}

export default Card;
