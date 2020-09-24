import React, { Component } from "react";
import "../Details.scss";

export class ReviewComment extends Component {
  constructor() {
    super();

    this.state = {
      comment: [],
      starCount: [],
    };
  }

  componentDidMount() {
    fetch("/Data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        const result = res.comment;
        this.setState({
          comment: result,
        });
      });
  }

  render() {
    const { comment } = this.state;
    return (
      <div className="ReviewComment">
        <div className="review">
          <div className="reviewWrap">
            <h3 className="title">리뷰 {comment.length}개</h3>
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
        </div>
        <div className="commentWrap">
          <button className="sortByLike">좋아요순</button>
          <button className="sortByDate">최신순</button>
          <ul className="commentList">
            {comment.map((comment) => {
              return (
                <li className="commentListLi" key={comment.id}>
                  <div className="listWrap">
                    <div className="nickName">{comment.name}</div>
                    <div className="score">
                      <span className="smallStar"></span>
                      <span className="smallStar"></span>
                      <span className="smallStar"></span>
                      <span className="smallStar"></span>
                      <span className="smallStar"></span>
                      <p className="date">{comment.date}</p>
                    </div>
                    <div className="comment">{comment.comment}</div>
                  </div>
                  <div className="likeBtn">
                    <button className="mainBtn">좋아요</button>
                    <p className="likeRec">{comment.liked}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pagination">1</div>
      </div>
    );
  }
}

export default ReviewComment;
