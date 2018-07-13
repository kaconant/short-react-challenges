import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import RenderingState from './RenderingState.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className='navbar'>
        <Link to='/rendering'>Rendering</Link>
        </div>
        <Route path='/rendering' component={RenderingState} />
    </div>
    );
  }
}

export default App;
