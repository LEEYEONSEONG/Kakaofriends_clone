import React, { Component } from "react";
import "../Details.scss";

export class LiveRfq extends Component {
  render() {
    return (
      <div className="LiveRfq">
        <div className="LiveRfqWrap">
          <span className="text">실시간 문의</span>
          <button className="consultBtn">
            <span className="consultImg"></span>
            <span className="consultText">상담하기</span>
          </button>
        </div>
      </div>
    );
  }
}

export default LiveRfq;
