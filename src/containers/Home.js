import React, { Component } from 'react'
import Fall from '../components/Fall'
import Spring from '../components/Spring'
import Winter from '../components/Winter'
import Summer from '../components/Summer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export class Home extends Component {
  render() {
    let port = window.location.href.slice(17, 21)
    return (
      <div>
        {window.location.href === `http://localhost:${port}/` ? 
          <video autoPlay loop id="bg-video">
            <source src="/videos/hero.webm" type="video/webm"/>
          </video> : null }
        <Router>
          <Switch>
            <Route path="/fall" render={() => <Fall />}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Home
