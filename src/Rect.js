import React, { Component } from 'react'

class Rect extends Component {
    style = {};

    constructor(props) {
        super();
        this.style = {
            backgroundColor: props.c,
            position: "absolute",
            left: props.x + "px",
            top: props.y + "px",
            width: props.w + "px",
            height: props.h + "px",
            borderRadius: props.r + "px"
        }
    }

    render() {
        return <div style={this.style}></div>;
    }
}

export default Rect
