import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CallbackButton extends Component {

    buttonCallback() {
        console.log('one');
    }

    render() {
        return (
            <div>
                <button onClick={ this.props.buttonCallback }>CallBack Button</button>
                <Link to="/">Homepage</Link>
            </div>
        );
    }
}

export default CallbackButton;
