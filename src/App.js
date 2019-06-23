import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

// CSS
import './App.css';

// Components import
import HomePage from './components/HomePage';
import LogonPage from './components/logon/LogonPage';

// Views import
import OSAndSocialIcons from './views/OSAndSocialIcons';
import OuterNavigation from './views/OuterNavigation';

class App extends Component {
  render() {
    return (
      <div id='App' className='App'>
        <Route path='/' component={OSAndSocialIcons} />
        <Route path='/' component={OuterNavigation} />

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
