import React, { Component } from "react";
import List from "../../../Components/List/List";
import SUGGESTEDITEMS from "./SuggestedItem";

export class Suggestion extends Component {
  constructor() {
    super();
    this.state = { suggestedItems: SUGGESTEDITEMS };
  }
  render() {
    return (
      <div className="Suggestion">
        <div className="SuggestionWrap">
          <h3 className="header">
            잠깐만, <br /> 이 상품은 어때요?
          </h3>
          <List productList={this.state.suggestedItems} />
        </div>
        <div className="SuggestionWrap">
          <h3 className="header">
            최근 본 상품이 <br /> 요기 있네
          </h3>
          <List productList={this.state.suggestedItems} />
        </div>
      </div>
    );
  }
}

export default Suggestion;
