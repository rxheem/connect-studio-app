import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Styling for the App component */}
        <style jsx>{``}</style>
        <Switch />
      </div>
    );
  }
}

export default withRouter(App);
