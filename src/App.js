import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
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
    user: {},
    season: 'SPRING'
  }

  render() {
    return (<div>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/winter" component={Winter}/>
          <Route path="/spring" component={Spring}/>
          <Route path="/summer" component={Summer}/>
          <Route path="/fall" component={Fall}/>
          <Route path="/signup" component={SignupContainer}/>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
    )

  }
}

export default App;