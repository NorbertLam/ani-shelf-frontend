import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Fall from './components/Fall'
import Spring from './components/Spring'
import Winter from './components/Winter'
import Summer from './components/Summer'
import SignupContainer from './containers/SignupContainer'
import LoginContainer from './containers/LoginContainer'
import Nav from './containers/NavBar'

class App extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    const token = localStorage.token;

    if (token) {
      fetch('http://localhost:3000/current_user', {
        method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json",
            Authorization: `${token}`
          }
      })
      .then(resp => resp.json())
      .then(user => {
        this.setState({ user }, () => {
          this.props.history.push("/fall");
        })
      })
    } else {
      this.props.history.push("/login")
    }
  }

  setLogin = (userObj, token) => {
    const user = {
      user: userObj
    }

    this.setState({user}, () => {
      localStorage.setItem("token", token);
      this.props.history.push("/spring");
    });
  }

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route path="/winter" component={Winter}/>
          <Route path="/spring" component={Spring}/>
          <Route path="/summer" component={Summer}/>
          <Route path="/fall" component={Fall}/>
          <Route path="/signup" component={SignupContainer}/>
          <Route path="/login" render={() => <LoginContainer setLogin={this.setLogin} /> }/>
          <Route exact path="/" component={Home}/>
        </Switch>
    </div>
    )
  }
}

export default withRouter(App);
