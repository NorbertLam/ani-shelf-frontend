import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Fall from './components/Fall'
import Spring from './components/Spring'
import Winter from './components/Winter'
import Summer from './components/Summer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './containers/NavBar'



class App extends Component {
  render() {
    return (<div>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/winter" component={Winter}/>
          <Route path="/spring" component={Spring}/>
          <Route path="/summer" component={Summer}/>
          <Route path="/fall" component={Fall}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;