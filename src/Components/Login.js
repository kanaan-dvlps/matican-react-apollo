import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import Button from './HOCs/Button';

const Login = props => {

  // ? Local state managment
  // TODO: Form States
  // ! -------------------------

  // ? Username input State
  const [userName, setEmail] = useState('');
  
  // ? Password input State
  const [passWord, setPassWord] = useState('');

  // ! -------------------------

  const handleClick = eventObject => {
    eventObject.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="cardParent">
        <div className="cardDetail">
          <div className="cardHeader">
            <div className="userImage">
              <FontAwesomeIcon icon={faUser} className="userAvatar" />
            </div>
            <div className="userMessage">
              <h1 className="userLogo">Please Login</h1>
            </div>
          </div>
          <div className="cardContent">
            <Form onClick={handleClick} className="formParent">
              <FormGroup className="formGroup" row>
                <Col className="column" sm={2}>
                  <Input
                    value={userName}
                    onChange={(eventObject) => setEmail(eventObject.target.value)}
                    type="email"
                    name="email"
                    className="inputs"
                    placeholder="username please!"
                  />
                </Col>
                <Col className="column" sm={2}>
                  <Input
                    value={passWord}
                    onChange={(eventObject) => setPassWord(eventObject.target.value)}
                    type="password"
                    name="password"
                    className="inputs"
                    placeholder="and password is also needed"
                  />
                </Col>
              </FormGroup>
              <Button class="HOCSubmitButton" buttonMessage="Login" />
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
