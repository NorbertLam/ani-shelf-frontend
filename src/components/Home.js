import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


export class Home extends Component {
  render() {
    return (
      <div>
        <video autoPlay loop id="bg-video">
           <source src="/videos/hero.webm" type="video/webm"/>
       </video>
      </div>
    )
  }
}

export default withRouter(Home);
