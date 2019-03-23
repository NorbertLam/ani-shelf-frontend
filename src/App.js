import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home'
import Nav from './containers/NavBar'



class App extends Component {
  render() {
    return (<div>
        <Nav />
        <Home />
      </div>
    )
  }
}

export default App;

{/* <video autoPlay loop id="bg-video">
    <source src="/videos/hero.webm" type="Video/webm"/>
</video> */}