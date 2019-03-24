import React, { Component } from 'react'
import Container from '../containers/CardContainer'

export class Spring extends Component {
  render() {
    return (
      <div>
        <img className="bg-season" src="/images/tumblr_na90ypEFLf1sif4cro4_500.gif" alt="" />
        <Container season='SPRING' />
      </div>
    )
  }
}

export default Spring
