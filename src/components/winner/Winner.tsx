import React, { useContext } from "react"
import Context from "../../context/Context"
import "./Winner.css"
import sadFace from "../../img/icons8-sad-but-relieved-face-96.png"
import coolFace from "../../img/icons8-smiling-face-with-sunglasses-96.png"

const Winner = () => {
  const { totalScore } = useContext(Context)
  return (
    <div className="winner-wrapper">
      <h1>Game over!</h1>
      {totalScore === 0 ? (
        <img src={sadFace} alt="" />
      ) : (
        <img src={coolFace} alt="" />
      )}
      <h4>Du fick {totalScore} poäng!</h4>
    </div>
  )
}

export default Winner
