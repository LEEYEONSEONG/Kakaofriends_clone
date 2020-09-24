import React from "react";
import ImgSlider from "./Components/ImgSlider";
import Title from "./Components/Title";
import ProductDetails from "./Components/ProductDetails";
import Shipping from "./Components/Shipping";
import LiveRfq from "./Components/LiveRfq";
import ReviewComment from "./Components/ReviewComment";
import Suggestion from "./Components/Suggestion";
import PurchaseBar from "./Components/PurchaseBar";
import "./Details.scss";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetails: [],
    };
  }
  s;

  componentDidMount() {
    fetch("http://10.58.2.194:8001/products/210")
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
        <Nav />
        <ImgSlider productInfo={this.state.productDetails} />
        <Title productInfo={this.state.productDetails} />
        <ProductDetails productInfo={this.state.productDetails} />
        <Shipping />
        <LiveRfq />
        <ReviewComment productInfo={this.state.productDetails} />
        <Suggestion />
        <PurchaseBar productInfo={this.state.productDetails} />
        <Footer />
      </div>
    );
  }
}

export default Details;
