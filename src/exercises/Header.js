import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    constructor() {
        super();
        this.state = {
        name: "A"       
        };
    }

    render() {
        return (
            <div>
                <br />
                <h3>{this.state.name}</h3>
            <Link to="/">Homepage</Link>
            </div>
        );
    }
}

export default Header;