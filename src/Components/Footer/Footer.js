import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-top">
          <div className="footer-top-inner">
            <div className="footer-top-text">
              <span className="sentence">
                친구들이 궁금해요? 지금 바로 만나보세요!
              </span>

              <a href="http://localhost:3000/main?#" className="intro">
                카카오프렌즈 소개
              </a>
              <span>|</span>
              <a href="http://localhost:3000/main?#" className="story">
                브랜드 스토리
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <div className="sitemap">
            <a className="sitemap-text" href="http://localhost:3000/main?#">
              개인정보처리방침
            </a>
            <a className="sitemap-text" href="http://localhost:3000/main?#">
              이용약관
            </a>
            <a className="sitemap-text" href="http://localhost:3000/main?#">
              제휴문의
            </a>
          </div>
          <div className="company-info">
            <span className="company-info-text">
              카카오아이맥스 사업자등록번호 : 354-86-00070
            </span>
            <br />
            <span className="company-info-text">
              통신판매업 신고번호 : 2017-서울강남-02573
            </span>
            <br />
            <span className="company-info-text">대표이사 : 권승조</span>
            <br />
            <span className="company-info-text">
              주소 : 서울특별시 강남구 테헤란로98길(대치동) 11 EG빌딩 5,6층
            </span>
            <br />
            <span className="company-info-text">
              고객센터 : 1577-6263 / 평일 10시 ~ 18시
            </span>
            <br />
            <a
              className="company-info-text"
              href="http://localhost:3000/main?#"
            >
              store@kakaofriends.com
            </a>
            <span className="company-info-text">
              글로벌 배송 문의 :
              <a
                className="company-info-text"
                href="http://localhost:3000/main?#"
              >
                global@kakaofriends.com
              </a>
            </span>
            <br />
            <span className="copyright company-info-text">
              Copyright ©
              <a
                className="company-info-text"
                href="http://localhost:3000/main?#"
              >
                KAKAO IX CORP.
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
