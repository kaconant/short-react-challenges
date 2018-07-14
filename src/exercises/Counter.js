import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Counter extends Component {

    constructor() {
        super();
        this.state = { 
            name: "Counter",
            value: 0 
        };
    }

    increment() {
        this.setState({ 
            value: this.state.value + 1 
        });
    }

    decrement() {
        this.setState({ 
            value: this.state.value - 1 
        });
    }

    render() {
        return (
        <div>
            <h1>{ this.state.name }</h1>
            <h2>{ this.state.value }</h2>
            <p>
                <button onClick={ this.increment.bind(this) }>+</button>
                <button onClick={ this.decrement.bind(this) }>-</button>
                <button onClick={ () => {this.setState({value: this.state.value + 2})}}>++</button>
            </p>
            <Link to="/">Homepage</Link>
        </div>
        )
    }  
};

export default Counter;