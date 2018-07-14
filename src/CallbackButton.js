import React, { Component } from 'react';
import './CallbackButton.css';

class CallbackButton extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.buttonCallback}>{this.props.buttonText}</button>
        );
    }
}

export default CallbackButton;
