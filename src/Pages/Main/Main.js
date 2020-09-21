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
  };
  divContainer = React.createRef();

  comeToCenter = () => {
    const position = this.divContainer.current.style;
    position.transform = `translateX(0)`;
  };

  componentDidMount() {
    this.comeToCenter();
  }

  clickHandler = (id) => {
    const { activeTab } = this.state;
    this.setState(
      {
        isLeft: id < activeTab,
      },
      console.log(this.state.isLeft)
    );
    this.setState({ activeTab: id });
    this.comeToCenter();
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
                className={`tabBox ${this.state.isLeft ? "left" : "right"}`}
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
