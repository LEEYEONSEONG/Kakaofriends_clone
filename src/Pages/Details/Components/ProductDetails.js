import React, { Component } from "react";
import "../Details.scss";

export class ProductDetails extends Component {
  render() {
    return (
      <div>
        {this.props.productInfo.map((el) => (
          <div
            dangerouslySetInnerHTML={{
              __html: el.detail,
            }}
          />
        ))}
      </div>
    );
  }
}

export default ProductDetails;
