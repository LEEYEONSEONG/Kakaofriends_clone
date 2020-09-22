import React from "react";
import "./Searchbar.scss";

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      allProduct: [],
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
        this.setState(
          {
            allProduct: [...result],
          });
      });
  }
  // componentDidMount() {
  //   fetch("http://10.58.6.38:8001/product/16", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const result = res.data_list;
  //       this.setState(
  //         {
  //           allProduct: [...result],
  //         },
  //         () => console.log(this.state.allProduct)
  //       );
  //     });
  // }

  searchItems = (e) => {
    e.preventDefault();
    const keyword = e.target.value;
    console.log(keyword);
  };

  checkMatch = (e) => {
    const searchValue = e.target.value;
    const { allProduct } = this.state;
    this.setState(
      {
        searchValue: searchValue,
        matchArr: searchValue
          ? allProduct.filter((el) => el.name.includes(searchValue))
          : [],
      });
  };

  render() {
    const { matchArr } = this.state;
    return (
      <form className="Searchbar">
        <div className="box">
          <div className="btn">
            <span className="icon"></span>
          </div>
          <input
            onChange={this.checkMatch}
            onSubmit={() => this.searchItems}
            className="SearchbarInput"
            type="search"
            placeholder="무엇을 찾으세요?"
          ></input>
        </div>
        <ul className={`searchResultWrap ${matchArr.length ? "isShown" : ""}`}>
          {this.state.matchArr.slice(0, 8).map((el) => (
            <li
              dangerouslySetInnerHTML={{
                __html: el.name.replace(
                  `${this.state.searchValue}`,
                  `<span>${this.state.searchValue}</span>`
                ),
              }}
            />
          ))}
        </ul>
      </form>
    );
  }
}

export default Searchbar;
