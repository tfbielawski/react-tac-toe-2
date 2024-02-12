
export default function GameBoard({onSelectSquare, board}){
    
    return (
        <ol id="game-board">
            {/* 
                map over gameboard to get the rows
                pass in row and rowIndex as key
            */}
            {board.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {/* Map again to get the columns */}
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button 
                                onClick={() => onSelectSquare(rowIndex, colIndex)}
                                // disabled={playerSymbol !== null}                            
                            >
                                {playerSymbol}
                            </button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}
