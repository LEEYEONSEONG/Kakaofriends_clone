import React from "react";
import { withRouter } from "react-router-dom";
import "./SignIn.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      isChecked: false,
      isToolTip: false,
      isClick: false,
      isValidCheck: false,
      isErrorBox: "",
      idValue: "",
      pwdValue: "",
      errorText: "",
    };
  }

  handleIdPwValue = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const LOGIN_STATUS = {
      100: "이메일을 입력해주세요.",
      200: "이메일 형식이 올바르지 않습니다.",
      300: "카카오계정 비밀번호를 입력해주세요.(영문자/숫자/특수문자)",
    };
    const errorText = LOGIN_STATUS[this.validateIdPW()];

    if (!errorText)
      fetch("http://3.34.133.239:8000/account/signin", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.idValue,
          password: this.state.pwdValue,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.Authorization) {
            this.props.history.push("/main");
          } else if (result.message === "UNAUTHORIZED") {
            this.setState({
              errorText:
                "카카오계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.",
            });
          }
        });

    if (errorText) this.setState({ errorText });
  };

  validateIdPW = () => {
    const { idValue, pwdValue } = this.state;
    const idValueCheck = !idValue.length;
    const idIncludes = !idValue.includes("@") || !idValue.includes(".");
    const hasValue = idValue && !pwdValue;

    if (idValueCheck) return 100;
    if (idIncludes) return 200;
    if (hasValue) return 300;
  };

  handleTerms = () => {
    this.props.history.push("/terms");
  };

  render() {
    const { isChecked, isToolTip, errorText, idValue, pwdValue } = this.state;
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
                서비스까지 <br />
                이제 카카오계정으로 이용해 보세요!
              </p>
            </div>
            <div className="bannerImg">
              <img alt="banner" src="Images/banner.png" />
            </div>
          </div>
          <div className="wrapperRight">
            <div className="infoLogo">
              <img
                className="infoServiceLogo"
                alt="로고"
                src="/Images/bannerlogo.png"
              />
            </div>
            <div className="loginForm">
              <div className="loginTop">
                <input
                  className="idPwForm"
                  onChange={this.handleIdPwValue}
                  placeholder="카카오계정(이메일 또는 전화번호)"
                  type="search"
                  value={idValue}
                  name="idValue"
                />
                <input
                  className="idPwForm"
                  onChange={this.handleIdPwValue}
                  placeholder="비밀번호"
                  type="search"
                  value={pwdValue}
                  name="pwdValue"
                />
                <div className="setLogin">
                  <span
                    className={isChecked ? "checkBox active" : "checkBox"}
                    onClick={() => this.setState({ isChecked: !isChecked })}
                  ></span>
                  <span
                    onClick={() => this.setState({ isToolTip: !isToolTip })}
                  >
                    로그인 상태 유지
                  </span>
                  <div className={isToolTip ? "toolTip" : "toolTip none"}>
                    <p>개인정보 보호를 위해 개인 PC에서만 사용해 주세요.</p>
                    <a href="www">도움말 보기</a>
                  </div>
                </div>
              </div>
              <div className="loginBtm">
                <div className={errorText.length ? "errorBox" : "none"}>
                  <p>{errorText}</p>
                </div>
                <button className="btn" onClick={this.handleClick}>
                  로그인
                </button>
                <div className="line">
                  <div className="inLine" />
                  <div className="lineText">또는</div>
                  <div className="inLine" />
                </div>
                <button className="qrCode">
                  <img src="/Images/qrimage.png" alt="qr"></img>QR코드 로그인
                </button>
              </div>
            </div>
            <div className="infoUser">
              <p onClick={this.handleTerms}>회원가입</p>
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

export default withRouter(SignIn);

const INFO = [
  "이용약관",
  "개인정보 처리방침",
  "운영정책",
  "고객센터",
  "공지사항",
  "한국어",
];
