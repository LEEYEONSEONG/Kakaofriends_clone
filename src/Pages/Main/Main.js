import React from "react";
import "./Main.scss";
import Newitem from "./Newitem/Newitem";

class Main extends React.Component {
  render() {
    return <main className="Main">
      <Newitem />
    </main>;
  }
}

export default Main;
