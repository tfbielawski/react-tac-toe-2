import React from "react";
import Player from "./components/Player";

function App() {
  
  return (
    <main>
      <div id="game-container">
        players
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>

        game board
        
      </div>
      log
    </main>
  )
}

export default App
