import React, { Component } from 'react'
import Card from '../components/AnimeCard'

export class CardContainer extends Component {
    state = {
        SPRING: [],
        SUMMER: [],
        FALL: [],
        WINTER: [],
        favorites: []
    }
    
    componentWillMount() {
        fetch('http://localhost:3000/animes')
        .then(resp => resp.json())
        .then(animes => {
            let spring = [], summer = [], fall = [], winter = []
            
            animes.forEach(anime => {
                switch(anime.season){
                    case "SPRING": spring.push(anime); break;
                    case "WINTER": winter.push(anime); break;
                    case "SUMMER": summer.push(anime); break;
                    case "FALL": fall.push(anime); break;
                    default: break;
                }
            }) 
            this.fetchFavAnimes().then(animes => {
              const favAnimes = new Set();

              if (localStorage.token) {
                animes.animes.forEach(anime => {
                  favAnimes.add(anime.anime_id);
                })
              }

              this.setState({
                  SPRING: spring,
                  SUMMER: summer,
                  FALL: fall,
                  WINTER: winter,
                  favorites: favAnimes
              })
            });
        })    
    }

    fetchFavAnimes  = () => {
      return fetch('http://localhost:3000/hearts', {
          method: "GET",
            headers: {
              "content-type": "application/json",
              accepts: "application/json",
              Authorization: localStorage.token
            }
          })
        .then(resp => resp.json());
    }
  
    render() {
      const cardArr = this.state[this.props.season].map(anime => !anime.genres.includes('Hentai') ? <Card key={anime.anime_id} animeObj={anime} animeFav={this.state.favorites} /> : null )
      
      return (
        <div className="container">
          {cardArr}
        </div>
      )
  }
}

export default CardContainer
