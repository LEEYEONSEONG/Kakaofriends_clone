import React from "react";
import "./UserModal.scss";

class UserModal extends React.Component {
  constructor() {
    super();
    this.state = {
      hoverOn: false,
    };
  }
  render() {
    const { isLogin } = this.props;
    const checkLogin = !isLogin && "notAllowed";
    return (
      <ul
        className={"UserModal"}
        onMouseOver={() => {
          this.setState({ hoverOn: true });
        }}
      >
        <li>
          <a href="/signin">로그인</a>
        </li>
        <li className={checkLogin}>주문내역</li>
        <li className={checkLogin}>찜</li>
        <li className={checkLogin}>취소 및 교환</li>
        <li className={checkLogin}>포인트</li>
        <li className={checkLogin}>1:1 문의</li>
        <li>비회원 주문조회</li>
        <li>기프트카드 조회•환불</li>
      </ul>
    );
  }
}

export default UserModal;
