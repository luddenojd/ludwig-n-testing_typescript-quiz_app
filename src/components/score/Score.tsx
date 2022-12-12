import React, { useContext, useEffect } from "react"
import Context from "../../context/Context"

const Score = () => {
  const {
    timeLeft,
    difficultyScore,
    correctScore,
    consecutiveScore,
    setConsecutiveScore,
    pointsPerRound,
  } = useContext(Context)

  const pointsPerQuestion = timeLeft * difficultyScore + correctScore

  useEffect(() => {
    if (pointsPerRound.length > 3) {
      setConsecutiveScore(correctScore)
      const comboScore = pointsPerQuestion * consecutiveScore
    }
  }, [])
  return <div>{difficultyScore}</div>
}

export default Score
