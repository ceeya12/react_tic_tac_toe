import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);

  function handleChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
