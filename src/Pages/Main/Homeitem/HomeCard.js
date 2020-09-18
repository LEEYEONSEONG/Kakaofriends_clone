import React from "react";
import CardItem from "./CardItem";
import "./HomeCard.scss";

class HomeCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
    this.divElement = React.createRef();
  }

  componentDidMount() {
    const height = this.divElement.current.clientHeight;
    this.setState({ height });
  }

  render() {
    const { card } = this.props;
    const { height } = this.state;
    return (
      <div
        className="HomeCard"
        style={{
          gridRowEnd: `span ${Math.floor(height / 10)}`,
        }}
        ref={this.divElement}
      >
        <div className="thumnailWrap">
          <img
            alt="홈 카드 메인 이미지"
            className="cardImage"
            src={card.mainimg}
          />
          <div className="detailInfo">
            <span className={card.tag}>{card.tag}</span>
            <h3>
              {card.title.split("\n").map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>
            <p>
              {card.subtext.split("\n").map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          {!!card.product.length && (
            <ul className="cardProduct">
              {card.product.map((item) => {
                return <CardItem item={item} key={item.name} />;
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default HomeCard;
