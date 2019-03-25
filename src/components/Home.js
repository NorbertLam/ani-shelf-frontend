import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


export class Home extends Component {
  render() {
    let port = window.location.href.slice(17, 21)
    return (
      <div>
        <video autoPlay loop id="bg-video">
           <source src="/videos/hero.webm" type="video/webm"/>
       </video>
      </div>
    )
  }
}

// {window.location.href === `http://localhost:${port}/` ? 
//         <video autoPlay loop id="bg-video">
//           <source src="/videos/hero.webm" type="video/webm"/>
//         </video> : null }

export default withRouter(Home);
