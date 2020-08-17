import React, {Component} from 'react';
import PlayerCard from './PlayerCard.js'

class Game extends Component {
  constructor() {
    super();
    this.sign = ["rock", "scissors", "paper"]
    this.state = {
      palyerOne: "rock",
      playerTwo: "scissors",
    }
  }

  playGame = (event) => {
    const val = event.target.value
    this.setState({
      playerOne: val,
      playerTwo: this.signs[Math.floor(Math.random() * 3)]
    })
  }

  decideWinner= () => {
    const playerOne = this.state.playerOne
    const playerTwo = this.state.playerTwo
    if (playerOne === playerTwo) {
      return "It's a Tie"
    }  
    else if ((playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "paper" && playerTwo === "rock") ||
      (playerOne === "scissors" && playerTwo === "paper")) {
      return "Player 1 Wins!"
    } else {
      return "Player 2 Wins!"
    }
  }

  render() {
    return (
      <div className="style">
        <h1>Rock-Scissors-Paper</h1>
        <div className="names">
          <h2 id='player-One'>Player One</h2>
          <h2 id='player-Two'>Player Two</h2>
        </div>
        <div className='Players'>
          <PlayerCard sign={this.state.playerOne} />
          <PlayerCard sign={this.state.playerTwo} />
        </div>
        <div className="winner"><h3>{this.decideWinner()}</h3></div>
        <h3>Pick Your tools!</h3>
        <button type="button" onClick={this.playGame} value='rock'>Rock</button>
        <button type="button" onClick={this.playGame} value='scissors'>Scissors</button>
        <button type="button" onClick={this.playGame} value='paper'>Paper</button>
      </div>
    )
  }
}

export default Game;