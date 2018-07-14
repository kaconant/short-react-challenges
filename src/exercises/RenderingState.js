import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RenderingState extends Component {
    
    constructor() {
        super();
        this.state = {
        cats: 5,
        dogs: 2,
        name: "Rendering State"       
        };
    }

    render() {
        return (
        <div>
            <h1>{ this.state.name }</h1>
            <h2>
                You have { this.state.cats } cats and { this.state.dogs } dogs, therefore you are a { this.state.cats > this.state.dogs ? 'cat' : 'dog' } person!
            </h2>
            <Link to="/">Homepage</Link>
        </div>
        )}
}

export default RenderingState;