import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return <div id='Home'>Home Page</div>;
  }
}

export default withRouter(HomePage);
