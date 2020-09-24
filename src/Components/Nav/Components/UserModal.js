import React from "react";
import "./UserModal.scss";

class UserModal extends React.Component {
  constructor() {
    super();
    this.state = {
      hoverOn: false,
      opacity: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 0);
  }

  render() {
    const { isLogin } = this.props;
    return (
      <ul
        style={{
          opacity: this.state.opacity,
        }}
        className="UserModal"
        onMouseOver={() => {
          this.setState({ hoverOn: true });
        }}
      >
        <li>
          <a href="/signin">로그인</a>
        </li>
        <li className={!isLogin && "notAllowed"}>주문내역</li>
        <li className={!isLogin && "notAllowed"}>찜</li>
        <li className={!isLogin && "notAllowed"}>취소 및 교환</li>
        <li className={!isLogin && "notAllowed"}>포인트</li>
        <li className={!isLogin && "notAllowed"}>1:1 문의</li>
        <li>비회원 주문조회</li>
        <li>기프트카드 조회•환불</li>
      </ul>
    );
  }
}

export default UserModal;