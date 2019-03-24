import React, { Component } from 'react'
import Card from '../components/AnimeCard'

export class CardContainer extends Component {
    state = {
        SPRING: [],
        SUMMER: [],
        FALL: [],
        WINTER: []
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
                    default: break;
                }
            })
            this.setState({
                SPRING: spring,
                SUMMER: summer,
                FALL: fall,
                WINTER: winter
            })
        })
    }
  render() {
    console.log(this.state[this.props.season]);
    return (
      <div className="container">
        <Card />
      </div>
    )
  }
}

export default CardContainer
