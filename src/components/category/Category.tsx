import React, { useContext } from "react"
import Context from "../../context/Context"
import "./Category.css"
const Category = ({ switchComponent }: { switchComponent: Function }) => {
  const { setCategory, categories, setWidth } = useContext(Context)
  const shuffledCategories = categories.sort(
    (a: any, b: any) => 0.5 - Math.random()
  )

  const nextQuestion = (item: any) => {
    setCategory(item)
    switchComponent("question")
    setWidth(300)
  }

  return (
    <div>
      <div className="category-wrapper">
        <h1>Välj en kategori</h1>

        {shuffledCategories?.slice(0, 3).map((item: any) => (
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
