import React from "react";
import "./CartItem.scss";

class CartItem extends React.Component {
  constructor() {
    super();

    this.state = {
      isChecked: true,
      isPrice: "",
    };
  }

  handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  handleDelete = () => {
    fetch(URL + "cart", {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        product: this.state.cardID,
      }),
    });
  };

  render() {
    const { isChecked } = this.state;

    const { product, image, name, price, count } = this.props.carts;

    const OPTIONS_COUNT = 30;
    const OPTIONS = Array(OPTIONS_COUNT)
      .fill(1)
      .map((option, index) => option + index);

    return (
      <div key={product} className="CartItem">
        <ul className="cartItemWrapper">
          <li className="cartItemWrap">
            <label className={`itemChecker ${isChecked ? "" : "unchecked"}`}>
              <input
                onClick={this.handleCheck}
                type="checkbox"
                className="itemCheckBox"
                checked={isChecked ? "checked" : "unchecked"}
              ></input>
            </label>
            <div className="imageWrap">
              <a
                className="image1"
                href="https://store.kakaofriends.com/kr/products/7187"
              >
                <span itemtype="basket" className="thumbnail">
                  <span class="img__Wrap-sc-1ck9vd1-0 kukZNN">
                    <img
                      src={image}
                      alt="마우스패드_죠르디"
                      class="thumbnailImage"
                    />
                  </span>
                </span>
              </a>
            </div>

            <div className="basketItem">
              <div className="itemTitle">
                <div className="titleItemTitle">{name}</div>
                <div className="choiceWrap">
                  <div className="optionButton"></div>
                  <div className="optionWrap">
                    <label content="1" className="selectQuantityBox">
                      <select className="selectQuantity">
                        {OPTIONS.map((el) => {
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
                    <span>{price?.toLocaleString()}</span>
                    원
                  </div>
                  <button
                    class="removeButton"
                    onClick={this.handleDelete}
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
