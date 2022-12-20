import React, { useEffect, useState, useContext } from "react"
import QuestionCard from "../questioncard/QuestionCard"
import Countdown from "../countdown/Countdown"
import Context from "../../context/Context"
import { easy, medium, hard } from "../../config/Config"

const Question = ({ switchComponent }: { switchComponent: Function }) => {
  const {
    setDifficultyScore,
    category,
    difficultySettings,
    setQuestions,
    region,
    counter,
    difficulty,
    setDifficulty,
  } = useContext(Context)
  const [newCategory, setNewCategory] = useState("")

  useEffect(() => {
    switch (difficultySettings) {
      case "Easy":
        setDifficulty("easy")
        setDifficultyScore(easy)
        break
      case "Medium":
        setDifficulty("medium")
        setDifficultyScore(medium)
        break
      case "Hard":
        setDifficulty("hard")
        setDifficultyScore(hard)
        break
      default:
    }
    switch (category) {
      case "Arts & Literature":
        setNewCategory("arts_and_literature")
        break
      case "Film & TV":
        setNewCategory("film_and_tv")
        break
      case "Food & Drink":
        setNewCategory("food_and_drink")
        break
      case "General Knowledge":
        setNewCategory("general_knowledge")
        break
      case "Geography":
        setNewCategory("geography")
        break
      case "History":
        setNewCategory("history")
        break
      case "Music":
        setNewCategory("music")
        break
      case "Science":
        setNewCategory("science")
        break
      case "Society & Culture":
        setNewCategory("society_and_culture")
        break
      case "Sport & Leisure":
        setNewCategory("sport_and_leisure")
        break
      default:
    }
    if (newCategory) {
      fetch(
        `https://the-trivia-api.com/api/questions?categories=${newCategory}&limit=1&region=${region}&difficulty=${difficulty}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else throw new Error("Trivia is currently not working")
        })
        .then((result) => {
          setQuestions(result)
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [
    newCategory,
    category,
    difficultySettings,
    difficulty,
    setQuestions,
    setDifficultyScore,
    region,
  ])
  return (
    <div>
      {counter !== "Switch" ? (
        <Countdown />
      ) : (
        <QuestionCard switchComponent={switchComponent} />
      )}
    </div>
  )
}

export default Question
