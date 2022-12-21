import React, { useState } from "react"

const Difficulty = () => {
  const [difficultySettings, setDifficultySettings] = useState("Easy")

  return (
    <div>
      <h4>Välj svårighetsgrad</h4>
      <p className="difficulty-chosen">{difficultySettings}</p>
      <select
        className="difficulty-dropdown"
        onChange={(e) => setDifficultySettings(e.target.value)}
      >
        <option value="Easy">Lätt</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Svår</option>
        <option value="Random">Random</option>
      </select>
    </div>
  )
}

export default Difficulty
