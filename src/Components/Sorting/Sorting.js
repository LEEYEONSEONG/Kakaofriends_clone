import React from "react";
import CHARACTER from "./SortingData";
import SortingChar from "./SortingChar";
import "./Sorting.scss";

class Sorting extends React.Component {
    constructor() {
        super();
        this.state = {
            charList: [],
            typeBool: false,
            charBool: false,
        };
    }

    componentDidMount() {
        this.setState({
            charList: CHARACTER,
        });
    }

    showOption = () => {
        this.setState(
            {
                typeBool: !this.state.typeBool,
            },
            () => {
                this.state.typeBool &&
                    this.setState({
                        charBool: false,
                    });
            }
        );
    };

    showOption2 = () => {
        this.setState(
            {
                charBool: !this.state.charBool,
            },
            () => {
                this.state.charBool &&
                    this.setState({
                        typeBool: false,
                    });
            }
        );
    };

    render() {
        const { charList } = this.state;
        return (
            <div className="Sorting">
                <ul className="sortItems">
                    <li className="listType">
                        <button
                            className="sortingType sortBtn"
                            onClick={this.showOption}
                        >
                            판매량순
                        </button>
                        <div
                            className={`selectModalWrap selectType "
                                ${this.state.typeBool ? "" : "hidden"}
                            `}
                        >
                            <ul className="sortType">
                                <li className="selectModalItem">
                                    <a className="selectModalOption orderHot">
                                        판매량순
                                    </a>
                                </li>
                                <li className="selectModalItem">
                                    <a className="selectModalOption orderNew">
                                        신상품순
                                    </a>
                                </li>
                                <li className="selectModalItem">
                                    <a className="selectModalOption orderLowPrice">
                                        낮은 가격순
                                    </a>
                                </li>
                                <li className="selectModalItem">
                                    <a className="selectModalOption orderHighPrice">
                                        높은 가격순
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="listChar">
                        <button
                            className="sortingChar sortBtn"
                            onClick={this.showOption2}
                        >
                            캐릭터 전체
                        </button>
                        <div
                            className={`selectModalWrap selectChar "
                                ${this.state.charBool ? "" : "hidden"}
                            `}
                        >
                            <ul className="sortChar">
                                <li className="selectModalItem">
                                    <div className="selectCharWrap">
                                        <div>
                                            <span className="charImgWrap">
                                                <img
                                                    alt="전체보기"
                                                    src="https://t1.kakaocdn.net/friends/new_store/2.0/common/category_group_on.png"
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="선택한 옵션"
                                                    className="selectedCharIcon"
                                                    src="https://t1.kakaocdn.net/friends/new_store/2.0/common/category_icn-done.png"
                                                />
                                            </span>
                                        </div>
                                        <span className="selected">전체</span>
                                    </div>
                                </li>
                                {charList.map((character) => (
                                    <SortingChar
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
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sorting;
