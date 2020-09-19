import React from "react";
import Card from "./Card";
import "./List.scss";

class List extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <ul className="List">
        {productList.map((product) => {
          return (
            <Card
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              dcprice={product.dcprice}
              dcpercent={product.dcpercent}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
