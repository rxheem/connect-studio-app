import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

// Custom Bulma COmponents
import Form from '../react-bulma/Form';
import FormField from '../react-bulma/FormField';
import Image from '../react-bulma/Image';
import Label from '../react-bulma/Label';
import Input from '../react-bulma/Input';

class AccessForm extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col sm={6} md={3} lg={3}>
            First
          </Col>
          <Col sm={6} md={9} lg={9}>
            <Form>

              <FormField>

              </FormField>
            </Form>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default AccessForm;
