import React from "react"

function GameOver({winner, onRestart}) {
  return (
    <div id="game-over">
        <h2> GameOver </h2>
        {winner && <p>{winner} WINS!!</p>}
        {!winner && <p>It's a draw</p>}
        <p> <button onClick={onRestart}> START OVER </button> </p>
    </div>
  )
}

export default GameOver