import React from "react";
import DropDownMain from "./Components/DropDownMain";
import Searchbar from "./Components/Searchbar";
import "./Nav.scss";

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
          <a className="logoWrap" href="/main">
            <img className="logo" alt="" src="images/kakaologo.png" />
          </a>
          <div className="rightMenu">
            <Searchbar />
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
