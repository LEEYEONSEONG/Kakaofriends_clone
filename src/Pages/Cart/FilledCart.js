import React from "react";
import "./FilledCart.scss";
import ProductList from "./ProductList";

class FilledCart extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked: true,
    };
  }
  handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    })
  }

  render() {

    const {isChecked} = this.state;
    return (
    <div className="FilledCart">
      <div className="cartHeaderWrap">
        <p className="cartHeader">
          장바구니
        </p>
 
        <div className="filledCartHeader">      
          <div className="subHeader">
            <label className={`checker ${isChecked ? "" : "unchecked"}`} >
              <input onClick={this.handleCheck} type="checkbox" className="checkBox" checked={ isChecked ? "checked" : "unchecked" }></input>
            </label>
            <span className="total">전체</span>
            <span className="null">&nbsp;</span>
            <span className="totalCount">1</span>
          </div>
          <div className="headerDelete">
            <span className="delete">1개 선택</span>
            <button type="button" class="deleteButton"></button>
          </div>
        </div>
      </div>

      <div className="filledCartWrap">
        <div className="filledCartDetail">
          <ul className="filledCartDetailHeader">
            <li className="productName">상품명</li>
            <li className="option">옵션</li>
            <li className="quantity">수량</li>
            <li className="price">상품금액</li>
          </ul>
        </div> 

        <ProductList />

        <div className="totalPriceBox">
          <div className="totalPriceBarWrap">
          <span className="deliveryCountry">배송국가</span>       
          <label content="한국" class="selectBox">
            <select class="selectBoxLabel">
            <option value="한국" selected="">한국</option></select></label>
          </div>
          <div className="totalPrice">

            <div className="totalOrder">
              <span className="totalPriceLabel">총 주문금액</span>
                  <span className="totalPriceWon">
                  <span>5,000</span>
                  원</span>
            </div>

            <div className="deliveryFee">
                  <span class="deliveryFeeLabel">배송비</span>
                  <span className="deliveryFeeWon">
                  <span>3,000</span>
                  원</span>
            </div>

            <div className="totalFee">
                  <span class="totalFeeLabel">총 결제금액</span>
                  <span className="totalFeeWon">
                  <span>8,000</span>
                  원</span>
            </div>
          </div>
        </div>
    </div>
      <div className="orderButtonWrap">
        <button className="orderButton">
        주문 하기
        </button>
      </div>
    </div>
  );
}
}

export default FilledCart;