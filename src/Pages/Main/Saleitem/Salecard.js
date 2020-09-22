import React from "react";
import SaleCardEach from "./SaleCardEach";
import "./Salecard.scss";

class Salecard extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <ul className="Salecard">
        {productList.map((product) => {
          return <SaleCardEach product={product} />;
        })}
      </ul>
    );
  }
}

export default Salecard;
