import React, { Component } from 'react';

export class TrafficLight extends Component {
    render() {
        const { green, yellow, red } = this.props;

        return (
            <div className="traffic-light-box">
                <div
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: green ? 'green' : 'darkgrey',
                    }}
                ></div>
                <div
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: yellow ? 'yellow' : 'darkgrey',
                    }}
                ></div>
                <div
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: red ? 'red' : 'darkgrey',
                    }}
                ></div>
            </div>
        );
    }
}
