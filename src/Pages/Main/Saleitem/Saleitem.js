import React from "react";
import Salecard from "./Salecard";
import List from "../../../Components/List/List";
import "./Saleitem.scss";

class Saleitem extends React.Component {
    constructor() {
        super();

        this.state = {
            cardList: [],
            productList: [],
        };
    }

    componentDidMount() {
        fetch("/Data/mock.json")
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    cardList: res.data.slice(0, 3),
                    productList: res.data.slice(3),
                });
            });
    }
    render() {
        return (
            <article className="Saleitem">
                <Salecard productList={this.state.cardList} />
                <p className="subTitle">세일 상품을 모두 한곳에</p>
                <p className="mainTitle">지금은 세일 중</p>
                <List productList={this.state.productList} />
            </article>
        );
    }
}

export default Saleitem;
