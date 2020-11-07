import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AddForm from "./components/AddForm";
import FindForm from "./components/FindForm";
import DelForm from "./components/DelForm";
import Note from "./components/Note";

function mappingState(state) {
    return state;
}

class App extends Component {
    td = {
        width: "250px"
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Note</h1>
                <AddForm />
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td style={this.td}><FindForm /></td>
                            <td style={this.td}><DelForm /></td>
                        </tr>
                    </tbody>
                </table>
                <Note />
            </div>
        );
    }
}


export default connect()(App);


class Message extends Component {
    style = {
        fontSize: "20pt",
        padding: "20px 5px"
    };

    render() {
        return (
            <p style={this.style}>
                {this.props.message}: {this.props.counter}
            </p>
        )
    }
}
// ストアのコネクト
Message = connect(mappingState) (Message);

class Button extends Component {
    style = {
        fontSize: "16pt",
        padding: "5px 10px"
    }

    constructor(props) {
        super(props);
        this.doAction = this.doAction.bind(this);
    }

    doAction(e) {
        if (e.shiftKey) {
            this.props.dispatch({ type: 'DECREMENT' });
        } else {
            this.props.dispatch({ type: 'INCREMENT' });
        }
    }

    render() {
        return (
            <button style={this.style} onClick={this.doAction}>
                click
            </button>
        );
    }
}

Button = connect() (Button);

