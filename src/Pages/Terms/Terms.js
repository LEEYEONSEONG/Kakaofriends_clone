import React from "react";
import { withRouter } from "react-router-dom";
import "./Terms.scss";

class Terms extends React.Component {
  constructor() {
    super();

    this.state = {
      isAllCheck: false,
      isAgeCheck: false,
      isMustCheck: false,
      isMustServiceCheck: false,
      isNotifyCheck: false,
      isPersonalInfoCheck: false,
      isLocationCheck: false,
      isProfileCheck: false,
      isAgreeCheck: false,
    };
  }

  handleAllCheck = () => {
    this.setState({
      isAllCheck: !this.state.isAllCheck,
    });
    if (this.state.isAllCheck === false) {
      this.setState({
        isAgeCheck: true,
        isMustCheck: true,
        isMustServiceCheck: true,
        isNotifyCheck: true,
        isPersonalInfoCheck: true,
        isLocationCheck: true,
        isProfileCheck: true,
        isAgreeCheck: true,
      });
    } else if (this.state.isAllCheck === true) {
      this.setState({
        isAgeCheck: false,
        isMustCheck: false,
        isMustServiceCheck: false,
        isNotifyCheck: false,
        isPersonalInfoCheck: false,
        isLocationCheck: false,
        isProfileCheck: false,
        isAgreeCheck: false,
      });
    }
  };

  handleAgree = () => {
    if (
      this.state.isAllCheck ||
      (this.state.isMustCheck &&
        this.state.isMustServiceCheck &&
        this.state.isPersonalInfoCheck)
    ) {
      this.props.history.push("/signup");
    }
  };

  render() {
    const necessary =
      this.state.isMustCheck &&
      this.state.isMustServiceCheck &&
      this.state.isPersonalInfoCheck;

    return (
      <div className="Terms">
        <div className="kakaoWrap">
          <div className="kakaoHead">
            <img alt="logo" src="/Images/bannerlogo.png" />
          </div>
          <div className="kakaoContent">
            <h2>
              카카오계정 <br /> 서비스약관에 동의해주세요.
            </h2>
            <div className="termForm">
              <div className="termsAll" onClick={this.handleAllCheck}>
                <button
                  className={
                    this.state.isAllCheck ? "allBtn AllCheck" : "allBtn"
                  }
                ></button>
                <span>모두 동의합니다.</span>
              </div>
              <div className="termsAllText">
                <p>
                  전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
                  <br />
                  개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한
                  <br />
                  동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.
                </p>
              </div>
              <div
                className="termAgeOver"
                onClick={() =>
                  this.setState({ isAgeCheck: !this.state.isAgeCheck })
                }
              >
                <button
                  className={
                    this.state.isAgeCheck ? "allBtn AllCheck" : "allBtn"
                  }
                ></button>
                <span>만 14세 이상입니다</span>
              </div>
              <div
                className="termsWrap"
                onClick={() =>
                  this.setState({ isMustCheck: !this.state.isMustCheck })
                }
              >
                <button
                  className={
                    this.state.isMustCheck ? "allBtn AllCheck" : "allBtn"
                  }
                ></button>
                <span>[필수] 카카오계정 약관</span>
              </div>
              <div
                className="termsWrap"
                onClick={() =>
                  this.setState({
                    isMustServiceCheck: !this.state.isMustServiceCheck,
                  })
                }
              >
                <button
                  className={
                    this.state.isMustServiceCheck ? "allBtn AllCheck" : "allBtn"
                  }
                ></button>
                <span>[필수] 카카오 통합 서비스약관</span>
              </div>
              <div className="deskCheck">
                <p>
                  본 약관은 회사가 제공하는 카카오, Daum, Melon 서비스 등에 공통
                  <br />
                  적용되며, 본 약관에 동의함으로써 해당 서비스들을 별도 이용계약
                  <br />
                  체결 없이 이용할 수 있습니다.
                </p>
              </div>
              <div
                className="termsWrap"
                onClick={() =>
                  this.setState({ isNotifyCheck: !this.state.isNotifyCheck })
                }
              >
                <button
                  className={
                    this.state.isNotifyCheck ? "allBtn AllCheck" : "allBtn"
                  }
                ></button>
                <span>[선택] 카카오알림 채널 추가 및 광고메시지 수신</span>
              </div>
              <div
                className="termsWrap"
                onClick={() =>
                  this.setState({
                    isPersonalInfoCheck: !this.state.isPersonalInfoCheck,
                  })
                }
              >
                <button
                  className={
                    this.state.isPersonalInfoCheck
                      ? "allBtn AllCheck"
                      : "allBtn"
                  }
                ></button>
                <span>[필수] 개인정보 수집 및 이용 동의</span>
              </div>
              <div
                className="termsWrap"
                onClick={() =>
                  this.setState({
                    isLocationCheck: !this.state.isLocationCheck,
                  })
                }
              >
                <button
                  className={
                    this.state.isLocationCheck ? "allBtn AllCheck" : "allBtn"
                  }
                ></button>
                <span>[선택] 위치정보 수집 및 이용 동의</span>
              </div>
              <div
                className="termsWrap"
                onClick={() =>
                  this.setState({ isProfileCheck: !this.state.isProfileCheck })
                }
              >
                <button
                  className={
                    this.state.isProfileCheck ? "allBtn AllCheck" : "allBtn"
                  }
                ></button>
                <span>[선택] 프로필 정보 추가 수집 동의</span>
              </div>
            </div>
            <div className="nextBtn">
              <button
                className={
                  this.state.isAgreeCheck || necessary ? "btn active" : "btn"
                }
                onClick={this.handleAgree}
                // onClick={() => this.props.history.push("/signup")}
              >
                동의
              </button>
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

export default withRouter(Terms);

const INFO = [
  "이용약관",
  "개인정보 처리방침",
  "운영정책",
  "고객센터",
  "공지사항",
  "한국어",
];
