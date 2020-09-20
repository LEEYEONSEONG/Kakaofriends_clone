import React from "react";
import List from "../../../Components/List/List";
import Sorting from "../../../Components/Sorting/Sorting";
import "./Allitem.scss";

class Allitem extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      items: 10,
      preItems: 0,
    };
  }

  componentDidMount() {
    fetch("/Data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        let result = res.data.slice(this.state.preItems, this.state.items);
        this.setState({
          productList: [...this.state.productList, ...result],
        });
      });
    window.addEventListener("scroll", this.infiniteScroll, true);
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 10,
      });
      this.componentDidMount();
    }
  };

  render() {
    const { productList } = this.state;
    return (
      <article className="Allitem">
        <div className="topInfo">
          <div className="totalItems">
            <p className="totalNum">
              총 <span className="pointSpan">1541</span> 개의 상품이
              조회되었습니다.
            </p>
          </div>
          <Sorting />
        </div>
        <List productList={productList} />
      </article>
    );
  }
}

export default Allitem;
