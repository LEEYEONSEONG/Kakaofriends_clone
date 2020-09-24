import React from "react";
import Homeitem from "./Homeitem/Homeitem";
import Hotitem from "./Hotitem/Hotitem";
import Newitem from "./Newitem/Newitem";
import Saleitem from "./Saleitem/Saleitem";
import Allitem from "./Allitem/Allitem";
import TopBtn from "../../Components/TopBtn/TopBtn";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";

export default class Main extends React.Component {
  state = {
    activeTab: 0,
    positionChange: 0,
    footerPosition: 0,
    isLeft: true,
    posX: "-100%",
    opacity: 1,
  };

  divContainer = React.createRef();

  comeToCenter = () => {
    this.setState({ posX: "0", opacity: 1 });
  };

  componentDidMount() {
    this.comeToCenter();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeTab !== this.state.activeTab) {
      this.setState(
        { posX: this.state.isLeft ? "-100%" : "100%", opacity: 0 },
        () =>
          setTimeout(() => {
            this.comeToCenter();
          }, 500)
      );
    }
  }

  clickHandler = (id) => {
    const { activeTab } = this.state;
    this.setState({
      isLeft: id < activeTab,
    });
    this.setState({ activeTab: id });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <>
        <Nav />
        <div className="Main">
          <main>
            <div className="Maintab">
              <ul className="menuTab">
                {TAB_ARR.map((el, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <li key={el} onClick={() => this.clickHandler(idx)}>
                      <button className={`${isActive && "highlightedBtn"}`}>
                        {el}
                      </button>
                      <hr
                        className={`highlightedTab ${isActive ? "on" : "off"}`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="tabContainer">
              <div
                ref={this.divContainer}
                className="tabBox"
                style={{
                  transform: `translateX(${this.state.posX})`,
                  opacity: this.state.opacity,
                }}
              >
                {SHOWTAB[activeTab]}
              </div>
            </div>
            <TopBtn />
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

const TAB_ARR = ["홈", "신규", "인기", "세일", "전체"];

const SHOWTAB = {
  0: <Homeitem />,
  1: <Newitem />,
  2: <Hotitem />,
  3: <Saleitem />,
  4: <Allitem />,
};
