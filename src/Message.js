import { Component } from 'react';
import { SampleContext } from "./App";

class Message extends Component {
    static contextType;
    inputStyle = {
        fontStyle: "12pt",
        padding: "5px"
    }

    constructor(props) {
        super(props);
        this.contextType = SampleContext;
        this.doChange = this.doChange.bind(this);
    }

    doChange(e) {
        console.log(e);
        if (e.target.value.length > this.props.maxlength) {
            this.props.onCheck(e);
            e.target.value = e.target.value.substr(0, this.props.maxlength);
        }
    }

    render() {
        // return <input type="text" style={this.inputStyle} onChange={this.doChange} />
        return (
            <div>
                <p>{this.context.message}</p>
            </div>
        )
    }
}

export default Message
