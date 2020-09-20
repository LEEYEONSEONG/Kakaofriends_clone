import React from "react";
import "./TopBtn.scss";

class TopBtn extends React.Component {
  state = {
    isTopBtnActive: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.topbtnHandler);
  }

  topbtnHandler = () => {
    const { documentElement, body } = document;

    const clientHeight = documentElement.clientHeight;
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);

    this.setState({
      isTopBtnActive: scrollTop >= clientHeight ? 1 : 0,
    });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    const { isTopBtnActive } = this.state;
    return (
      <div
        onClick={this.scrollToTop}
        className={`TopBtn ${isTopBtnActive ? "actived" : ""}`}
      >
        TOP
      </div>
    );
  }
}

export default TopBtn;
