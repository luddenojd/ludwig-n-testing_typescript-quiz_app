import React, { useContext, useEffect } from "react"
import Context from "../../context/Context"
import Countdown30 from "../countdown/Countdown30"
import { questionsPerRound } from "../../config/Config"
import "./QuestionCard.css"
const QuestionCard = ({ switchComponent }: { switchComponent: Function }) => {
  const {
    allAnswers,
    setAllAnswers,
    setAnswer,
    setCorrectScore,
    correctScore,
    pointsPerRound,
    setPointsPerRound,
    questions,
    setQuestions,
    setCounter,
    stopTime,
    setStopTime,
    counter30,
    setTimeLeft,
    difficultyScore,
    setTotalScore,
    combo,
    consecutiveCount,
    setConsecutiveCount,
    setConsecutiveScore,
    consecutiveScore,
    answer,
  } = useContext(Context)

  function setPointsAndAnswer(answer: any) {
    setAnswer(answer)
    setTimeLeft(counter30)
    setAllAnswers([...allAnswers, answer])
    setPointsPerRound([...pointsPerRound, correctScore])
    setStopTime([...stopTime, counter30])
    if (answer === "correctAnswer") {
      setCorrectScore(1)
      setConsecutiveCount([...consecutiveCount, combo])
      if (consecutiveCount.length >= 3) {
        setConsecutiveScore(consecutiveCount.length + 1)
      }
    } else {
      setCorrectScore(0)
      setConsecutiveCount([])
    }
    if (allAnswers.length < questionsPerRound) {
      setTimeout(() => {
        switchComponent("category")
        setQuestions([])
        setCounter("")
      }, 500)
    } else {
      switchComponent("winner")
      let timeSum = 0
      let roundSum = 0
      stopTime.forEach((item: number) => {
        timeSum += item
      })
      pointsPerRound.forEach((item: number) => {
        roundSum += item
      })
      if (roundSum > 0) {
        setTotalScore(timeSum * difficultyScore + roundSum * consecutiveScore)
      } else {
        setTotalScore(0)
      }
    }
  }

  useEffect(() => {
    if (counter30 < 1) {
      switchComponent("category")
    }
  }, [counter30])
  console.log(pointsPerRound)
  console.log(answer)
  return (
    <div className="question-card-wrapper">
      <ul className="questions-list">
        {questions?.map((item: any) => (
          <li className="question-list-li" key={item.id}>
            <p>{item.question}</p>

            <div className="answers-wrapper">
              {item.incorrectAnswers?.map((wrongAnswers: any) => (
                <button
                  className="question-button-wrong"
                  key={wrongAnswers}
                  onClick={() => setPointsAndAnswer(wrongAnswers)}
                >
                  {wrongAnswers}
                </button>
              ))}
              <button
                className="question-button-right"
                onClick={() => setPointsAndAnswer(Object.keys(item)[2])}
              >
                {item.correctAnswer}
              </button>
            </div>
            <Countdown30 />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionCard
