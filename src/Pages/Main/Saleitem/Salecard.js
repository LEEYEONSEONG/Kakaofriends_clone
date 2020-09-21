import React from "react";
import SaleCardEach from "./SaleCardEach";
import "./SaleCard.scss";

class SaleCard extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <ul className="SaleCard">
        {productList.map((product) => {
          return <SaleCardEach product={product} />;
        })}
      </ul>
    );
  }
}

export default SaleCard;
