import React, { Component } from 'react'
import Front from './CardFront'
import CardBack from './CardBack'

export class AnimeCard extends Component {
  state = {
    flipped: 'false'
  }

  render() {
    return (
      // <div className="anime-card" onClick={() => this.setState({flipped: !this.state.flipped})} >
      <div className="anime-card">
        <Front animeObj={this.props.animeObj} />
        <CardBack animeObj={this.props.animeObj} />
      </div>
    )
  }
}

export default AnimeCard
