import React, { Component } from 'react';
import './Poker.css';

class Poker extends Component {

    constructor() {
        super();
        this.state = {
            pokerHand: [
                {
                suit: "clubs",
                value: 7
                },
                {
                suit: "hearts",
                value: 7
                }
            ]
        }
    }

    render() {

    }
}

export default Poker;