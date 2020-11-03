import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Rect from './Rect';
import List from "./List";
// import Title from './Title';
// import Message from "./Message";

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
//     return (
//         <div>
//             <h1>React</h1>
//             <p>This is sample component.</p>
//             <p>これはサンプルのコンポーネントです。</p>
//         </div>
//     )
// }

let data = {
    title: 'Title',
    message: 'This is sample message.'
};

export const SampleContext = React.createContext(data);

class App extends Component {
    newdata = {
        title: '新しいタイトル',
        message: 'これは新しいメッセージです。'
    };
    // input = '';
    // data = [
    //     "This is list sample.",
    //     "これはリストのサンプルです。",
    //     "配列をリストに変換します。"
    // ];
    //
    // msgStyle = {
    //     fontSize: "24pt",
    //     fontWeight: "bold",
    //     color: "#900",
    //     borderBottom: "2px solid #900",
    //     padding: "5px",
    //     // backgroundColor: "darkblue"
    //     margin: "20px 0",
    // };
    //
    // btnStyle = {
    //     fontSize: "20pt",
    //     padding: "0 10px"
    // };
    //
    // area = {
    //     width: "500px",
    //     height: "500px",
    //     border: "1px solid blue"
    // };

    constructor(props) {
        super(props);
        // this.state = {
        //     message: 'type your name:'
        // };
        // this.doCheck = this.doCheck.bind(this);
        // this.state = {
        //     counter: 0,
        //     msg: 'count start!',
        //     flg: true,
        //     list: this.data
        // };
        // this.doAction = this.doAction.bind(this);
    }

    // doCheck(event) {
    //     alert(event.target.value +  "は長すぎます(最大10文字)");
    // }
    //
    // doAction(e) {
    //     let x = e.pageX;
    //     let y = e.pageY;
    //     this.data.push({
    //         x: x,
    //         y: y,
    //     });
    //     let listData = this.state.list;
    //     console.log(listData);
    //     listData.push({x:x, y:y});
    //     this.setState( (state) => ({
    //         flg: !state.flg,
    //         list: listData
    //     }));
    // }
    //
    // drow(d) {
    //     let s = {
    //         position: "absolute",
    //         left: (d.x - 25) + "px",
    //         top: (d.y - 25) + "px",
    //         width: "50px",
    //         height: "50px",
    //         backgroundColor: "#66f3"
    //     }
    //     return <div style={s}></div>
    // }

    render() {
        return (
            <div>
                <h1>React</h1>
                {/*<h2 style={this.msgStyle}>{this.state.message}</h2>*/}
                <Title />
                <Message maxlength="10" onCheck={this.doCheck} />
                <SampleContext.Provider value={this.newdata}>
                    <Title />
                    <Message />
                </SampleContext.Provider>
                <Title />
                <Message />
                {/*<List title="サンプルリスト" data={this.data}><p>これは文章です。</p></List>*/}
                {/*<div style={this.area} onClick={this.doAction}>*/}
                    {/*{this.state.list.map( (value) => this.drow(value))}*/}
                {/*</div>*/}
                {/*{*/}
                    {/*this.state.flg ?*/}
                        {/*<p style={this.msgStyle}>count: {this.state.msg}</p> :*/}
                        {/*<p style={this.msgStyle}>{this.state.msg}です。</p>*/}
                {/*}*/}
                {/*<p style={ this.msgStyle }>{ this.state.msg }</p>*/}
                {/*<button style={this.btnStyle} onClick={this.doAction}>Click!</button>*/}
                {/*<Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50" />*/}
                {/*<Rect x="150" y="100" w="150" h="150" c="#f6f9" r="75" />*/}
                {/*<Rect x="100" y="150" w="150" h="150" c="#6669" r="25" />*/}
            </div>
        )
    }

}

class Message extends Component {
    static contextType = SampleContext;
    inputStyle = {
        fontStyle: "12pt",
        padding: "5px"
    }

    constructor(props) {
        super(props);
        // this.contextType = SampleContext;
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

class Title extends Component {
    static contextType = SampleContext;

    constructor(props) {
        super(props);
        // this.contextType = SampleContext;
    }

    render() {
        return (
            <div>
                <h2>{this.context.title}</h2>
            </div>
        );
    }
}

export default App;
