import React from "react";
// import { renderIntoDocument } from "react-dom/test-utils";
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

  LoginInOut = () => {
    if (!this.props.isLogin) {
      this.props.history.push("/signin");
      return;
    }
    window.localStorage.removeItem("token");
    alert("로그아웃 했습니다!");
    this.props.history.push("/main");
  };

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
          <p onClick={this.LoginInOut}>{!isLogin ? "로그인" : "로그아웃"} </p>
        </li>
        <li className={isLogin ? "allowed" : "notAllowed"}>주문내역</li>
        <li className={isLogin ? "allowed" : "notAllowed"}>찜</li>
        <li className={isLogin ? "allowed" : "notAllowed"}>취소 및 교환</li>
        <li className={isLogin ? "allowed" : "notAllowed"}>포인트</li>
        <li className={isLogin ? "allowed" : "notAllowed"}>1:1 문의</li>
        <li>비회원 주문조회</li>
        <li>기프트카드 조회•환불</li>
      </ul>
    );
  }
}

export default UserModal;
