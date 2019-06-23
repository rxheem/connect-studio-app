import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

class LogonPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      churchCode: ''
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <Row>
            {/* This column will be hidden if displayed on a mobile device */}
            <Col sm={12} md={6} lg={6} className='is-hidden-mobile'>
              <span />
              First Col
            </Col>
            {/* End first column */}

            {/* This column will always be displayed */}
            <Col sm={12} md={6} lg={6}>
              <form className='form'>
                Second Col
              </form>
            </Col>
            {/* End second column */}
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(LogonPage);
