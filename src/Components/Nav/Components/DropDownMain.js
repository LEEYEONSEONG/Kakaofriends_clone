import React from "react";
import "./DropDownMain.scss";
import CHARACTER from "../../Sorting/SortingData.js";
import SortChar from "./SortChar";

class DropDownMain extends React.Component {
  constructor() {
    super();
    this.state = {
      mainMenu: [],
      subMenu: [],
      fixedMenu: CHARACTER,
      hoverOn: false,
      hoverImg: false,
      subIndex: 0,
      imgIndex: 0,
      opacity: 0,
      url: "",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 0);

    fetch("/Data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          mainMenu: res.MainMenu,
          subMenu: res.MainMenu,
        });
      });
  }

  reroute = () => {
    if (this.state.subIndex === 3) {
      this.setState({
        url: "http://localhost:3000/category/",
      });
    } else if (this.state.subIndex === 6) {
      this.setState({
        url: "http://localhost:3000/category/",
      });
    }
  };

  render() {
    const {
      opacity,
      mainMenu,
      hoverOn,
      subMenu,
      subIndex,
      fixedMenu,
    } = this.state;
    return (
      <div style={{ opacity: opacity }} className="dropDownWrap">
        <ul className="hoverMainMenu">
          {mainMenu.map((category) => {
            return (
              <li
                key={category.id}
                className="mainDropList"
                onMouseOver={() => {
                  this.setState(
                    {
                      hoverOn: true,
                      subIndex: category.id,
                    },
                    this.reroute
                  );
                }}
              >
                <a className="mainDropLink" href={this.state.url}>
                  {category.category}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="hoverSubMenu">
          {hoverOn &&
            subMenu[subIndex - 1].subcategory?.map((subcategory) => {
              return (
                <li key={subcategory.id} className="subDropList">
                  <a
                    className="subDropLink"
                    href="https://store.kakaofriends.com/kr/index?tab=home"
                  >
                    {subcategory.category}
                  </a>
                </li>
              );
            })}
        </ul>
        <div className="hoverFixMenuWrap">
          <ul className="hoverFixMenu">
            {fixedMenu.map((character) => (
              <SortChar
                id={character.id}
                key={character.id}
                name={character.name}
                nameKor={character.nameKor}
                bool={character.bool}
                img={character.img}
                imgOn={character.imgOn}
              />
            ))}
          </ul>
          <ul className="dropBannerWrap">
            <li className="dropBanner">
              <span className="dropBannerImg1"></span>
            </li>
            <li className="dropBanner">
              <span className="dropBannerImg2"></span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DropDownMain;
