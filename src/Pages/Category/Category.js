import React from "react";
import List from "../../Components/List/List";
import Sorting from "../../Components/Sorting/Sorting";
import "./Category.scss";
import "../Main/Allitem/Allitem.scss";

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
      productList: [],
      selected: 0,
      btnOn: false,
    };
  }

  componentDidMount() {
    fetch("/data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          category: res.MainMenu,
        });
      });

    fetch("http://10.58.6.7:8001/products?main-category=2")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productList: res.data_list,
        });
      });
  }

  render() {
    return (
      <div className="Category">
        <div className="banner">
          <span className="bannerImg">
            <span className="bannerHeader">토이</span>
          </span>
        </div>
        <div className="categoryWrap">
          <div className="category">
            <button
              className={
                this.state.selected === 0 ? "categoryBtnOn" : "categoryBtnOff"
              }
              onClick={() => this.setState({ selected: 0 })}
              key="0"
            >
              전체
            </button>
            {this.state.category[2]?.subcategory.map((el, idx) => {
              return (
                <button
                  className={
                    this.state.selected === idx + 1
                      ? "categoryBtnOn"
                      : "categoryBtnOff"
                  }
                  key={el.id}
                  onClick={() => this.setState({ selected: idx + 1 })}
                >
                  {el.category}
                </button>
              );
            })}
          </div>
        </div>
        <div className="Allitem">
          <div className="topInfo">
            <div className="totalItems">
              <p className="totalNum">
                총 <span className="pointSpan">1541</span> 개의 상품이
                조회되었습니다.
              </p>
            </div>
            <Sorting />
          </div>
          <List productList={this.state.productList} />
        </div>
      </div>
    );
  }
}

export default Category;
