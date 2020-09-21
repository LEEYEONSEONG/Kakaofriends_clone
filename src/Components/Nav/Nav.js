import React from "react";
import "./Nav.scss";
import DropDownMain from "./Components/DropDownMain.js";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      hoverOn: false,
    };
  }

  render() {
    return (
      <nav className="Nav">
        <div className="Container">
          <ul className="leftMenu">
            <li className="category">
              <div
                className="categoryLink"
                href="https://localhost:3000/main"
                onMouseEnter={() => this.setState({ hoverOn: true })}
                onMouseLeave={() => this.setState({ hoverOn: false })}
              >
                카테고리
                <span className="categoryTri" />
                {this.state.hoverOn ? <DropDownMain /> : null}
              </div>
            </li>
            <li className="category">
              <a className="categoryLink" href="#">
                매장안내
              </a>
            </li>

            <li className="category">
              <a className="categoryLink" href="#">
                고객센터
              </a>
            </li>
          </ul>
          <img className="logo" alt="" src="images/kakaologo.png" />
          <div className="rightMenu">
            <form className="searchbar">
              <div className="searchbarBox">
                <button className="searchbarBtn">
                  <span className="searchbarIcon"></span>
                </button>
                <input
                  className="searchbarInput"
                  type="textbox"
                  placeholder="무엇을 찾으세요?"
                ></input>
              </div>
            </form>
            <aside className="icons">
              <a className="iconLink" href="#">
                <span id="myPage" className="icon"></span>
              </a>
              <a className="iconLink" href="#">
                <span id="cart" className="icon"></span>
              </a>
              <a className="iconLink" href="#">
                <span id="language" className="icon"></span>
              </a>
            </aside>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
