import { Component } from 'react';
import {addNote} from "../stores/NoteStore";

class AddForm extends Component{
    input = {
        fontSize: "16pt",
        color: "#006",
        padding: "1px",
        margin: "5px 0px"
    }
    btn = {
        fontSize: "16pt",
        color: "#006",
        padding: "2px 10px",
    }

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    doAction(e) {
        e.preventDefault();
        let action = addNote(this.state.message);
        this.props.dispatch(action);
        this.setState({
            message: ''
        })
    }

    render() {
        return;
    }
}

export default AddForm;
