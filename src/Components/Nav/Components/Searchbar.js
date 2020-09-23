import React from "react";
import "./Searchbar.scss";
import { withRouter } from "react-router";

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      matchArr: [],
      matchShow: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("/Data/mock.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const result = res.data;
        this.setState({
          products: result,
        });
      });
  }
  // componentDidMount() {
  //   fetch("http://10.58.2.50:8001/ products/4", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const result = res.data_list;
  //       this.setState(
  //         {
  //          products: [...result],
  //         },
  //         () => console.log(this.stat  products)
  //       );
  //     });
  // }

  // searchItems = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.searchValue);
  //   this.props.history.push("/search", this.props.history.location.state);
  //   console.log(this.props.history);
  //   console.log(this.props.history.location.state);
  // };

  searchItems = (e) => {
    e.preventDefault();
    console.log("this state searchValue: ", this.state.searchValue);
    console.log("this state this.props.history: ", this.props.history);
    console.log(
      "this state this.props.history.location.state: ",
      this.props.history.location.state
    );
    this.props.history.push("/search", this.state.searchValue);
  };

  checkMatch = (e) => {
    const searchValue = e.target.value;
    const { products } = this.state;
    this.setState(
      {
        searchValue: searchValue,
        matchArr: searchValue
          ? products.filter((el) => el.name.includes(searchValue))
          : [],
      },
      () => console.log(this.state.searchValue)
    );
  };

  render() {
    const { matchArr, searchValue } = this.state;
    return (
      <form className="Searchbar" onSubmit={this.searchItems}>
        <div className="box">
          <div className="btn">
            <span className="icon"></span>
          </div>
          <input
            onChange={this.checkMatch}
            className="SearchbarInput"
            type="search"
            placeholder="무엇을 찾으세요?"
          ></input>
        </div>
        <ul className={`searchResultWrap ${matchArr.length ? "isShown" : ""}`}>
          {matchArr.slice(0, 8).map((product) => (
            <li
              dangerouslySetInnerHTML={{
                __html: product.name.replace(
                  `${searchValue}`,
                  `<span>${searchValue}</span>`
                ),
              }}
            />
          ))}
        </ul>
      </form>
    );
  }
}

export default withRouter(Searchbar);
