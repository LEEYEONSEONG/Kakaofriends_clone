import React from "react";
import Homeitem from "./Homeitem/Homeitem";
import Hotitem from "./Hotitem/Hotitem";
import Newitem from "./Newitem/Newitem";
import Saleitem from "./Saleitem/Saleitem";
import Allitem from "./Allitem/Allitem";

import "./Main.scss";

class Main extends React.Component {
    state = {
        activeId: 0,
    };

    clickHandler = (id) => {
        this.setState({ activeId: id });
    };

    render() {
        return (
            <main className="Main">
                <div className="Maintab">
                    <ul className="menuTab">
                        <li onClick={() => this.clickHandler(0)}>
                            <button
                                className={`${
                                    this.state.activeId === 0 &&
                                    "highlightedBtn"
                                }`}
                            >
                                홈
                            </button>
                            <hr
                                className={`highlightedTab ${
                                    this.state.activeId === 0 ? "on" : "off"
                                }`}
                            />
                        </li>
                        <li onClick={() => this.clickHandler(1)}>
                            <button
                                className={`${
                                    this.state.activeId === 1 &&
                                    "highlightedBtn"
                                }`}
                            >
                                신규
                            </button>
                            <hr
                                className={`highlightedTab ${
                                    this.state.activeId === 1 ? "on" : "off"
                                }`}
                            />
                        </li>
                        <li onClick={() => this.clickHandler(2)}>
                            <button
                                className={`${
                                    this.state.activeId === 2 &&
                                    "highlightedBtn"
                                }`}
                            >
                                인기
                            </button>
                            <hr
                                className={`highlightedTab ${
                                    this.state.activeId === 2 ? "on" : "off"
                                }`}
                            />
                        </li>
                        <li onClick={() => this.clickHandler(3)}>
                            <button
                                className={`${
                                    this.state.activeId === 3 &&
                                    "highlightedBtn"
                                }`}
                            >
                                세일
                            </button>
                            <hr
                                className={`highlightedTab ${
                                    this.state.activeId === 3 ? "on" : "off"
                                }`}
                            />
                        </li>
                        <li onClick={() => this.clickHandler(4)}>
                            <button
                                className={`${
                                    this.state.activeId === 4 &&
                                    "highlightedBtn"
                                }`}
                            >
                                전체
                            </button>
                            <hr
                                className={`highlightedTab ${
                                    this.state.activeId === 4 ? "on" : "off"
                                }`}
                            />
                        </li>
                    </ul>
                </div>
                {SHOWTAB[this.state.activeId]}
            </main>
        );
    }
}

const SHOWTAB = {
    0: <Homeitem />,
    1: <Newitem />,
    2: <Hotitem />,
    3: <Saleitem />,
    4: <Allitem />,
};

export default Main;
