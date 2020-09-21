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
      fixedMenu: [],
      hoverOn: false,
      hoverImg: false,
      subIndex: 0,
      imgIndex: 0,
    };
  }

  componentDidMount() {
    this.setState({
      fixedMenu: CHARACTER,
    });

    fetch("/data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          mainMenu: res.MainMenu,
          subMenu: res.MainMenu,
        });
      });
  }

  render() {
    return (
      <div className="dropDownWrap">
        <ul className="hoverMainMenu">
          {this.state.mainMenu.map((category) => {
            return (
              <li
                key={category.id}
                className="mainDropList"
                onMouseOver={() => {
                  this.setState({
                    hoverOn: true,
                    subIndex: category.id,
                  });
                }}
              >
                <a
                  className="mainDropLink"
                  href="https://store.kakaofriends.com/kr/index?tab=home"
                >
                  {category.category}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="hoverSubMenu">
          {this.state.hoverOn &&
            this.state.subMenu[this.state.subIndex - 1].subcategory?.map(
              (subcategory) => {
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
              }
            )}
        </ul>
        <div className="hoverFixMenuWrap">
          <ul className="hoverFixMenu">
            {this.state.fixedMenu.map((character) => (
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
