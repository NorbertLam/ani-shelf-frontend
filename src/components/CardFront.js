import React, { Component } from 'react'

export class CardFront extends Component {
  render() {
    const image = this.props.animeObj.image;
    const genres = this.props.animeObj.genres.split(',').map(genre => <button key={genre} className="btn-genre">{genre}</button>)
    return (
      <div>
          <div className="anime-left">
              <img className="anime-image" src={image}  alt="" />
          </div>
          <div className="anime-right">
              <h1 className="anime-title">{this.props.animeObj.title}</h1>
              <div>
                  {genres}
              </div>
          </div>
      </div>
    )
  }
}

export default CardFront
