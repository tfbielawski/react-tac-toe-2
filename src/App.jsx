import React from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  
  return (
    <main>
      <div id="game-container">
        players
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      log
    </main>
  )
}

export default App
