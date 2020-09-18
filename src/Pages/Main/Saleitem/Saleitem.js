import React from "react";
import SaleCard from "./SaleCard";
import List from "../../../Components/List/List";
import "./Saleitem.scss";

class Saleitem extends React.Component {
  constructor() {
    super();

    this.state = {
      cardList: [],
      productList: [],
      items: 10,
      prevItems: 0,
    };
  }

  componentDidMount() {
    fetch("/Data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        let result = res.data.slice(this.state.preItems, this.state.items);

        this.setState({
          cardList: res.data.slice(0, 3),
          productList: this.state.productList.concat(result),
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

    if (scrollTop + clientHeight === scrollHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 10,
      });
      this.componentDidMount();
    }
  };

  render() {
    const { cardList, productList } = this.state;
    return (
      <article className="Saleitem">
        <SaleCard productList={cardList} />
        <p className="subTitle">세일 상품을 모두 한곳에</p>
        <p className="mainTitle">지금은 세일 중</p>
        <List productList={productList} />
      </article>
    );
  }
}

export default Saleitem;
