import React, { useEffect, useContext } from "react"
import Context from "../../context/Context"
import "./Countdown.css"

const Countdown = () => {
  const { counter, setCounter } = useContext(Context)
  const countDown = ["3", "2", "1", "Gör dig redo!", "Switch"]

  useEffect(() => {
    setCounter(countDown[0])

    setTimeout(() => {
      setCounter(countDown[1])
    }, 1000)
    setTimeout(() => {
      setCounter(countDown[2])
    }, 2000)
    setTimeout(() => {
      setCounter(countDown[3])
    }, 3000)
    setTimeout(() => {
      setCounter(countDown[4])
    }, 4000)
  }, [])

  return (
    <div>
      <h1 className="countdown">{counter}</h1>
    </div>
  )
}

export default Countdown
