import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home'
import Nav from './containers/NavBar'



class App extends Component {
  render() {
    return (<div className="main-container">
        <Nav />
        <Home />
      </div>
    )
  }
}

export default App;