import React from "react";
import HotCard from "./HotCard";
import "./Hotitem.scss";

class Hotitem extends React.Component {
  constructor() {
    super();

    this.state = {
      itemList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/Hotmock.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          itemList: res.data,
        });
      });
  }

  render() {
    return (
      <div className="Hotitem">
        <div className="HotCardList">
          {this.state.itemList.map((el, i) => {
            return <HotCard key={i} img={el.img} />;
          })}
        </div>
      </div>
    );
  }
}

export default Hotitem;
