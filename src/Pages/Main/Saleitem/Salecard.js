import React from "react";
import "./Salecard.scss";

class Salecard extends React.Component {
    render() {
        const { productList } = this.props;
        return (
            <ul className="Salecard">
                {productList.map((product) => {
                    return (
                        <li
                            className="SalecardList"
                            key={product.key}
                            id={product.id}
                        >
                            <div>
                                <span className="thumnailWrap">
                                    <span className="imgWrap"></span>
                                    <img
                                        className="cardImage"
                                        alt="상품이미지"
                                        src={product.img}
                                    />
                                </span>
                                <div className="productInfo">
                                    <p className="productName">
                                        {product.name}
                                    </p>
                                    <p className="productDiscountPrice">
                                        {product.dcprice}
                                    </p>
                                    <p className="productPrice">
                                        {product.price}
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

export default Salecard;
