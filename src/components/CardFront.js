import React, { Component } from 'react'

export class CardFront extends Component {
    state = {
        favorite: false,
        heart: "/images/empty_heart.png",
    }

    favoriteHandler = () => {
        if(this.state.heart === "/images/empty_heart.png"){
            this.setState({
                favorite: !this.state.favorite,
                heart: "/images/full_heart.png"
            })
        }else{
            this.setState({
                favorite: !this.state.favorite,
                heart: "/images/empty_heart.png"
            })
        }
    }

  render() {
    const image = this.props.animeObj.image;
    const genres = this.props.animeObj.genres.split(',').map(genre => <p key={genre} className="btn-genre">{genre}</p>)
    const month = this.props.animeObj.start_date.split(" ");
    switch(this.props.animeObj.start_date.split(" ")[0]){
        case "1": month.splice(0,1, "January"); break;    
        case "2": month.splice(0,1, "February"); break;    
        case "3": month.splice(0,1, "March"); break;    
        case "4": month.splice(0,1, "April"); break;    
        case "5": month.splice(0,1, "May"); break;    
        case "6": month.splice(0,1, "June"); break;    
        case "7": month.splice(0,1, "July"); break;    
        case "8": month.splice(0,1, "August"); break;    
        case "9": month.splice(0,1, "September"); break;    
        case "10": month.splice(0,1, "October"); break;    
        case "11": month.splice(0,1, "November"); break;    
        case "12": month.splice(0,1, "December"); break;    
    }
    return (
      <div>
          <div className="anime-left">
          <div  className="anime-title-container">
                <p className="anime-title">{this.props.animeObj.title}</p>
              </div>
              <img className="anime-image" src={image}  alt="" />
          </div>
          <div className="anime-right">
              <div>
                  <h2>Ep 1 airs: {month.join(" ")}</h2>
                  <p>{this.props.animeObj.desc}</p>
                  {genres}
                  <input type="image" className="heart" src={this.state.heart} onClick={this.favoriteHandler}/>
              </div>
          </div>
      </div>
    )
  }
}

export default CardFront
