import React from "react";
import Card from "./Card";
import CardDiscount from "./CardDiscount";
import "./List.scss";

class List extends React.Component {
    constructor() {
        super();

        this.state = {
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
                    productList: res.data,
                });
            });
    }

    render() {
        const { productList } = this.state;
        return (
            <div className="List">
                <ul className="allItemList">
                    {productList.map((product) => {
                        return product.dcprice === "" ? (
                            <Card
                                key={product.id}
                                id={product.id}
                                img={product.img}
                                name={product.name}
                                price={product.price}
                                dcprice={product.dcprice}
                            />
                        ) : (
                            <CardDiscount
                                key={product.id}
                                id={product.id}
                                img={product.img}
                                name={product.name}
                                price={product.price}
                                dcprice={product.dcprice}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default List;
