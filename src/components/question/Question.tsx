import React, { useEffect, useState, useContext } from "react"
import QuestionCard from "../questioncard/QuestionCard"
import Context from "../../context/Context"

const Question = ({ switchComponent }: { switchComponent: Function }) => {
  const {
    setDifficultyScore,
    category,
    difficultySettings,
    setQuestions,
    region,
  } = useContext(Context)
  const [newCategory, setNewCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")

  useEffect(() => {
    switch (difficultySettings) {
      case "Easy":
        setDifficulty("easy")
        setDifficultyScore(1)
        break
      case "Medium":
        setDifficulty("medium")
        setDifficultyScore(3)
        break
      case "Hard":
        setDifficulty("hard")
        setDifficultyScore(5)
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
        .then((response) => response.json())
        .then((result) => {
          setQuestions(result)
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
      <QuestionCard switchComponent={switchComponent} />
    </div>
  )
}

export default Question
