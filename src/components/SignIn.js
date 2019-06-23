import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

class SignIn extends Component {
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
                <div className='field'>
                  <label className='label'>Username</label>
                  <div class='control has-icons-left'>
                    <input
                      autoFocus
                      name='username'
                      id='username'
                      className='input is-success'
                      type='text'
                      placeholder='Enter your username'
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-user' />
                    </span>
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Password</label>
                  <div class='control has-icons-left'>
                    <input
                      name='password'
                      id='password'
                      className='input is-success'
                      type='password'
                      placeholder='Enter your password'
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-lock' />
                    </span>
                  </div>
                </div>
              </form>
            </Col>
            {/* End second column */}
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(SignIn);
