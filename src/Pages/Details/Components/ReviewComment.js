import React, { Component } from "react";

export class ReviewComment extends Component {
  render() {
    return (
      <div className="ReviewComment">
        <div className="review">
          <h3 className="title">리뷰 1개</h3>
          <div className="stars">
            <span className="eachStar"></span>
            <span className="eachStar"></span>
            <span className="eachStar"></span>
            <span className="eachStar"></span>
            <span className="eachStar"></span>
            <span className="revScore">5</span>
            <span className="revScoreOutof">5.0</span>
          </div>
        </div>
        <button className="leaveReviewBtn">리뷰를 남겨주세요</button>
        <div className="commentWrap">
          <button className="sortByLike">좋아요순</button>
          <button className="sortByDate">최신순</button>
          <ul className="commentList"></ul>
        </div>
        <div className="pagination"></div>
      </div>
    );
  }
}

export default ReviewComment;
