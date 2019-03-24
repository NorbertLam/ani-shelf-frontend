import React, { Component } from 'react'
import Container from '../containers/CardContainer'

export class Summer extends Component {
  render() {
    return (
      <div>
        <img className="bg-season" src="/images/summer.jpg"  alt="" />
        <Container season='SUMMER' />
      </div>
    )
  }
}

export default Summer
