import React from "react";
import CardItem from "./CardItem";
import "./HomeCard.scss";

class HomeCard extends React.Component {
  componentDidMount() {
    window.onload = () => {
      let images = document.querySelectorAll(".HomeCard");
      console.log(images.length);
      for (let i = 0; i < images.length; i++) {
        console.log(i, images[i].children[0].clientHeight);
        images[i].style.gridRowEnd = `span ${Math.floor(
          images[i].children[0].clientHeight / 10
        )}`;
      }
    };
  }
  render() {
    const { card } = this.props;

    console.log(card.product);

    return (
      <div className="HomeCard" key={card.id}>
        <div className="thumnailWrap">
          <img alt="홈 카드 메인 이미지" className="cardImage" src={card.mainimg} />
          <div className="detailInfo">
            <span className={card.tag}>{card.tag}</span>
            <h3>
              {card.title.split("\n").map((line) => {
                return (
                  <>
                    {line}
                    <br />
                  </>
                );
              })}
            </h3>
            <p>
              {card.subtext.split("\n").map((line) => {
                return (
                  <>
                    {line}
                    <br />
                  </>
                );
              })}
            </p>
          </div>
          {!!card.product.length && (
            <ul className="cardProduct">
              {card.product.map((item) => {
                return <CardItem key={item.id} item={item} />;
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default HomeCard;
