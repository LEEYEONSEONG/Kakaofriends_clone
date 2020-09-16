import React from 'react';
import './Footer.scss';

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
              <a className="footerTopText" href="http://localhost:3000/main?#">
                카카오프렌즈 소개
              </a>
              <span>|</span>
              <a className="footerTopText" href="http://localhost:3000/main?#">
                브랜드 스토리
              </a>
            </div>
          </div>
        </div>
        <div className="footerBody">
          <div className="sitemap">
            <a className="sitemapText" href="http://localhost:3000/main?#">
              개인정보처리방침
            </a>
            <a className="sitemapText" href="http://localhost:3000/main?#">
              이용약관
            </a>
            <a className="sitemapText" href="http://localhost:3000/main?#">
              제휴문의
            </a>
          </div>
          <div className="companyInfo">
            <span className="companyInfoText">
              카카오아이맥스 사업자등록번호 : 354-86-00070
            </span>
            <br />
            <span className="companyInfoText">
              통신판매업 신고번호 : 2017-서울강남-02573
            </span>
            <br />
            <span className="companyInfoText">대표이사 : 권승조</span>
            <br />
            <span className="companyInfoText">
              주소 : 서울특별시 강남구 테헤란로98길(대치동) 11 EG빌딩 5,6층
            </span>
            <br />
            <span className="companyInfoText">
              고객센터 : 1577-6263 / 평일 10시 ~ 18시
            </span>
            <br />
            <a className="companyInfoText" href="http://localhost:3000/main?#">
              store@kakaofriends.com
            </a>
            <span className="companyInfoText">
              글로벌 배송 문의 :
              <a
                className="companyInfoText"
                href="http://localhost:3000/main?#"
              >
                global@kakaofriends.com
              </a>
            </span>
            <br />
            <p className="copyright companyInfoText">
              Copyright ©
              <a
                className="companyInfoText"
                href="http://localhost:3000/main?#"
              >
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
