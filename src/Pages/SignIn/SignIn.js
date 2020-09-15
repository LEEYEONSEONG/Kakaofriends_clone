import React from "react";
import "./SignIn.scss";

const INFO = [
  "이용약관",
  "개인정보 처리방침",
  "운영정책",
  "고객센터",
  "공지사항",
  "한국어",
];

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      checkbox: "checkBox",
      toolTip: "toolTip none",
      errorBox: "errorBox none",
    };
  }

  handleCheckBox = () => {
    const { checkbox } = this.state;
    this.setState({
      checkbox: checkbox === "checkBox" ? "checkBox active" : "checkBox",
    });
  };

  handleToolTip = () => {
    const { toolTip } = this.state;
    this.setState({
      toolTip: toolTip === "toolTip" ? "toolTip none" : "toolTip",
    });
  };

  handleErrorBox = () => {
    const { errorBox } = this.state;
    this.setState({
      errorBox: errorBox === "errorBox" ? "errorBox none" : "errorBox",
    });
  };

  render() {
    const { checkbox, toolTip, errorBox } = this.state;
    return (
      <div className="SignIn">
        <main className="wrapper">
          <div className="wrapperLeft">
            <div className="infoBanner">
              <strong className="bannerFontTop">
                카카오계정 하나로 충분합니다.
              </strong>
              <p className="bannerFontBot">
                Kakao의 모든 서비스 뿐 아니라 Melon, Daum등 다른 다양한
                서비스까지 <br></br>이제 카카오계정으로 이용해 보세요!
              </p>
            </div>
            <div className="bannerImg">
              <img src={"Images/banner.png"} alt="banner" />
            </div>
          </div>
          <div className="wrapperRight">
            <div className="infoLogo">
              <img
                className="infoServiceLogo"
                src={"/Images/bannerlogo.png"}
                alt="로고"
              ></img>
            </div>
            <div className="loginForm">
              <div className="loginTop">
                <input
                  className="idPwForm"
                  placeholder="카카오계정(이메일 또는 전화번호)"
                  type="text"
                ></input>
                <input
                  className="idPwForm"
                  placeholder="비밀번호"
                  type="password"
                ></input>
                <div className="setLogin">
                  <span
                    className={checkbox}
                    onClick={this.handleCheckBox}
                  ></span>
                  <span onClick={this.handleToolTip}>로그인 상태 유지</span>
                  <div className={toolTip}>
                    <p>개인정보 보호를 위해 개인 PC에서만 사용해 주세요.</p>
                    <a href="www">도움말 보기</a>
                  </div>
                </div>
              </div>
              <div className="loginBtm">
                <div className={errorBox}>
                  <p>이메일 또는 전화번호를 입력해주세요.</p>
                </div>
                <button className="btn" onClick={this.handleErrorBox}>
                  로그인
                </button>
                <div className="line">
                  <div className="inLine" />
                  <div className="lineText">또는</div>
                  <div className="inLine" />
                </div>
                <button className="qrCode">
                  <img src={"/Images/qrimage.png"} alt="qr"></img>QR코드 로그인
                </button>
              </div>
            </div>
            <div className="infoUser">
              <a href="www">회원가입</a>
              <ul className="infoSearch">
                <li>
                  <a href="www">카카오계정</a>
                </li>
                <li className="searchLine"></li>
                <li>
                  <a href="www">비밀번호 찾기</a>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <footer className="information">
          <ul className="infoTop">
            {INFO.map((el, i) => {
              return (
                <li key={i}>
                  <a href="www">{el}</a>
                </li>
              );
            })}
          </ul>
          <div className="infoBot">
            <span>Copyright © Kakao Corp. All rights reserved.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default SignIn;
