import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AddForm from "./components/AddForm";
import FindForm from "./components/FindForm";
import DelForm from "./components/DelForm";
import Note from "./components/Note";
import PersistForm from "./components/PersistForm";


class App extends Component {
    td = {
        width: "250px"
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
                            <td style={this.td}><PersistForm /></td>
                        </tr>
                    </tbody>
                </table>
                <Note />
            </div>
        );
    }
}


export default connect()(App);



