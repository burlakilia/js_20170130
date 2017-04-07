import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.jsx';


export default class App extends React.Component {

    render() {

        return <p>
                <Timer startTime="0" />
                <Timer startTime="10" />
                <Timer startTime="100" />
            </p>;

    }

    static inject(node) {
        ReactDOM.render(<App startTime="0"/>, node);
    }

}
