import React, { Component } from "react";
import "../Details.scss";

export class ProductDetails extends Component {
  render() {
    return (
      <div>
        {this.props.productInfo.map((el) => (
          <div className="mainWrap">
            <div
              className="detailsMain"
              dangerouslySetInnerHTML={{
                __html: el.detail,
              }}
            />

            <div
              className="detailsSub"
              dangerouslySetInnerHTML={{
                __html: el.sub_detail,
              }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductDetails;
