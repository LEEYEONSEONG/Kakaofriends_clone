import React from "react";
import ImgSlider from "./Components/ImgSlider";
import Title from "./Components/Title";
import ProductDetails from "./Components/ProductDetails";
import Shipping from "./Components/Shipping";
import LiveRfq from "./Components/LiveRfq";
import ReviewComment from "./Components/ReviewComment";
import Suggestion from "./Components/Suggestion";
import PurchaseBar from "./Components/PurchaseBar";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import TopBtn from "../../Components/TopBtn/TopBtn";
import URL from "../../url";
import "./Details.scss";

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetails: [],
    };
  }
  s;

  componentDidMount() {
    fetch(`${URL}products/${this.props.match.params.id}`)
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
        <TopBtn />
        <Footer />
      </div>
    );
  }
}

export default Details;
