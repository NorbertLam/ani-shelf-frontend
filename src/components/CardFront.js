import React, { Component } from 'react'

export class CardFront extends Component {
  render() {
    const image = "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"
    return (
      <div>
          <div className="anime-image">
            <img src={image}/>
          </div>
          <div className="anime-front">
            <h1>Boku no Pico</h1>
            <p>alfalelkaelaefllaelavlalklkadvlkadlkvnadlkvndaklv</p>
        </div>
      </div>
    )
  }
}

export default CardFront
