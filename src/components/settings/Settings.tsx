import React from "react"
import Region from "../region/Region"
import Difficulty from "../difficulty/Difficulty"
import "./Settings.css"

const Settings = ({ switchComponent }: { switchComponent: Function }) => {
  return (
    <div>
      <div>
        <p
          className="settings-back-button"
          onClick={() => switchComponent("category")}
        >
          Tillbaka
        </p>
      </div>
      <div className="settings-wrapper">
        <Region />
        <Difficulty />
      </div>
    </div>
  )
}

export default Settings
