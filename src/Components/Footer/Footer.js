import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerHeader">
          <div className="footerHeaderInner">
            <div className="footerHeaderTextWrap">
              <span className="footerHeaderText">
                친구들이 궁금해요? 지금 바로 만나보세요!
              </span>
              <a className="footerTopText" href="/#">
                카카오프렌즈 소개
              </a>
              <span>|</span>
              <a className="footerTopText" href="/#">
                브랜드 스토리
              </a>
            </div>
          </div>
        </div>
        <div className="footerBody">
          <div className="sitemap">
            <a className="sitemapText" href="/#">
              개인정보처리방침
            </a>
            <a className="sitemapText" href="/#">
              이용약관
            </a>
            <a className="sitemapText" href="/#">
              제휴문의
            </a>
          </div>
          <div className="companyInfo">
            <span className="infoText">
              카카오아이맥스 사업자등록번호 : 354-86-00070
            </span>
            <br />
            <span className="infoText">
              통신판매업 신고번호 : 2017-서울강남-02573
            </span>
            <br />
            <span className="infoText">
              공동대표 : 김진희 이형우 이연성 정다솜 최지선 이지형
            </span>
            <br />
            <span className="infoText">
              주소 : 서울특별시 강남구 테헤란로98길(대치동) 11 EG빌딩 5,6층
            </span>
            <br />
            <span className="infoText">
              고객센터 : 1577-6263 / 평일 10시 ~ 18시
            </span>
            <br />
            <a className="infoText" href="/#">
              store@kakaofriends.com
              <br />
            </a>
            <span className="infoText">
              글로벌 배송 문의 :{" "}
              <a className="infoText" href="/#">
                global@kakaofriends.com
              </a>
            </span>
            <br />
            <p className="copyright infoText">
              Copyright ©
              <a className="companyInfoText" href="/#">
                KAKAO IX CORP.
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
