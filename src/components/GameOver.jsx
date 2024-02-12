import React from "react"

function GameOver({winner}) {
  return (
    <div id="game-over">
        <h2> GameOver </h2>
        <p> {winner} Wins!!</p>
        <p> <button> START OVER </button> </p>
    </div>
  )
}

export default GameOver