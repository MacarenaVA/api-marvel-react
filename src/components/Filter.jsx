import React from "react"
import { useState, useEffect } from "react"

function Filter({ comic }) {
  const data = [comic]
  const [currentFilter, setCurrentFilter] = useState([comic])

  let handleChange = (e) => {
    setCurrentFilter(e.target.value)
  }

  const byFmt = async (data) => {
    const currentFilter = [data.format].sort((a, b) =>
      a.format > b.format ? -1 : 0
    )
    console.log(currentFilter)
  }

  const byTlt = async (data) => {
    const currentFilter = [data.title].sort()

    console.log(currentFilter)
  }

  currentFilter === "comicFmt" && byFmt(data)
  currentFilter === "comicTlt" && byTlt(data)

  return (
    <div>
      <label>Filtrar por:</label>
      <select onChange={handleChange} placeholder="Filtrar por">
        <option value="comicTlt">Nombre</option>
        <option value="comicFmt">Formato</option>
      </select>
    </div>
  )
}

export default Filter
