import React, { useState } from "react"
const Category = () => {
  const categories = [
    "Arts & Literature",
    "Film & TV",
    "Food & Drink",
    "General Knowledge",
    "Geography",
    "History",
    "Music",
    "Science",
    "Society & Culture",
    "Sport & Leisure",
  ]
  const [category, setCategory] = useState("")
  const [counter30, setCounter30] = useState(0)
  const shuffledCategories = categories.sort(
    (a: any, b: any) => 0.5 - Math.random()
  )
  const allDifficulties = ["easy", "medium", "hard"]
  const randomDifficulties = allDifficulties.sort(
    (a: any, b: any) => 0.5 - Math.random()
  )

  const nextQuestion = (item: string) => {
    setCategory(item)
    setCounter30(30)
  }

  return (
    <div className="ctgr-main-wrapper">
      <h1 className="">Välj en kategori</h1>
      <div data-testid="category-buttons" className="category-wrapper">
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
