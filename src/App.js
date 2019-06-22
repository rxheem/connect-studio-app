import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// CSS
import './App.css'

// Components import
import SignIn from './components/SignIn'


class App extends Component {



  render() {
    return (
      <div className='App'>
        <SignIn />
      </div>
    );
  }
}

export default withRouter(App);
