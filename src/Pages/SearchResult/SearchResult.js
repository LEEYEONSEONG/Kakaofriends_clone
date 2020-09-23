import React from "react";
import Nav from "./../../Components/Nav/Nav";
import Footer from "./../../Components/Footer/Footer";
import Sorting from "../../Components/Sorting/Sorting";
import List from "../../Components/List/List";
import URL from "../../url";
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
    let keyword = this.props.history.location.state;
    this.setState({
      searchValue: keyword,
    });
    fetch(URL + `products?name=${keyword}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.data_list.length) {
          this.setState({
            productList: res.data_list,
            totalCount: res.data_list[0].total_count,
          });
        } else {
          this.setState({
            productList: [],
            totalCount: "",
          });
        }
      });
  };

  componentDidMount() {
    this.showResult();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.history.location.state !== this.state.searchValue) {
      this.showResult();
    }
  }

  render() {
    console.log(this.props.history.location.state);
    console.log(this.state.productList);
    const { productList, totalCount } = this.state;
    return (
      <>
        <div className="SearchResult">
          <Nav />
          <div className="resultKeywords">
            <h1
              dangerouslySetInnerHTML={{
                __html: `<span>‘${this.props.history.location.state}’</span> 검색결과`,
              }}
            />
          </div>
          {this.state.productList.length ? (
            <>
              <div className="topInfo">
                <div className="totalItems">
                  <p className="totalNum">
                    총 <span className="pointSpan">{totalCount}</span> 개의
                    상품이 조회되었습니다.
                  </p>
                </div>
                <Sorting />
              </div>
              <List productList={productList} />
            </>
          ) : (
            <div className="notFound">
              <img
                className="ryanConfused"
                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/img_empty_ryan.png"
              />
              <h3>검색결과가 없습니다</h3>
              <p>
                다른 검색어를 입력하시거나,
                <br /> 철자 및 띄어쓰기를 확인해주세요.
              </p>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default SearchResult;
