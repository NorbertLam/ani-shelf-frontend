import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Container from '../containers/CardContainer'

export class Spring extends Component {
  render() {
    return (
      <div>
        <Container season='SPRING' />
      </div>
    )
  }
}

export default withRouter(Spring);
