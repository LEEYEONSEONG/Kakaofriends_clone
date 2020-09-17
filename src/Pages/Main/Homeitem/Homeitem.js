import React from "react";
import HomeCard from "./HomeCard";
import "./Homeitem.scss";
import HOMECARD from "./HomeData";

class Homeitem extends React.Component {
  constructor() {
    super();
    this.state = {
      CardList: HOMECARD,
    };
  }

  render() {
    const { CardList } = this.state;
    return (
      <div className="Homeitem">
        <div className="List">
          {CardList.map((card) => {
            return <HomeCard card={card} />;
          })}
        </div>
      </div>
    );
  }
}

export default Homeitem;
