import React from "react";
import Nav from "./../../Components/Nav/Nav";
import Sorting from "../../Components/Sorting/Sorting";
import List from "../../Components/List/List";
import { withInfiniteScroll } from "../Main/hoc";
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

  componentDidMount() {
    // console.log(this.props.history.location.state);
    const keyword = this.props.history.location.state;
    this.setState(
      {
        searchValue: keyword,
      },
      () => console.log(this.state.searchValue)
    );
    // fetch(`http://주소/search=${키워드}`);
  }

  render() {
    const { productList, totalCount } = this.props;
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
          {/* <Sorting /> */}
        </div>
        {/* <List productList={productList} /> */}
      </div>
    );
  }
}

export default SearchResult;
// export default withInfiniteScroll(SearchResult);

// withInfiniteScroll 연결, query String 써서 검색 결과 List 로 추출
