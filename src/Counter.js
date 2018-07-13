import React, { Component } from 'react';
import './Counter.css';

class Header extends Component {


    render() {
        return (
        <div>
            <h1>
                You have {this.state.cats} cats and {this.state.dogs} dogs, therefore you are a {this.state.cats > this.state.dogs ? 'cat' : 'dog'} person!
            </h1>
            <Link to="/">Homepage</Link>
        </div>
        )}
};

export default Header;