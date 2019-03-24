import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer'
import Home from './containers/Home'
import Nav from './containers/NavBar'


class App extends Component {
  state = {
    user: {},
    season: 'SPRING'
  }

  render() {

    return (
      <div className="main-container">
        <Nav />
        <Home />
      </div>
    )

  }
}

export default App;