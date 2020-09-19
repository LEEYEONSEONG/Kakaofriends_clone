import React from "react";
import "./Cart.scss";

class Cart extends React.Component {
  render() {
    return <div className="Cart">
      <div className="headerCartBorder">
      <div className="headerCart">
       장바구니
      </div>
      <div className="emptyCart">
       <div className="emptyCartMessage">
         <p>아직 관심 상품이 없네요!</p>
         <p>귀여운 프렌즈 상품을 추천드릴게요</p> 
       </div>
      <a href="https://store.kakaofriends.com/kr/index?tab=hot" className="emptyCartLink">
        인기 상품 보기
      </a>
      </div>
    </div>
    </div>;
  }
}

export default Cart;
