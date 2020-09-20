import React from "react";

export const withInfiniteScroll = (InputComponent) => {
  return class OutputComponent extends InputComponent {
    state = {
      productList: [],
      items: 10,
      preItems: 0,
    };

    componentDidMount() {
      this.getData();
      window.addEventListener("scroll", this.infiniteScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.infiniteScroll);
    }

    getData = () => {
      const { preItems, items, productList } = this.state;
      fetch("/Data/mock.json")
        .then((res) => res.json())
        .then((res) => {
          const result = res.data.slice(preItems, items);
          this.setState({
            productList: [...productList, ...result],
          });
        });
    };

    infiniteScroll = () => {
      const { documentElement, body } = document;
      const { items } = this.state;

      const scrollHeight = Math.max(
        documentElement.scrollHeight,
        body.scrollHeight
      );
      const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
      const clientHeight = documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.setState({
          preItems: items,
          items: items + 10,
        });
        this.getData();
      }
    };

    render() {
      return <InputComponent productList={this.state.productList} />;
    }
  };
};
