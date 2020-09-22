import React from "react";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      idValue: "",
      pwdValue: "",
      pwdCheckValue: "",
      idErrorText: "",
      pwdErrorText: "",
      isConfirmForm: false,
    };
  }

  handleIdPwdValue = (e) => {
    const { name, value } = e.target;

    if (value) {
      this.setState({
        idErrorText: "",
      });
    }
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const SIGNUP_STATUS = {
      100: "카카오계정 이메일을 입력해주세요.",
      200: "이메일 형식이 올바르지 않습니다.",
      300: "카카오계정 비밀번호를 입력해주세요.(영문자/숫자/특수문자",
      400: "입력한 비밀번호와 재입력학 비밀번호가 일치하지 않습니다. 다시 확인해 주세요.",
    };

    const errorText = SIGNUP_STATUS[this.validata()];
    const idPwdStatus = this.validata() < 300 ? "idErrorText" : "pwdErrorText";

    if (!errorText) fetch();

    if (errorText) {
      this.setState({
        [idPwdStatus]: errorText,
      });
    }
  };

  validata = () => {
    const { idValue, pwdValue, pwdCheckValue } = this.state;

    const idLengthCheck = !idValue;
    const idFormCheck = !idValue.includes("@") || !idValue.includes(".");
    const pwdInclued = !pwdValue;
    const pwdCheck = pwdValue !== pwdCheckValue;

    if (idLengthCheck) return 100;
    if (idFormCheck) return 200;
    if (pwdInclued) return 300;
    if (pwdCheck) return 400;
  };

  render() {
    const {
      idValue,
      idErrorText,
      pwdValue,
      pwdCheckValue,
      pwdErrorText,
      isConfirmForm,
    } = this.state;
    return (
      <div className="SignUp">
        <div className="kakaoWrap">
          <div className="kakaoHead">
            <img alt="logo" src="/Images/bannerlogo.png" />
          </div>
          <div className="kakaoContent">
            <h2>카카오계정 정보를 입력하세요.</h2>
            <div className="signUpForm">
              <strong>카카오계정이메일</strong>
              <div className="signUp">
                <input
                  type="search"
                  placeholder="이메일 주소 입력"
                  onChange={this.handleIdPwdValue}
                  value={idValue}
                  name="idValue"
                />
                <div className="idError">
                  <p>{idErrorText}</p>
                </div>
                <ul className="liskText">
                  <li>카카오계정으로 사용할 Daum 이메일을 만들어주세요.</li>
                  <li>
                    만약 사용중인 Daum메일이 있다면, Daum아이디로 로그인하여
                    계정을 가입해주세요
                  </li>
                </ul>
                <div className="pwdText">
                  <strong>비밀번호</strong>
                </div>
                <div className="pwdInfo">
                  <input
                    className="pwd"
                    placeholder="비밀번호(8~32자리)"
                    onChange={this.handleIdPwdValue}
                    value={pwdValue}
                    type="search"
                    name="pwdValue"
                  />
                  <input
                    className="pwdCheck"
                    placeholder="비밀번호 재입력"
                    onChange={this.handleIdPwdValue}
                    value={pwdCheckValue}
                    type="search"
                    name="pwdCheckValue"
                  />
                  <div className="pwdError">
                    <p>{pwdErrorText}</p>
                  </div>
                </div>
                <div className="nickNameText">
                  <strong>이름</strong>
                  <input
                    className="nickUnfo"
                    placeholder="닉네임을 입력해주세요."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="phoneNumForm">
              <div className="phoneText">
                <strong>전화번호</strong>
              </div>
              <div className="wrapPhone">
                <div>
                  <span>+82</span>
                  <span />
                </div>
                <input
                  className="phoneNumber"
                  placeholder="전화번호"
                  type="search"
                />
              </div>
              <div className={isConfirmForm ? "selectPhone" : "closePhone"}>
                <input type="search" placeholder="인증번호 입력" />
              </div>
              <div className="confirm">
                <button
                  onClick={() =>
                    this.setState({ isConfirmForm: !isConfirmForm })
                  }
                >
                  인증번호 발생
                </button>
              </div>
              <div className="nextBtn" onClick={this.handleClick}>
                <button>다음</button>
              </div>
            </div>
          </div>
        </div>
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
            <span>
              Copyright © <strong>Kakao Corp.</strong> All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default SignUp;

const INFO = [
  "이용약관",
  "개인정보 처리방침",
  "운영정책",
  "고객센터",
  "공지사항",
  "한국어",
];
