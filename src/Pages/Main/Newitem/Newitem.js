import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Newitem.scss";

class Newitem extends React.Component {

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true,
      arrows: true
    };  
    return (
    <div className="Newitem">
      
      <div class="container">
        <Slider {...settings}>
            <div>
              <img alt="신규배너1" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200903182239_web_kr.jpg?type=thumb&opt=R1080x210@2xa" /> 
                <p className="text1">잘 익은 가을 감성</p>
                <p className="text2">하비스트 프렌즈</p>
                <p className="text3">1 / 10</p>
            </div>
            <div>
              <img alt="신규배너2" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200908121921_web_kr.jpg?type=thumb&opt=R1080x210@2xa" />
                <p className="text1">소중한 내 피부를 지켜줄</p>
                <p className="text2">프렌즈 필터샤워기</p>
                <p className="text3">2 / 10</p>
            </div>
            <div>
              <img alt="신규배너3" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200825092657_web_kr.jpg?type=thumb&opt=R1080x210@2xa" />
                  <p className="text1">차 문을 열면 프렌즈가 딱</p>
                  <p className="text2">차량용품 신상 모음</p>
                  <p className="text3">3 / 10</p>
            </div>
            <div>
              <img alt="신규배너4" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200618105835_web_kr.jpg?type=thumb&opt=R1080x210@2xa" />
                <p className="text1">내 방 감성 장인</p>
                <p className="text2">프렌즈 무드등 모음</p>
                <p className="text3">4 / 10</p>
            </div>
            <div>
              <img alt="신규배너5" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200706140414_web_kr.jpg?type=thumb&opt=R1080x210@2xa" />
                <p className="text1">배터리 걱정 끝!</p>
                <p className="text2">실용성 100% 충전템 </p>
                <p className="text3">5 / 10</p>
            </div>
            <div>
              <img alt="신규배너6" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200612182020_web_kr.jpg?type=thumb&opt=R1080x210@2xa" />
                <p className="text1">선선한 바람 한 점</p>
                <p className="text2">온라인전용 탁상 선풍기</p>
                <p className="text3">6 / 10</p>
            </div>
            <div>
                <img alt="신규배너7" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200724114645_web_kr.jpg?type=thumb&opt=R1080x210@2xa" />
                  <p className="text1">마음까지 가벼운 청소시간 </p>
                  <p className="text2">무선 핸디청소기로 깔끔하게</p>
                  <p className="text3">7 / 10</p>
            </div>
            <div>
                <img alt="신규배너8" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200520135445_web_kr.jpg?type=thumb&opt=R1080x210@2xa" />
                  <p className="text1">데스크테리어 종결자</p>
                  <p className="text2">없는 게 없는 프렌즈 데꾸템</p>
                  <p className="text3">8 / 10</p>
            </div>
            <div>
                <img alt="신규배너9" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200709154656_web_kr.jpg?type=thumb&opt=R1080x210@2xa" />
                  <p className="text1">뽀짝템 싹쓰리하죨</p>
                  <p className="text2">작고 소중한 죠르디 신상</p>
                  <p className="text3">9 / 10</p>
            </div>
            <div>
                <img alt="신규배너10" src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200710165441_web_kr.jpg?type=thumb&opt=R1080x210@2xa" />
                  <p className="text1">구름 위로 오르는 상상</p>
                  <p className="text2">카카오프렌즈 홈 스마트 체중계</p>
                  <p className="text3">10 / 10</p>
            </div>
        </Slider>
        <article>
        <a href="https://store.kakaofriends.com/kr/products/category/subject?categorySeq=103&subCategorySeq=164&sort=createDatetime,desc" 
        className="moreButton">
          더 보기
        </a>
        </article>
        </div>
    </div>
          );
        }
      }
export default Newitem;