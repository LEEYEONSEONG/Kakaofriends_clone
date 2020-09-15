import React from "react";
import Maintab from "./Maintab";
import Allitem from "./Allitem/Allitem"
import "./Main.scss";

class Main extends React.Component {
  render() {
    return <div className="Main">
        <Maintab />
        <Allitem />
    </div>;
  }
}

export default Main;
