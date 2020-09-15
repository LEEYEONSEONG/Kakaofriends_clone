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
        fetch("http://localhost:3000/Data/mock.json", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    cardList: res.data.slice(0, 3),
                    productList: res.data.slice(3),
                });
            });
    }
    render() {
        console.log(this.state);
        return (
            <div className="Saleitem">
                <article className="SaleitemContainer">
                    <Salecard productList={this.state.cardList} />
                    <p className="subTitle">세일 상품을 모두 한곳에</p>
                    <p className="mainTitle">지금은 세일 중</p>
                    <List productList={this.state.productList} />
                </article>
            </div>
        );
    }
}

export default Saleitem;
