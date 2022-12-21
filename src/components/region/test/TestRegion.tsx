import React, { useState } from "react"
import swedishFlag from "../../../img/icons8-sweden-48.png"
import britishFlag from "../../../img/icons8-great-britain-48.png"

const Region = () => {
  const [region, setRegion] = useState("GB")
  return (
    <div>
      <h4>Välj region</h4>
      <div className="chosen-region">
        <p>{region}</p>
        {region === "GB" ? (
          <img src={britishFlag} alt="" />
        ) : (
          <img src={swedishFlag} alt="" />
        )}
      </div>

      <select
        className="region-dropdown"
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="GB">Storbritannien</option>
        <option value="SE">Sverige</option>
      </select>
    </div>
  )
}

export default Region
