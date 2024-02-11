import { useState } from 'react';

//Create the gameboard as a multi-d array
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({onSelectSquare, activePlayerSymbol}){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            //New board containing previous board elements
            const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray] )];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
        //This executes handleSelectedSquare from app.js? Maybe just rename it to match?
        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {/* 
                map over gameboard to get the rows
                pass in row and rowIndex as key
            */}
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {/* Map again to get the columns */}
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

// import { useState } from 'react';

// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// export default function GameBoard() {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//       const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//       updatedBoard[rowIndex][colIndex] = 'X';
//       return updatedBoard;
//     });
//   }

//   return (
//     <ol id="game-board">
//       {gameBoard.map((row, rowIndex) => (
//         <li key={rowIndex}>
//           <ol>
//             {row.map((playerSymbol, colIndex) => (
//               <li key={colIndex}>
//                 <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// }