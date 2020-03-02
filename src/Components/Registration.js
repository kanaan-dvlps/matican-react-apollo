import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import Button from './HOCs/Button';

const Registration = props => {
  
  // ? Local state managment
  // TODO: Form States
  // ! -------------------------

  // ? Email input State
  const [email, setEmail] = useState('');
  
  // ? Username input State
  const [userName, setUserName] = useState('');
  
  // ? Password input State
  const [passWord, setPassWord] = useState('');
  
  // ? Confirm Password input State
  const [confirmPassWord, setConfirmPassWord] = useState('');
  
  // ! -------------------------
  

  const handleClick = eventObject => {
    eventObject.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="cardParentSignUp">
        <div className="cardDetailSignUp">
          <div className="cardHeader">
            <div className="userImage">
              <FontAwesomeIcon icon={faUser} className="userAvatar" />
            </div>
            <div className="userMessage">
              <h1 className="userLogo">Please SignUp</h1>
            </div>
          </div>
          <div className="cardContentSignUp">
            <Form onClick={handleClick} className="formParent">
              <FormGroup className="formGroup" row>
                <Col className="column" sm={2}>
                  <Input
                    value={email}
                    onChange={(eventObject) => setEmail(eventObject.target.value)}
                    type="email"
                    name="email"
                    className="inputs"
                    placeholder="your email goes here"
                  />
                </Col>
                <Col className="column" sm={2}>
                  <Input
                    value={userName}
                    onChange={(eventObject) => setUserName(eventObject.target.value)}
                    type="text"
                    name="username"
                    className="inputs"
                    placeholder="your username lays here"
                  />
                </Col>
                <Col className="column" sm={2}>
                  <Input
                    value={passWord}
                    onChange={(eventObject) => setPassWord(eventObject.target.value)}
                    type="password"
                    name="password"
                    className="inputs"
                    placeholder="choose a password please!"
                  />
                </Col>
                <Col className="column" sm={2}>
                  <Input
                    value={confirmPassWord}
                    onChange={(eventObject) => setConfirmPassWord(eventObject.target.value)}
                    type="password"
                    name="password"
                    className="inputs"
                    placeholder="also consfirm your password"
                  />
                </Col>
              </FormGroup>
              <Button
                class="HOCSubmitButtonSignUp"
                buttonMessage="Sign me up!"
              />
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Registration;
