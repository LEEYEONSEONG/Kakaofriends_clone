import React from "react";
import List from "../../../Components/List/List";
import Sorting from "../../../Components/Sorting/Sorting";
import "./Allitem.scss";

class Allitem extends React.Component {
    render() {
        return (
            <div className="Allitem">
                <article className="AllitemContainer">
                    <div className="topInfo">
                        <div className="totalItems">
                            <p className="totalNum">
                                총 <span className="pointSpan">1541</span> 개의
                                상품이 조회되었습니다.
                            </p>
                        </div>
                        <Sorting />
                    </div>
                    <List />
                </article>
            </div>
        );
    }
}

export default Allitem;
