import React, { Component } from 'react';

class Item extends Component {
    th = {
        fontSize: "14pt",
        backgroundColor: "blue",
        color: "white",
        padding: "5px 10px",
        width: "50px"
    }

    td = {
        fontSize: "14pt",
        backgroundColor: "white",
        color: "darkblue",
        padding: "5px 10px",
        border: "1px slid lightblue",
        minWidth: "300px"
    }

    date = {
        fontSize: "14pt",
        backgroundColor: "white",
        color: "darkblue",
        padding: "5px 10px",
        border: "1px slid lightblue",
        minWidth: "80px"
    }

    render() {
        let at = this.props.value.created;
        let time = at.getHours() + ':' + at.getMinutes() + ':' + at.getSeconds();
        return (
            <tr>
                <th style={this.th}>No, {this.props.index}</th>
                <td style={this.td}>{this.props.value.message}</td>
                <td style={this.date}>{time}</td>
            </tr>
        );
    }
}

export default Item
