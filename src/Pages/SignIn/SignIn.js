import React from "react";
import "./SignIn.scss";
// import USER from "./data";

const errorTextOne = "이메일 형식이 올바르지 않습니다.";
const errorNum = "이메일을 입력해주세요.";
// const errorNumFore = "이메일 형식이 맞아";
// "카카오계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      isChecked: false,
      isToolTip: false,
      isErrorBox: "errorBox none",
      idValue: "",
      pwdValue: "",
      errorText: "",
      isClick: false,
    };
  }

  handleIdPwValue = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => this.valid());
  };

  valid = () => {
    const { idValue } = this.state;

    if (idValue.length < 1) {
      this.setState({
        errorText: errorNum,
        // isErrorBox: "errorBox",
      });
      return;
    } else {
      if (!idValue.includes("@")) {
        this.setState({
          errorText: errorTextOne,
          // isErrorBox: "errorBox",
        });
        return;
      } else {
        if (idValue.includes(".com") || idValue.includes(".net")) {
          this.setState({
            errorText: "",
            isErrorBox: "errorBox none",
          });
          return;
        }
      }
    }
  };

  handleClick = () => {
    if (this.state.errorText.length) {
      this.setState({
        isErrorBox: "errorBox",
      });
    } else {
      this.setState({
        isErrorBox: "errorBox none",
      });
    }
  };
  // this.setState({ isClick: true });
  // fetch("http://localhost:3000/data/signinmock.json", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     userEmail: this.state.idValue,
  //     password: this.state.pwdValue,
  //   }),
  // })
  //   .then((response) => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((result) => {
  //     console.log(result);
  //     console.log(result.USER[0].userEmail === this.state.idValue);
  //   });

  render() {
    const { isChecked, isToolTip, isErrorBox, errorText } = this.state;
    const { idValue, pwdValue } = this.state;
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
              ></img>
            </div>
            <div className="loginForm">
              <div className="loginTop">
                <input
                  className="idPwForm"
                  onChange={this.handleIdPwValue}
                  placeholder="카카오계정(이메일 또는 전화번호)"
                  type="text"
                  value={idValue}
                  name="idValue"
                ></input>
                <input
                  className="idPwForm"
                  onChange={this.handleIdPwValue}
                  placeholder="비밀번호"
                  type="password"
                  value={pwdValue}
                  name="pwdValue"
                ></input>
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
                <div className={isErrorBox}>
                  {/* <p>{idValue ? "이메일" : "이메일 또는 전화번호를 입력해주세요."}</p> */}
                  <p>{errorText}</p>
                  {/* <p>이메일 또는 전화번호를 입력해주세요.</p> */}
                  {/* <p>{wrongOne}</p> */}
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

const INFO = [
  "이용약관",
  "개인정보 처리방침",
  "운영정책",
  "고객센터",
  "공지사항",
  "한국어",
];
