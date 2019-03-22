import React, { Component } from 'react'
import Front from './CardFront'

export class AnimeCard extends Component {
  render() {
    return (
      <div className="anime-card">
        <Front />
      </div>
    )
  }
}

export default AnimeCard
