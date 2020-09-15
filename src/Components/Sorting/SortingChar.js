import React from "react";

class SortingChar extends React.Component {
    constructor() {
        super();
        this.state = {
            bool: false,
        };
    }
    render() {
        const { id, name, nameKor, imgOn, img } = this.props;
        return (
            <li
                key={id}
                className="selectModalItem"
                onMouseOver={() => this.setState({ bool: true })}
                onMouseOut={() => this.setState({ bool: false })}
            >
                <div className="selectCharWrap">
                    <div>
                        <span className="charImgWrap">
                            {this.state.bool ? (
                                <img alt={name} src={imgOn} />
                            ) : (
                                <img alt={name} src={img} />
                            )}
                        </span>
                        <span>
                            <img
                                alt="선택된 옵션"
                                className="selectedCharIcon notSelected"
                                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/category_icn-done.png"
                            />
                        </span>
                    </div>
                    <span>{nameKor}</span>
                </div>
            </li>
        );
    }
}

export default SortingChar;
