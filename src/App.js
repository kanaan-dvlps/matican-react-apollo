import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Button from './Components/HOCs/Button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="messageWrapper">
          <h1 className="indexMessage">Welcome To This Test Web App</h1>
          <div className="buttonWrapper">
            <Link to="/login">
              <Button class="HOCButton" buttonMessage="Login" />
            </Link>
            <Link to="/signup">
              <Button class="HOCButton" buttonMessage="Sign UP" />
            </Link>
            <Link to="/apolloList">
              <Button class="HOCButton" buttonMessage="Users List" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
