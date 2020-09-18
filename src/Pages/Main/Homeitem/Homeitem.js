import React from "react";
import HomeCard from "./HomeCard";
import "./Homeitem.scss";
import HOMECARD from "./HomeData";

class Homeitem extends React.Component {
  state = {
    cardList: HOMECARD,
  };

  render() {
    const { cardList } = this.state;
    return (
      <div className="Homeitem">
        <div className="HomeCardList">
          {cardList.map((card) => {
            return <HomeCard card={card} key={card.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Homeitem;
