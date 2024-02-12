import { useState } from "react"
import React from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {WINNING_COMBINATIONS} from "./winning-combinations";

//Create the gameboard as a multi-d array
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

//helper function
function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X"){
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  //Manage state in app js to pass to between child components (lifting state)
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({"X": "Player 1", "O": "Player 2"});

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];
    for (const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

  let winner;

  for (const combo of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combo[0].row][combo[0].column];
    const secondSquareSymbol = gameBoard[combo[1].row][combo[1].column];
    const thirdSquareSymbol = gameBoard[combo[2].row][combo[2].column];

    if ((firstSquareSymbol) && (firstSquareSymbol === secondSquareSymbol) && (secondSquareSymbol === thirdSquareSymbol)){
      winner = players[firstSquareSymbol];
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns,
      ]

      return updatedTurns;
    });
  }
  
  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNames(symbol, newName){
    setPlayers((prevPlayers) => {
      return{ 
        ...prevPlayers,
        [symbol]:newName
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        players
        <ol id="players" className="highlight-player" >
          <Player 
            initialName="Player 1" 
            symbol="X" 
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNames}
          />
          <Player 
            initialName="Player 2" 
            symbol="O" 
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNames}
          />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
