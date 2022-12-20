import React, { useState, useEffect } from "react"
import Category from "../category/Category"
import { timePerRound } from "../../config/Config"
import "./Main.css"
import Context from "../../context/Context"
import Question from "../question/Question"
import Winner from "../winner/Winner"
import Settings from "../settings/Settings"
import quizLogo from "../../img/Quiz-Logo-PNG-HD.png"
import playerLogo from "../../img/player.png"
import settingsLogo from "../../img/icons8-services-50.png"
const Main = () => {
  const [allAnswers, setAllAnswers] = useState<string[]>([])
  const [answer, setAnswer] = useState("")
  const [categories, setCategories] = useState<string[]>([])
  const [category, setCategory] = useState("")
  const combo = "Combo"
  const [component, setComponent] = useState("category")
  const [consecutiveCount, setConsecutiveCount] = useState<string[]>([])
  const [consecutiveScore, setConsecutiveScore] = useState(1)
  const [correctScore, setCorrectScore] = useState(0)
  const [counter, setCounter] = useState("")
  const [counter30, setCounter30] = useState(timePerRound)
  const [difficulty, setDifficulty] = useState("")
  const [difficultyScore, setDifficultyScore] = useState(0)
  const [difficultySettings, setDifficultySettings] = useState("Easy")
  const [input, setInput] = useState("")
  const [player, setPlayer] = useState("")
  const [pointsPerRound, setPointsPerRound] = useState<number[]>([])
  const [questions, setQuestions] = useState<string[]>([])
  const [region, setRegion] = useState("GB")
  const [stopTime, setStopTime] = useState<number[]>([])
  const [timeLeft, setTimeLeft] = useState(0)
  const [totalScore, setTotalScore] = useState(0)

  function switchComponent(component: string) {
    setComponent(component)
  }

  useEffect(() => {
    fetch("https://the-trivia-api.com/api/categories")
      .then((response) => response.json())
      .then((result) => {
        setCategories(Object.keys(result))
      })
  }, [])
  return (
    <div>
      {player === "" ? (
        <div className="main-wrapper">
          <img src={quizLogo} width={300} alt="" />
          <p className="player-name-p">Spelarnamn:</p>
          <input onChange={(e) => setInput(e.target.value)} type="text" />
          <button className="player-button" onClick={() => setPlayer(input)}>
            <h4>Starta quiz!</h4>
          </button>
        </div>
      ) : (
        <div className="main-wrapper">
          <img src={quizLogo} width={200} alt="" />
          <div className="player-info">
            <img src={playerLogo} width={20} alt="" />
            <h4>{player}</h4>
            <img
              onClick={() => setComponent("settings")}
              src={settingsLogo}
              width={20}
              alt=""
            />
          </div>

          <Context.Provider
            value={{
              allAnswers,
              setAllAnswers,
              answer,
              setAnswer,
              setTotalScore,
              setDifficultyScore,
              difficultyScore,
              setConsecutiveScore,
              correctScore,
              setCorrectScore,
              pointsPerRound,
              setPointsPerRound,
              category,
              setCategory,
              difficultySettings,
              setDifficultySettings,
              categories,
              questions,
              setQuestions,
              totalScore,
              region,
              setRegion,
              component,
              counter,
              setCounter,
              timeLeft,
              setTimeLeft,
              counter30,
              setCounter30,
              stopTime,
              setStopTime,
              difficulty,
              setDifficulty,
              combo,
              consecutiveCount,
              setConsecutiveCount,
              consecutiveScore,
            }}
          >
            {component === "category" && (
              <Category switchComponent={switchComponent} />
            )}
            {component === "question" && (
              <Question switchComponent={switchComponent} />
            )}

            {component === "winner" && <Winner />}
            {component === "settings" && (
              <Settings switchComponent={switchComponent} />
            )}
          </Context.Provider>
        </div>
      )}
    </div>
  )
}

export default Main
