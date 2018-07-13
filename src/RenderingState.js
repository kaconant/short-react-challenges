import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RenderingState.css';

class RenderingState extends Component {
    
    constructor() {
        super();
        
        this.state = {
        cats: 5,
        dogs: 2       
        };
    }

    render() {
        return (
        <div>
            <h1>
                You have {this.state.cats} cats and {this.state.dogs} dogs, therefore you are a {this.state.cats > this.state.dogs ? 'cat' : 'dog'} person!
            </h1>
            <Link to="/">Homepage</Link>
        </div>
        )}
}

export default RenderingState;