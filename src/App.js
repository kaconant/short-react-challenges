import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import RenderingState from './exercises/RenderingState.js';
import Counter from './exercises/Counter.js';
import Poker from './exercises/Poker.js';
import Header from './exercises/Header.js';
import CallbackButton from './exercises/CallbackButton.js';

class App extends Component {
  render() {
    return (
      <div className="navBar">
        <h1>5 Short React Exercises</h1>
          <Link to='/rendering'>Rendering</Link>
          <Link to='/counter'>Counter</Link>
          <Link to='/poker'>Poker</Link>
          <Link to='/header'>Header</Link>
          <Link to='/callbackbutton'>Call Back Button</Link>
        <Switch>
          <Route path='/rendering' component={RenderingState} />
          <Route path='/counter' component={Counter} />
          <Route path='/poker' component={Poker} />
          <Route path='/header' component={Header} />
          <Route path='/callbackbutton' component={CallbackButton} />
        </Switch>
      </div>
    );
  }
}

export default App;