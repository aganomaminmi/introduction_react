import { Component } from "react";
import Item from "./Item";

class List extends Component {
    number = 1;

    title = {
        fontSize: "20pt",
        fontWeight: "bold",
        color: "blue"
    };

    constructor(props) {
        super(props);
        console.log(props.children);
        this.child = props.children;
    }

    render() {
        let data = this.props.data;

        return (
            <div>
                <p style={this.title}>{this.props.title}</p>
                <ul>
                    {data.map( (item) => {
                        console.log(this.number);
                        return <Item number={this.number} value={item} key={this.number++} />
                    })}
                </ul>
                {this.child}
            </div>
        );
    }
}

export default List;
