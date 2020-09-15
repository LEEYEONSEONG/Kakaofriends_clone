import React from "react";
import "./Maintab.scss";

class Maintab extends React.Component {
  render() {
    return <div className="Maintab">
        <ul className="menuTab">
            <li>
                <button>홈</button>
                <hr className="highlightedTab off" />
            </li>
            <li>
                <button>신규</button>
                <hr className="highlightedTab off" />
            </li>
            <li>
                <button>인기</button>
                <hr className="highlightedTab off" />
            </li>
            <li>
                <button>세일</button>
                <hr className="highlightedTab off" />
            </li>
            <li>
                <button className="highlightedBtn">전체</button>
                <hr className="highlightedTab on" />
            </li>
        </ul>
    </div>;
  }
}

export default Maintab;
