import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: +props.startTime
        };

        this.timeoutID = null;
    }

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutID);
    }

    tick() {
        this.setState({
            time: this.state.time + 1
        });

        this.timeoutID = setTimeout(() => {
            this.tick();
        }, 1000);
    }

    render() {
        return <h1>Hello World { this.state.time }</h1>
    }


}
