import React from "react"

function GameOver({winner}) {
  return (
    <div id="game-over">
        <h2> GameOver </h2>
        {winner && <p>{winner} WINS!!</p>}
        {!winner && <p>It's a draw</p>}
        <p> <button> START OVER </button> </p>
    </div>
  )
}

export default GameOver