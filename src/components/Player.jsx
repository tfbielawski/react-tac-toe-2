import { useState } from "react"

export default function Player({initialName, symbol }){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        //Update state based on current state value(ideal)
        //Passing in a () here gets the current state value, then reverses 
        setIsEditing((editing)=> !isEditing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing){
        editablePlayerName = 
        <input 
            type="text" 
            value={playerName}
            required
            onChange={handleChange}
        />
    }

    return (
        <li>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "SAVE" : "EDIT"}</button>
        </li>
    )
}