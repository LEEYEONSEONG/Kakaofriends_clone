import Slider from "react-slick";
import React from "react";
import List from "../../../Components/List/List";
import { SETTINGS } from "./NewitemSettings";
import { withInfiniteScroll } from "../hoc";
import NEW_ITEM_UPPER from "./NewitemUpperData";
import BANNER from "./NewitemBanner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Newitem.scss";

class Newitem extends React.Component {
  state = {
    productListUpper: NEW_ITEM_UPPER,
  };

  render() {
    const { productListUpper } = this.state;
    const { productList } = this.props;
    return (
      <div className="Newitem">
        <div className="bannerContainer">
          <Slider {...SETTINGS}>
            {BANNER.map((el) => {
              return (
                <div key={el.id}>
                  <img alt={el.alt} src={el.image} />
                  <p className="bannerTextBig">{el.title}</p>
                  <p className="bannerTextSmall">{el.subtitle}</p>
                  <p className="pageNumber">{el.number}</p>
                </div>
              );
            })}
          </Slider>
        </div>
        <article className="ThemeSec">
          <p className="subTitle">추천 신규 테마</p>
          <p className="mainTitle">하비스트 프렌즈</p>
          <List productList={productListUpper} />
        </article>
        <a
          href="https://store.kakaofriends.com/kr/products/category/subject?categorySeq=103&subCategorySeq=164&sort=createDatetime,desc"
          className="moreButton"
        >
          더 보기
        </a>
        <article className="NewSec">
          <p className="subTitle">오늘 업데이트 했어요</p>
          <p className="mainTitle">새로 나온 친구들</p>
          <List productList={productList} />
        </article>
      </div>
    );
  }
}
export default withInfiniteScroll(Newitem, "product/new");
