import React from "react";

export const withInfiniteScroll = (InputComponent, path) => {
  return class OutputComponent extends InputComponent {
    state = {
      productList: [],
      items: 10,
      preItems: 0,
      totalCount: 0,
    };

    componentDidMount() {
      this.getData();
      window.addEventListener("scroll", this.infiniteScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.infiniteScroll);
    }

    // getData = () => {
    //   const { preItems, items, productList } = this.state;
    //   fetch("Data/mock.json", {
    //     method: "GET",
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       // console.log(res);
    //       const result = res.data.slice(preItems, items);
    //       this.setState({
    //         productList: [...productList, ...result],
    //       });
    //     });
    // };

    getData = () => {
      const { preItems, items, productList } = this.state;
      fetch("http://10.58.6.38:8001/" + path, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          const result = res.data_list.slice(preItems, items);
          const totalCount = res.data_list[0].total_count;
          this.setState({
            productList: [...productList, ...result],
            totalCount: totalCount,
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
      return (
        <InputComponent
          productList={this.state.productList}
          totalCount={this.state.totalCount}
        />
      );
    }
  };
};
