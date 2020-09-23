import React from "react";
import Nav from "./../../Components/Nav/Nav";
import Sorting from "../../Components/Sorting/Sorting";
import List from "../../Components/List/List";
import URL from "../url";
import "./SearchResult.scss";

class SearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      productList: [],
      totalCount: "",
    };
  }

  showResult = () => {
    const keyword = this.props.history.location.state;
    this.setState(
      {
        searchValue: keyword,
      },
      () => console.log(this.state.searchValue)
    );
    fetch(URL + `products?name=${keyword}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productList: res.data_list,
          totalCount: res.data_list[0].total_count,
        });
      });
  };
  componentDidMount() {
    this.showResult();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.showResult();
    }
  }

  render() {
    const { productList, totalCount } = this.state;
    return (
      <div className="SearchResult">
        <Nav />
        <div className="resultKeywords">
          <h1
            dangerouslySetInnerHTML={{
              __html: `<span>‘${this.props.history.location.state}’</span> 검색결과`,
            }}
          />
        </div>
        <div className="topInfo">
          <div className="totalItems">
            <p className="totalNum">
              총 <span className="pointSpan">{totalCount}</span> 개의 상품이
              조회되었습니다.
            </p>
          </div>
          <Sorting />
        </div>
        <List productList={productList} />
      </div>
    );
  }
}

export default SearchResult;
// export default withInfiniteScroll(SearchResult, `/search/${this.state.keyword}`);

// withInfiniteScroll 연결, query String 써서 검색 결과 List 로 추출
