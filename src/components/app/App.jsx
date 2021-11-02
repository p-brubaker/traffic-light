import React, { Component } from 'react';
import { TrafficLight } from '../TrafficLight.jsx';

export default class App extends Component {
    state = { red: true, yellow: false, green: false };

    componentDidMount() {
        this.timerID = setInterval(
            () =>
                this.setState({
                    red: this.state.yellow,
                    green: this.state.red,
                    yellow: this.state.green,
                }),
            4000
        );
    }

    render() {
        const { red, yellow, green } = this.state;
        return <TrafficLight red={red} yellow={yellow} green={green} />;
    }
}
