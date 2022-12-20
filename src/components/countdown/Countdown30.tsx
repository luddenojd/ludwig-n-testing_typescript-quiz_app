import React, { useEffect, useContext } from "react"
import Context from "../../context/Context"

const Countdown30 = () => {
  const { counter30, setCounter30 } = useContext(Context)

  const color = "red"

  useEffect(() => {
    if (counter30 > 0) {
      setTimeout(() => {
        setCounter30(counter30 - 1)
      }, 1000)
    }
  }, [counter30])
  return (
    <div>
      {counter30 > 10 ? (
        <h1 className="counter-30-points">{counter30} sekunder kvar</h1>
      ) : (
        <h1 style={{ color: color }}>
          Skynda, bara {counter30} sekunder kvar!
        </h1>
      )}
    </div>
  )
}

export default Countdown30
