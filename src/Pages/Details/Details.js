import React from "react";
import ImgSlider from "./Components/ImgSlider";
import ProductDetails from "./Components/ProductDetails";
import LiveRfq from "./Components/LiveRfq";
import ReviewComment from "./Components/ReviewComment";
import Suggestion from "./Components/Suggestion";
import PurchaseBar from "./Components/PurchaseBar";
import "./Details.scss";

class Details extends React.Component {
  render() {
    return (
      <div className="Details">
        <ImgSlider />
        <ProductDetails />
        <LiveRfq />
        <ReviewComment />
        <Suggestion />
        <PurchaseBar />
      </div>
    );
  }
}

export default Details;
