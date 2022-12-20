import React, { useContext } from "react"
import Context from "../../context/Context"
import "./Category.css"
const Category = ({ switchComponent }: { switchComponent: Function }) => {
  const {
    setCategory,
    categories,
    setCounter30,
    difficultySettings,
    setDifficulty,
  } = useContext(Context)
  const shuffledCategories = categories.sort(
    (a: any, b: any) => 0.5 - Math.random()
  )
  const allDifficulties = ["easy", "medium", "hard"]
  const randomDifficulties = allDifficulties.sort(
    (a: any, b: any) => 0.5 - Math.random()
  )

  const nextQuestion = (item: string) => {
    setCategory(item)
    switchComponent("question")
    setCounter30(30)

    if (difficultySettings === "Random") {
      setDifficulty(randomDifficulties[0])
    }
  }

  return (
    <div className="ctgr-main-wrapper">
      <h1 className="">Välj en kategori</h1>
      <div className="category-wrapper">
        {shuffledCategories?.slice(0, 3).map((item: string) => (
          <button
            className="category-button"
            onClick={() => nextQuestion(item)}
            key={item}
          >
            <h4>{item}</h4>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Category
