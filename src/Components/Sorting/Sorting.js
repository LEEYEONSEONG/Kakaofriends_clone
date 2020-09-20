import React from "react";
import SortingChar from "./SortingChar";
import "./Sorting.scss";
import CHARACTER from "./SortingData";

class Sorting extends React.Component {
  constructor() {
    super();
    this.state = {
      charList: CHARACTER,
      whichModalShown: 0,
    };
  }

  showOption = (e) => {
    const { whichModalShown } = this.state;
    const { name } = e.target;
    const idx = Number(name);
    this.setState({
      whichModalShown: whichModalShown !== idx ? idx : 0,
    });
  };

  render() {
    const { charList, whichModalShown } = this.state;
    return (
      <div className="Sorting">
        <ul className="sortItems">
          <li className="listType">
            <button
              className="sortingType sortBtn"
              onClick={this.showOption}
              name={1}
            >
              판매량순
            </button>
            <div
              className={`selectModalWrap selectType 
                                ${whichModalShown === 1 ? "" : "hidden"}
                            `}
            >
              <ul className="sortType">
                <li className="selectModalItem">
                  <a className="selectModalOption orderHot" href="/main">
                    판매량순
                  </a>
                </li>
                <li className="selectModalItem">
                  <a className="selectModalOption orderNew" href="/main">
                    신상품순
                  </a>
                </li>
                <li className="selectModalItem">
                  <a className="selectModalOption orderLowPrice" href="/main">
                    낮은 가격순
                  </a>
                </li>
                <li className="selectModalItem">
                  <a className="selectModalOption orderHighPrice" href="/main">
                    높은 가격순
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="listChar">
            <button
              className="sortingChar sortBtn"
              onClick={this.showOption}
              name={2}
            >
              캐릭터 전체
            </button>
            <div
              className={`selectModalWrap selectChar 
                                ${whichModalShown === 2 ? "" : "hidden"}
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
