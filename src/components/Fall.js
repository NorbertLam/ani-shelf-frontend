import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Container from '../containers/CardContainer'

export class Fall extends Component {
  render() {
    return (
      <div>
        <Container season='FALL' />
      </div>
    )
  }
}

export default withRouter(Fall);
