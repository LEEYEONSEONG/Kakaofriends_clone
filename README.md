# Kakao Friend Shop Clone Coding! 🙌

##  👀 Project Overview 
- **React를 사용한 클론 프로젝트**
- 백엔드에서 데이터를 fetch 해오는 첫 프로젝트
- 공동의 public 폴더와 scss를 사용하고 관리
- 리액트 컴포넌트를 공유하여 효율성을 높이는 작업

### 작업 기간
**2020.09.14 - 2020.09.25**


## 🔧 기술 스택

**프론트엔드 4명**
- HTML/CSS
- JavaScript(ES6+)
- React
- SASS
- Git

**백엔드 2명**
- Django
- Python
- Selenium
- Beautiful soup
- PyJWT
- Bcrypt

## 🎨 주요 구현 사항
- main
  - access token를 활용한 로그인, 회원가입, 로그아웃
  - 무한스크롤로 상품데이터를 받아오는 기능
  - 메인의 다섯가지 탭 레이아웃 구현
  - 높은가격순, 낮은가격순 ordering 기능
  - slick slider로 슬라이드 배너 구현
  - 구글맵 API를 사용한 매장 안내 페이지
- nav
  - 카테고리 및 유저 페이지 모달
  - 제품 키워드 검색 기능 구현
- detail
  - query string url 을 사용한 상세페이지 연결 구현
  - 상세페이지의 레이아웃 구현
- etc.
  - 장바구니 기능
  - 카테고리 분류 기능
  - top 버튼 구현

## 🖥 결과 화면

#### 1. 메인 - 홈탭
ref를 사용하여 핀터레스트 형식의 레이아웃을 구현했다.

![](https://images.velog.io/images/hyounglee/post/5d50232e-0829-466a-9130-2a328a6fc007/ezgif.com-video-to-gif%20(7).gif)

#### 2. 메인 - 신규탭
상단의 slide 배너를 구현하였고 무한스크롤 방식으로 백엔드에서 계속 데이터를 10개씩 나누어 fetch 하게 된다.

![](https://images.velog.io/images/hyounglee/post/1d883f76-0ffa-4572-8164-87baab84d741/ezgif.com-video-to-gif%20(8).gif)

#### 3. 메인 - 인기, 세일탭
인기탭은 데이터 크롤링이 어렵다는 백엔드 의견에 따라 Mock Data를 만들어서 구현하였다.

![](https://images.velog.io/images/hyounglee/post/f4e82425-4ed7-4434-9b37-ce0311e16b33/ezgif.com-video-to-gif%20(9).gif)

#### 4. 메인 - 전체탭
Query String으로 Sorting 된 데이터를 fetch 하여 ordering 옵션 기능을 구현했다.

![](https://images.velog.io/images/hyounglee/post/72e0d087-e9f8-46a0-bce0-a1d65ff1a16a/ezgif.com-video-to-gif%20(10).gif)

#### 5. 매장안내
구글 API 및 리액트 컴포넌트, map함수를 적극 활용하여 페이지를 구현했다.

![](https://images.velog.io/images/hyounglee/post/941c5bfb-bcb4-415d-abd7-564172a80e0b/ezgif.com-video-to-gif%20(12).gif)

#### 6. 카테고리 페이지

![](https://images.velog.io/images/hyounglee/post/a0ee8bcd-fd97-4e75-a51c-339f71fd4dcd/ezgif.com-video-to-gif%20(11).gif)

#### 7. 검색 기능
filter, dangerouslysetinnerhtml을 사용하여 검색 시 뜨는 모달창 기능을 구현하고 query string을 사용하여 검색결과 페이지에서 데이터를 받아오는 것을 구현했다.

![](https://images.velog.io/images/hyounglee/post/36cf6527-aa3f-4b21-9bc0-2d8a331cdc27/ezgif.com-gif-maker%20(2).gif)

#### 8. 회원가입
validation check 또한 실제 페이지와 동일하게 구현되었다. 백엔드에서 오는 message에 따라서 중복이메일, 유효하지 않은 email, password 양식 등을 체크하여 유저에게 모달창을 띄운다.

![](https://images.velog.io/images/hyounglee/post/cc3f8b4d-7930-4cdb-9daf-0b2df13e9d9d/ezgif.com-video-to-gif%20(13).gif)

#### 9. 로그인
백엔드 POST 방식으로 계정을 확인하고 메인페이지로 연결된다. access token이 local storage에 저장된다. access token이 있는 경우, 유저 모달창이 변경된 것을 확인할 수 있다.

![](https://images.velog.io/images/hyounglee/post/f8a1a446-eeaf-4542-84c7-49b25844f19c/ezgif.com-video-to-gif%20(15).gif)

#### 10. 상세페이지
query string과 react router를 사용하여 각 id로 상세페이지 컴포넌트에 연결된다.

![](https://images.velog.io/images/hyounglee/post/165342f8-ba9e-48ae-8ac4-4aa552c56804/ezgif.com-video-to-gif%20(16).gif)

#### 11. 장바구니
메인 화면에서 아이콘으로 장바구니에 넣고 빼고 토글을 할 수 있고, 장바구니에서는 선택한 물품의 전체 가격을 계산한다. 30,000원 이상 구매시 배송비가 무료이다. 개별 삭제 및 전체 삭제 기능까지 구현되었다.
실제 카카오프렌즈샵에서는 메인에서 아이콘 토글이 아닌 장바구니에 추가까지만 가능하지만, **사용자의 입장에서 실수로 장바구니에 물건을 넣었을때 현재 페이지를 벗어나야하는 불편함이 있다고 느껴서 토글 방식으로 개선했다.**
![](https://images.velog.io/images/hyounglee/post/3d70f1ad-3a7b-4ed5-9784-ccba4bbc9ce0/ezgif.com-video-to-gif%20(17).gif)

## 💌 프로젝트 후기 블로그 & 한줄평

**드림카카오의 최강프론트! 4인방**
### [김진희](https://velog.io/@bab_bury/Project)
> 능력자 드림카카오 팀원들 ! 다른 팀원 앞에서 너무 웃지마 … 서운해 …
### [이연성](https://velog.io/@dustjd1535/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0-DreamKakao-Friends)
> 다른팀 가서 너무 열심히 하지마 .... 서운해 ...
### [이지형(PM)](https://velog.io/@hyounglee/KakaoClone)
> 1차 프로젝트 다들 넘넘 고생하셨습니다! 팀워크 짱짱인 우리팀 완젼 즐거웠어요 ^0^ ♥️
### [이형우](https://velog.io/@jaedie/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88-1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%EA%B3%BC-%EB%81%9D)
> 너무 재미있게 코딩했는데 프로젝트 결과도 만족스럽게 나온 우리팀 멋져부리 그리고 연성도치야 고마워

