import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <h1>{this.props.h1Text}</h1>
        );
    }
}

export default Header;