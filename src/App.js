import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// CSS
import './App.css';

// Components import
import Home from './components/Home';
import Logon from './components/Logon';

class App extends Component {
  render() {
    return (
      <div id='App' className='App'>
        {/* Switch */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/logon/' component={Logon} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
