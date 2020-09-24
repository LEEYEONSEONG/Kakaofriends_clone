import React from "react";
import CartItem from "./CartItem";
import URL from "../../url";
import "./Cart.scss";

class Cart extends React.Component {
  state = {
    carts: [],
    totalPrice: "",
    isChecked: true,
  };

  componentDidMount() {
    this.getCartItem();
  }

  getCartItem = () => {
    fetch(URL + "cart", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then(({ carts }) => {
        let totalPrice = 0;
        for (let i = 0; carts.length > i; i++) {
          totalPrice += carts[i].price * carts[i].count;
        }

        this.setState({ carts, totalPrice });
      });
  };

  handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  handleDelete = (cart_id, cart_idx) => {
    fetch(URL + "cart/" + cart_id, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    // alert("정말 저를 삭제하시겠습니까 :( ");

    const newCart = this.state.carts.filter((_, idx) => idx !== cart_idx);

    this.setState({ carts: newCart });
    // window.location.reload(false);
  };

  handleDeleteCheck = () => {
    console.log("야호");
  };

  render() {
    const { carts, totalPrice, isChecked } = this.state;
    const isDelivery = totalPrice >= 30000;

    return (
      <div className="Cart">
        {!carts.length ? (
          <div className="EmptyCart">
            <p className="cartHeader">장바구니</p>
            <div className="emptyBasket">
              <div className="emptyCartMessage">
                <p>아직 관심 상품이 없네요!</p>
                <p>귀여운 프렌즈 상품을 추천드릴게요</p>
              </div>
              <a
                href="https://store.kakaofriends.com/kr/index?tab=hot"
                className="linkButton"
              >
                <span className="linkMessage">인기 상품 보기</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="FilledCart">
            <div className="cartHeaderWrap">
              <p className="cartHeader">장바구니</p>
              <div className="filledCartHeader">
                <div className="subHeader">
                  <label className={`checker ${isChecked ? "" : "unchecked"}`}>
                    <input
                      onClick={this.handleCheck}
                      type="checkbox"
                      className="checkBox"
                      checked={isChecked ? "checked" : "unchecked"}
                    ></input>
                  </label>
                  <span className="total">전체</span>
                  <span className="null">&nbsp;</span>
                  <span className="totalCount">3</span>
                </div>
                <div className="headerDelete">
                  <span className="delete">3개 선택</span>
                  <button type="button" class="deleteButton" />
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
              {carts.map((el, idx) => {
                return (
                  <CartItem
                    key={el.product}
                    idx={idx}
                    carts={el}
                    check={this.handleCheck}
                    handleDelete={this.handleDelete}
                  />
                );
              })}
              <div className="totalPriceBox">
                <div className="totalPriceBarWrap">
                  <span className="deliveryCountry">배송국가</span>
                  <label content="한국" class="selectBox">
                    <select class="selectBoxLabel">
                      <option value="한국" selected="">
                        한국
                      </option>
                    </select>
                  </label>
                </div>
                <div className="totalPrice">
                  <div className="totalOrder">
                    <span className="totalPriceLabel">총 주문금액</span>
                    <span className="totalPriceWon">
                      {totalPrice.toLocaleString()}원
                    </span>
                  </div>
                  <div className="deliveryFee">
                    <span class="deliveryFeeLabel">배송비</span>
                    <span className="deliveryFeeWon">
                      <span>{isDelivery ? "무료" : "3,000원"}</span>
                    </span>
                  </div>
                  <div className="totalFee">
                    <span class="totalFeeLabel">총 결제금액</span>
                    <span className="totalFeeWon">
                      {isDelivery
                        ? totalPrice.toLocaleString()
                        : (totalPrice + 3000).toLocaleString()}
                      원
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="orderButtonWrap">
              <button className="orderButton">주문 하기</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
