import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Newitem.scss";
import { SETTINGS } from "./NewitemSettings"; 
import BANNER from './NewitemBanner';

class Newitem extends React.Component {
  state = { 
    slideIndex : 0
  };

  render() {
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
        <a href="https://store.kakaofriends.com/kr/products/category/subject?categorySeq=103&subCategorySeq=164&sort=createDatetime,desc" 
        className="moreButton">
          더 보기
        </a>
        </div>
    </div>
          );
        }
      }
export default Newitem;