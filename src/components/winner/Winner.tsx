import React, { useContext } from "react"
import Context from "../../context/Context"

const Winner = () => {
  const { totalScore } = useContext(Context)
  return (
    <div>
      <h1>Spelet slut</h1>
      <h4>Din totala poäng är: {totalScore}</h4>
    </div>
  )
}

export default Winner
