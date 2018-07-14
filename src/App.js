import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import RenderingState from './RenderingState.jsx';
import Counter from './Counter.jsx';
import Poker from './Poker.jsx';
import Header from './Header.jsx';
import CallBackButton from './CallBackButton.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className='navbar'>
        <Link to='/rendering'>Rendering</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/poker'>Poker</Link>
        <Link to='/header'>Header</Link>
        <Link to='/callbackbutton'>Call Back Button</Link>
        </div>
        <Header h1Text="Header 1" />
        <Header h1Text="Header 2" />
        <Header h1Text="Header 3" />
        <Route path='/rendering' component={RenderingState} />
        <Route path='/counter' component={Counter} />
        <Route path='/poker' component={Poker} />
        <Route path='/header' component={Header} />
        <Route path='/callbackbutton' component={CallBackButton} />
    </div>
    );
  }
}

export default App;
