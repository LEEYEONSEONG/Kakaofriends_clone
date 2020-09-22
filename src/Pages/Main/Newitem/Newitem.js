import Slider from "react-slick";
import React from "react";
import List from "../../../Components/List/List";
import { SETTINGS } from "./NewitemSettings";
import BANNER from './NewitemBanner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Newitem.scss";


class Newitem extends React.Component {
  constructor() {
    super();

    this.state = {
      productListUpper: [],
      productList: [],
      items: 10,
      preItems: 0,
    };
  }

  componentDidMount() {
    fetch("/Data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        let result = res.data.slice(this.state.preItems, this.state.items);
        this.setState({
          productListUpper: res.data.slice(0, 8),
          productList: [...this.state.productList, ...result],
        });
      });
    window.addEventListener("scroll", this.infiniteScroll, true);
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 10,
      });
      this.componentDidMount();
    }
  };

  render() {
    const { productList, productListUpper } = this.state;
    return (
      <div className="Newitem">
        <div className="container">
          <Slider {...SETTINGS}>
            {BANNER.map(el => {
              return (
                <div key={el.id}>
                  <img alt={el.alt} src={el.image} />
                  <p className="bannerTextBig">{el.title}</p>
                  <p className="bannerTextSmall">{el.subtitle}</p>
                  <p className="pageNumber">{el.number}</p>
                </div>
              )
            })}
          </Slider>

        </div>
        <article className="ThemeSec">
          <p className="subTitle">추천 신규 테마</p>
          <p className="mainTitle">하비스트 프렌즈</p>
          <List productList={productListUpper} />
          <a href="https://store.kakaofriends.com/kr/products/category/subject?categorySeq=103&subCategorySeq=164&sort=createDatetime,desc"
            className="moreButton">
            더 보기
          </a>
        </article>
        <article className="NewSec">
          <p className="subTitle">오늘 업데이트 했어요</p>
          <p className="mainTitle">새로 나온 친구들</p>
          <List productList={productList} />
        </article>
      </div>
    );
  }
}
export default Newitem;