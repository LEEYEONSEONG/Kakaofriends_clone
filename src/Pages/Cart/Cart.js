import React from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import CartItem from "./CartItem";
import URL from "../../url";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      carts: [],
      isTotalPrice: "",
      isChecked: true,
    };
  }

  componentDidMount() {
    let isTotalPrice = 0;
    // fetch(URL + "cart/products", {
    //   method: "GET",
    // })
    fetch("/data/carts.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            carts: res.carts,
          },
          () => {
            for (let i = 0; this.state.carts.length > i; i++) {
              isTotalPrice +=
                this.state.carts[i].price * this.state.carts[i].count;
            }
            this.setState({
              isTotalPrice: isTotalPrice,
            });
          }
        );
      });
  }

  handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const delivery = this.state.isTotalPrice >= 30000;

    const { carts } = this.state;

    return (
      <>
        <Nav />
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
                    <label
                      className={`checker ${
                        this.state.isChecked ? "" : "unchecked"
                      }`}
                    >
                      <input
                        onClick={this.handleCheck}
                        type="checkbox"
                        className="checkBox"
                        checked={this.state.isChecked ? "checked" : "unchecked"}
                      ></input>
                    </label>
                    <span className="total">전체</span>
                    <span className="null">&nbsp;</span>
                    <span className="totalCount">3</span>
                  </div>
                  <div className="headerDelete">
                    <span className="delete">3개 선택</span>
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
                {carts.map((el) => {
                  return <CartItem carts={el} check={this.handleCheck} />;
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
                        <span>{this.state.isTotalPrice?.toLocaleString()}</span>
                        원
                      </span>
                    </div>

                    <div className="deliveryFee">
                      <span class="deliveryFeeLabel">배송비</span>
                      <span className="deliveryFeeWon">
                        <span>{delivery ? "무료" : "3,000원"}</span>
                      </span>
                    </div>

                    <div className="totalFee">
                      <span class="totalFeeLabel">총 결제금액</span>
                      <span className="totalFeeWon">
                        <span>
                          {delivery
                            ? this.state.isTotalPrice?.toLocaleString()
                            : (
                                this.state.isTotalPrice + 3000
                              )?.toLocaleString()}
                        </span>
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
        <Footer />
      </>
    );
  }
}

export default Cart;
