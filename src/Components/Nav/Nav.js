import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <ul className="left-menu">
            <li className="category">
              <a className="category-link" href="#">
                카테고리
                <span className="category-triangle"></span>
              </a>
            </li>

            <li className="category">
              <a className="category-link" href="#">
                매장안내
              </a>
            </li>

            <li className="category">
              <a className="category-link" href="#">
                고객센터
              </a>
            </li>
          </ul>
          <img className="logo" alt="" src="images/kakaologo.png" />
          <div className="right-menu">
            <form className="searchbar">
              <div className="searchbar-box">
                <button className="searchbar-btn">
                  <span className="searchbar-icon"></span>
                </button>
                <input
                  className="searchbar-input"
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
            </aside>
            <a className="iconLink" href="#">
              <span id="language" className="icon"></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
