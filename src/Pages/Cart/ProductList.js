import React from "react";
import "./ProductList.scss";

class ProductList extends React.Component {
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
      <div className="ProductList">
        <ul className="cartItemWrapper">
          <li className="cartItemWrap">
          <label className={`itemChecker ${isChecked ? "" : "unchecked"}`} >
              <input onClick={this.handleCheck} type="checkbox" className="itemCheckBox" checked={ isChecked ? "checked" : "unchecked" }></input>
          </label>
            <div className="imageWrap">
              <a className="image1" href="https://store.kakaofriends.com/kr/products/7187">
                <span itemtype="basket" className="thumbnail">
                  <span class="img__Wrap-sc-1ck9vd1-0 kukZNN">
                  <img src="https://t1.daumcdn.net/friends/prod/product/20200708183424425_8809721502129_8809721502129_AW_00.jpg?type=thumb&amp;opt=R255x255@2xa" 
                  alt="마우스패드_죠르디" class="thumbnailImage"/>
                  </span>
                </span>
              </a>  
            </div>

            <div className="basketItem">
              <div className="itemTitle">
                <div className="titleItemTitle">
                  마우스패드_죠르디
                </div>
                <div className="choiceWrap">
                  <div className="optionButton"></div>
                    <div className="optionWrap">
                      <label content="1" className="selectQuantityBox">
                        <select className="selectQuantity">
                        <option value="1" selected="">1</option>
                        <option value="2" selected="">2</option>
                        <option value="3" selected="">3</option>
                        <option value="4" selected="">4</option>
                        <option value="5" selected="">5</option>
                        <option value="6" selected="">6</option>
                        <option value="7" selected="">7</option>
                        <option value="8" selected="">8</option>
                        <option value="9" selected="">9</option>
                        <option value="10" selected="">10</option>
                        <option value="11" selected="">11</option>
                        <option value="12" selected="">12</option>
                        <option value="13" selected="">13</option>
                        <option value="14" selected="">14</option>
                        <option value="15" selected="">15</option>
                        <option value="16" selected="">16</option>
                        <option value="17" selected="">17</option>
                        <option value="18" selected="">18</option>
                        <option value="19" selected="">19</option>
                        <option value="20" selected="">20</option>
                        <option value="21" selected="">21</option>
                        <option value="22" selected="">22</option>
                        <option value="23" selected="">23</option>
                        <option value="24" selected="">24</option>
                        <option value="25" selected="">25</option>
                        <option value="26" selected="">26</option>
                        <option value="27" selected="">27</option>
                        <option value="28" selected="">28</option>
                        <option value="29" selected="">29</option>
                        <option value="30" selected="">30</option>
                        </select>
                      </label>
                    </div>
                    <div className="priceWrap">
                      <span>5,000</span>
                      원
                    </div> 
                    <button class="removeButton"></button>
                </div>
              </div>
            </div>
          </li>
        </ul> 

    </div>
    )
  }
}

export default ProductList;

