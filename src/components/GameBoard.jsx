//Create the gameboard as a multi-d array
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({onSelectSquare, turns}){
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         //New board containing previous board elements
    //         const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray] )];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     //This executes handleSelectedSquare from app.js? Maybe just rename it to match?
    //     onSelectSquare();
    // }
    
    let gameBoard = initialGameBoard;
    for (const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
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
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}
