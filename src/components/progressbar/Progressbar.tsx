import React, { useContext } from "react"
import "./Progressbar.css"
import Context from "../../context/Context"

const Progressbar = () => {
  const { width } = useContext(Context)
  return (
    <div className="progress-wrapper">
      <div style={{ width: width }} className="progress-filler"></div>
    </div>
  )
}

export default Progressbar
