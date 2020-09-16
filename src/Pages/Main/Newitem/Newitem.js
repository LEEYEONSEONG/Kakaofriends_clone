import React from "react";
import List from "../../../Components/List/List";
import "./Newitem.scss";

class Newitem extends React.Component {
    constructor() {
        super();

        this.state = {
            productList: [],
        };
    }

    componentDidMount() {
        fetch("/Data/mock.json")
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    productList: res.data,
                });
            });
    }
    render() {
        return (
            <div className="Newitem">
                <article className="ThemeSec">
                    <p className="subTitle">추천 신규 테마</p>
                    <p className="mainTitle">하비스트 프렌즈</p>
                    <List productList={this.state.productList} />
                </article>
                <article className="NewSec">
                    <p className="subTitle">오늘 업데이트 했어요</p>
                    <p className="mainTitle">새로 나온 친구들</p>
                    <List productList={this.state.productList} />
                </article>
            </div>
        );
    }
}

export default Newitem;
