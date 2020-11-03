import { Component } from "react";

class Item extends Component {
    li = {
        listStyleType: "square",
        fontSize: "16pt",
        color: "#06",
        margin: "0px",
        padding: "0px"
    };

    num = {
        fontWeight: "bold",
        color: "red"
    }

    render() {
        return (
            <li style={this.li}>
                <span style={this.num}>[{this.props.number}] </span>{this.props.value}
            </li>
        );
    }
}

export default Item
