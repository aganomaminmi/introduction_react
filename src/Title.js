import { Component } from 'react';
import { SampleContext } from './App'

class Title extends Component {
    static contextType;

    constructor(props) {
        super(props);
        this.contextType = SampleContext;
    }

    render() {
        return (
            <div>
                <h2>{this.context.title}</h2>
            </div>
        );
    }
}

export default Title;
