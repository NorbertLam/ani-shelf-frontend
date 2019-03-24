import React, { Component } from 'react'
import Container from '../containers/CardContainer'

export class Fall extends Component {
  render() {
    return (
      <div>
        <img className="bg-season" src="/images/Fall.jpg"  alt="" />
        <Container season='FALL' />
      </div>
    )
  }
}

export default Fall
