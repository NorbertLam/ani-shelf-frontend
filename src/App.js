import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import CardContainer from './containers/CardContainer';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer'

class App extends Component {
  state = {
    user: {},
    season: 'SPRING'
  }

  render() {
    return (
    <div>
      <LoginContainer />
      <SignupContainer />
      <CardContainer />
    </div>)
  }
}

export default App;
