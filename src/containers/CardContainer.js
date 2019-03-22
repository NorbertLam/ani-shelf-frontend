import React, { Component } from 'react'
import Card from '../components/AnimeCard'

export class CardContainer extends Component {
    state = {
        spring: [],
        summer: [],
        fall: [],
        winter: []
    }
    componentDidMount(){
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
                }
            })
            this.setState({
                spring: spring,
                summer: summer,
                fall: fall,
                winter: winter
            })
        })
    }
  render() {
      console.log(this.state)
    return (
      <div>
        <Card />
      </div>
    )
  }
}

export default CardContainer
