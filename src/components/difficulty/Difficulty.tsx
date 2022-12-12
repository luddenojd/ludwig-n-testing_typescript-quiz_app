import React, { useContext } from "react"
import Context from "../../context/Context"
import "./Difficulty.css"

const Difficulty = () => {
  const { setDifficultySettings, difficultySettings } = useContext(Context)
  const allDifficulties = ["Easy", "Medium", "Hard"]
  const randomDifficulties = allDifficulties.sort(
    (a: any, b: any) => 0.5 - Math.random()
  )

  return (
    <div>
      <h4>Välj svårighetsgrad</h4>
      <p>{difficultySettings}</p>
      <select
        className="difficulty-dropdown"
        onChange={(e) => setDifficultySettings(e.target.value)}
      >
        <option value="Easy">Lätt</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Svår</option>
        <option value={randomDifficulties[0]}>Random</option>
      </select>
    </div>
  )
}

export default Difficulty
