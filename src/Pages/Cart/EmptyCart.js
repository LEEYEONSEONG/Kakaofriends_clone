import React from "react";
import "./EmptyCart.scss";

class EmptyCart extends React.Component {
  render() {
    return (
    <div className="EmptyCart">
      <p className="cartHeader">
        장바구니
      </p>
      <div className="emptyBasket">
       <div className="emptyCartMessage">
         <p>아직 관심 상품이 없네요!</p>
         <p>귀여운 프렌즈 상품을 추천드릴게요</p> 
       </div>
      <a href="https://store.kakaofriends.com/kr/index?tab=hot" className="linkButton">
        <span className="linkMessage">인기 상품 보기</span>
      </a>
      </div>
    </div>
    );
  }
}

export default EmptyCart;