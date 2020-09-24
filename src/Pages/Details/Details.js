import React from "react";
import ImgSlider from "./Components/ImgSlider";
import ProductDetails from "./Components/ProductDetails";
import Shipping from "./Components/Shipping";
import LiveRfq from "./Components/LiveRfq";
import ReviewComment from "./Components/ReviewComment";
import Suggestion from "./Components/Suggestion";
import PurchaseBar from "./Components/PurchaseBar";
import TopBtn from "../../Components/TopBtn/TopBtn";
import "./Details.scss";

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetails: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.6.7:8001/products/product/250")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productDetails: res.data_list,
        });
      });
  }
  render() {
    return (
      <div className="Details">
        <ImgSlider productInfo={this.state.productDetails} />
        <ProductDetails productInfo={this.state.productDetails} />
        <Shipping />
        <LiveRfq />
        <ReviewComment />
        <Suggestion />
        <PurchaseBar productInfo={this.state.productDetails} />
        <TopBtn />
      </div>
    );
  }
}

export default Details;
