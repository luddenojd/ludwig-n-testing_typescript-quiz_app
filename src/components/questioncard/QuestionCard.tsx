import React, { useContext, useEffect } from "react"
import Context from "../../context/Context"
import Progressbar from "../progressbar/Progressbar"
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
    setWidth,
    component,
  } = useContext(Context)

  function setPointsAndAnswer(answer: any) {
    setAnswer(answer)
    setAllAnswers([...allAnswers, answer])
    setPointsPerRound([...pointsPerRound, correctScore])
    if (answer === "correctAnswer") {
      setCorrectScore(1)
    } else {
      setCorrectScore(0)
    }
    if (allAnswers.length < 9) {
      setTimeout(() => {
        switchComponent("category")
        setQuestions([])
        setWidth(0)
      }, 500)
    } else {
      switchComponent("winner")
    }
    console.log(pointsPerRound)
  }
  useEffect(() => {
    setTimeout(() => {
      switchComponent("category")
    }, 30000)
  }, [component])
  return (
    <div>
      <ul className="questions-list">
        {questions?.map((item: any) => (
          <li key={item.id}>
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
            <Progressbar />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionCard
