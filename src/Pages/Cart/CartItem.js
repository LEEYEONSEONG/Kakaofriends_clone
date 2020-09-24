import React from "react";
// import URL from "../../url";
import "./CartItem.scss";

class CartItem extends React.Component {
  render() {
    const {
      cart_id,
      product,
      main_image,
      name,
      price,
      count,
    } = this.props.carts;

    const { idx, icon } = this.props;
    console.log(icon);

    const OPTIONS_COUNT = 30;
    const OPTIONS = Array(OPTIONS_COUNT)
      .fill(1)
      .map((option, index) => option + index);

    return (
      <div key={product} className="CartItem">
        <ul className="cartItemWrapper">
          <li className="cartItemWrap">
            <label
              onClick={() => this.props.check(idx)}
              className={`itemChecker ${icon ? "" : "unchecked"}`}
            />
            <div className="imageWrap">
              <span itemtype="basket" className="thumbnail">
                <span class="img__Wrap-sc-1ck9vd1-0 kukZNN">
                  <img src={main_image} alt="떰네일" class="thumbnailImage" />
                </span>
              </span>
            </div>
            <div className="basketItem">
              <div className="itemTitle">
                <div className="titleItemTitle">{name}</div>
                <div className="choiceWrap">
                  <div className="optionButton"></div>
                  <div className="optionWrap">
                    <label content="1" className="selectQuantityBox">
                      <select className="selectQuantity">
                        {OPTIONS.map(el => {
                          return (
                            <option
                              onChange={this.handlePrice}
                              value={el}
                              selected={el === count && true}
                            >
                              {el}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                  <div className="priceWrap">
                    <span>{price.toLocaleString()}</span>
                    원
                  </div>
                  <button
                    class="removeButton"
                    onClick={() =>
                      this.props.handleDelete(cart_id, this.props.idx)
                    }
                  ></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CartItem;
