import React from "react";
import SaleCard from "./SaleCard";
import List from "../../../Components/List/List";
import { withInfiniteScroll } from "../hoc";
import "./Saleitem.scss";

class Saleitem extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <article className="Saleitem">
        <SaleCard productList={productList.slice(0, 3)} />
        <p className="subTitle">세일 상품을 모두 한곳에</p>
        <p className="mainTitle">지금은 세일 중</p>
        <List productList={productList.slice(3)} />
      </article>
    );
  }
}

export default withInfiniteScroll(Saleitem, "product/sale");
