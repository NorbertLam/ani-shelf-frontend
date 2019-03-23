import React, { Component } from 'react'
import Container from '../containers/CardContainer'

export class Spring extends Component {
  render() {
    return (
      <div>
        <img className="bg-season" src="/images/spring.jpg"/>
        <Container/>
      </div>
    )
  }
}

export default Spring
