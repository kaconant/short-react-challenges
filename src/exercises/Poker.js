import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Poker extends Component {

    constructor() {
        super();
        this.state = {
            pokerHand: [
                {
                suit: "Hearts",
                number: 4
                },
                {
                suit: "Diamonds",
                number: 5
                }
            ],
            name: "Poker"
        }
    }

    addRandomCard () {
        // next 3 lines copies the old pokerHand (array of objects)
        let newPokerHand = this.state.pokerHand.map((card)=>{
            return {...card}
        });
        
        var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        newPokerHand.push({
            // make sure that you don't do 0 * 13, as it wont give you anything
            number: Math.floor(Math.random()*13) + 1,
            suit: suits[Math.floor(Math.random()*4)]
        });

        this.setState({
            pokerHand: newPokerHand
        })
    };

    allJokers() {
        // next 3 lines copies the old pokerHand (array of objects)
        let newPokerHand = this.state.pokerHand.map((card)=>{
            return {
                number: "Joker",
                suit: "Joker"
            }
        });

        this.setState({
            pokerHand: newPokerHand
        })
    };

    render() {
        return (
        <div>
            <p>
                <h1>{ this.state.name }</h1>
                { this.state.pokerHand.map((card)=>{
                    return <h2>{ card.number } of { card.suit }</h2>
                })}
                <button onClick={ this.addRandomCard.bind(this) }>Add a random card</button>
                <button onClick={ this.allJokers.bind(this) }>Change all jokers></button>
            </p>
            <Link to="/">Homepage</Link>
        </div>
        );
    }
}

export default Poker;