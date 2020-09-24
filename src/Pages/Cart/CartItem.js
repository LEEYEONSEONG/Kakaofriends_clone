import React from "react";
import URL from "../../url";
import "./CartItem.scss";

class CartItem extends React.Component {
  constructor() {
    super();

    this.state = {
      isChecked: true,
      isPrice: ""
    };
  }

  handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    })
  }

  handleDelete = (cart_id) => {
    fetch(URL + "cart/" + cart_id, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    })
    alert(" 정말 저를 삭제하시겠습니까 :( ");
     window.location.reload(false);
  }


  render() {
    const {isChecked} = this.state;
  
    const { cart_id, product, main_image, name, price, count } = this.props.carts
    console.log(cart_id)
    
    const OPTIONS_COUNT = 30
    const OPTIONS = Array(OPTIONS_COUNT).fill(1).map((option, index) => option + index)


    return(
      <div key={product} className="CartItem">
        <ul className="cartItemWrapper">
          <li className="cartItemWrap">
          <label className={`itemChecker ${isChecked ? "" : "unchecked"}`} >
              <input onClick={this.handleCheck} type="checkbox" className="itemCheckBox" checked={ isChecked ? "checked" : "unchecked" }></input>
          </label>
            <div className="imageWrap">
              <a className="image1" href="https://store.kakaofriends.com/kr/products/7187">
                <span itemtype="basket" className="thumbnail">
                  <span class="img__Wrap-sc-1ck9vd1-0 kukZNN">
                  <img src={main_image} 
                  alt="떰네일"
                   class="thumbnailImage"/>
                  </span>
                </span>
              </a>  
            </div>

            <div className="basketItem">
              <div className="itemTitle">
                <div className="titleItemTitle">
                  {name}
                </div>
                <div className="choiceWrap">
                  <div className="optionButton"></div>
                    <div className="optionWrap">
                      <label content="1" className="selectQuantityBox">
                        <select className="selectQuantity">
                          {OPTIONS.map((el) => {
                            return(
                            <option onChange={this.handlePrice} value={el} selected={el === count && true}>{el}</option>
                            )
                          })}
                        </select>
                      </label>
                    </div>
                    <div className="priceWrap">
                      <span>{price.toLocaleString()}</span>
                      원
                    </div> 
                    <button class="removeButton" onClick={() => this.handleDelete(cart_id)}></button>
                </div>
              </div>
            </div>
          </li>
        </ul> 

    </div>
    )
  }
}

export default CartItem;

