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
                                <div className="thumnailWrap">
                                    <div className="imgWrap" />
                                    <img
                                        className="cardImage"
                                        alt="상품이미지"
                                        src={product.img}
                                    />
                                </div>
                                <div className="productInfo">
                                    <p className="productName">
                                        {product.name}
                                    </p>
                                    <p className="productDiscountPrice">
                                        {product.dcpercent}% {product.dcprice}
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
