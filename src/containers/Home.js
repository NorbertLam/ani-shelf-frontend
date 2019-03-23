import React, { Component } from 'react'
import Fall from './components/Fall'
import Spring from './components/Spring'
import Winter from './components/Winter'
import Summer from './components/Summer'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <Router>
      <Switch>
        <Route path="/home" render={() => <Spring />}/>
      </Switch>
    </Router>
      </div>
    )
  }
}

export default Home
