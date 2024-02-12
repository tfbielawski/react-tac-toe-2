import { useState } from "react"
import React from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  //Manage state in app js to pass to between child components (lifting state)
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");  

  function handleSelectSquare(rowIndex, colIndex){
    //Update state based on current state, use current active player
    setActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {

      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X"){
        currentPlayer === "O";
      }
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: activePlayer},
        ...prevTurns,
      ]

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        players
        <ol id="players" className="highlight-player" >
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          turns={gameTurns}
        />
      </div>
      log
    </main>
  )
}

export default App
