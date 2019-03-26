import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Fall from './components/Fall'
import Spring from './components/Spring'
import Winter from './components/Winter'
import Summer from './components/Summer'
import Logout from './components/Logout'
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
          this.props.history.push("/spring");
        })
      }) 
    }else {
      this.props.history.push("/login")
    }
  }

  handleSignUp = () => {
    return this.props.history.push("/login")
  }

  setLogin = (userObj) => {
    if (userObj.message) {
      return this.props.history.push("/")
    }

    const user = {
      user: userObj.user
    }

    this.setState({user}, () => {
      localStorage.setItem("token", userObj.jwt);
      this.props.history.push("/spring");
    });
  }

  handleLogout = () => {
    this.setState({user:{}}, () => {
      localStorage.removeItem('token');
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <Nav user={this.state.user} />
        <Switch>
          <Route path="/winter" component={Winter}/>
          <Route path="/spring" component={Spring}/>
          <Route path="/summer" component={Summer}/>
          <Route path="/fall" component={Fall}/>
          <Route path="/signup" render={() => <SignupContainer handleSignUp={this.handleSignUp} /> }/>
          <Route path="/login" render={() => <LoginContainer setLogin={this.setLogin} /> }/>
          <Route path="/logout" render={() => <Logout handleLogout={this.handleLogout} /> }/>
          <Route exact path="/" component={Home}/>
        </Switch>
    </div>
    )
  }
}

export default withRouter(App);
