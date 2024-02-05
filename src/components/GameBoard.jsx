
//Create the gameboard as a multi-d array
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard(){
    return (
        <ol id="game-board">
            {/* 
                map over gameboard to get the rows
                pass in row and rowIndex as key
            */}
            {initialGameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {/* Map again to get the columns */}
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
    
}