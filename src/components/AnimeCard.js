import React, { Component } from 'react'
import Front from './CardFront'

export class AnimeCard extends Component {
  render() {
    return (
      <div className="anime-card">
        <Front animeObj={this.props.animeObj} animeFav={this.props.animeFav} />
      </div>
    )
  }
}

export default AnimeCard
