import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

// CSS
import './App.css';

// Components import
import HomePage from './components/HomePage';
import LogonPage from './components/logon/LogonPage';

class App extends Component {
  render() {
    return (
      <div id='App' className='App'>
        {/* Switch */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/logon/' component={LogonPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
