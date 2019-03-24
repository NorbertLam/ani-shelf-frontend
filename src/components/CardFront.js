import React, { Component } from 'react'

export class CardFront extends Component {
  render() {
    const image = "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"
    return (
    <div>
        <div className="anime-left">
            <img className="anime-image" src={image}  alt="" />
        </div>
        <div className="anime-right">
            <h1 className="anime-title">Boku no Pico</h1>
            <div>
                <button className="btn-genre">Genre</button>
                <button className="btn-genre">Genre2</button>
                <button className="btn-genre">Genre3</button>
            </div>
        </div>
    </div>
    )
  }
}

export default CardFront
