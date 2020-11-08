import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
// import Title from './Title';
// import Message from "./Message";


let data = {
    title: 'Title',
    message: 'This is sample message.'
};

export const SampleContext = React.createContext(data);

class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>Redux</h1>
                <Message />
                <Button />
            </div>
        )
    }

}

class Message extends Component {
     style = {
        fontSize: "20pt",
        padding: "20px 5px"
    }

    render() {
        return (
            <p style={this.style}>
                {this.props.message}: {this.props.counter}
            </p>
        )
    }
}

Message = connect( state => state )(Message);

class Button extends Component {
   style = {
       fontSize: '16pt',
       padding: '5px 10px'
   }

   constructor(props) {
       super(props);
       this.doAction = this.doAction.bind(this);
   }

   doAction(e) {
       if (e.shiftKey) {
           this.props.dispatch({ type: 'DECREMENT' });
       } else if (e.metaKey) {
           this.props.dispatch({ type: 'RESET' });
       } else {
           this.props.dispatch({ type: 'INCREMENT' });
       }
   }

   render() {
       return (
           <button style={this.style} onClick={this.doAction}>
               Click
           </button>
       );
   }
}

Button = connect( state => state )(Button);


export default App;
