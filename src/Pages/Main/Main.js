import React from "react";
// import Maintab from "./Maintab";
import Allitem from "./Allitem/Allitem";
import Hotitem from "./Hotitem/Hotitem";
import Newitem from "./Newitem/Newitem";
import Saleitem from "./Saleitem/Saleitem";
import "./Main.scss";

const obj = {
    0: <Allitem />,
    1: <Newitem />,
    2: <Hotitem />,
    3: <Saleitem />,
    4: <Allitem />,
};

class Main extends React.Component {
    state = {
        activeId: 4,
    };

    clickHandler = (id) => {
        this.setState({ activeId: id });
    };

    render() {
        return (
            <div className="Main">
                <div className="Maintab">
                    <ul className="menuTab">
                        <li onClick={() => this.clickHandler(0)}>
                            <button>홈</button>
                            <hr className="highlightedTab off" />
                        </li>
                        <li onClick={() => this.clickHandler(1)}>
                            <button>신규</button>
                            <hr className="highlightedTab off" />
                        </li>
                        <li onClick={() => this.clickHandler(2)}>
                            <button>인기</button>
                            <hr className="highlightedTab off" />
                        </li>
                        <li onClick={() => this.clickHandler(3)}>
                            <button>세일</button>
                            <hr className="highlightedTab off" />
                        </li>
                        <li onClick={() => this.clickHandler(4)}>
                            <button className="highlightedBtn">전체</button>
                            <hr className="highlightedTab on" />
                        </li>
                    </ul>
                </div>
                {obj[this.state.activeId]}
            </div>
        );
    }
}

export default Main;
