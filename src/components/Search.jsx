import React from "react"
import { useState, useEffect } from "react"

function Search({ comic, setSearchedComic }) {
  const [currentSearch, setCurrentSearch] = useState("")
  let handleChange = async (e) => {
    setCurrentSearch(e.target.value)
  }

  useEffect(() => {
    const regex = new RegExp(currentSearch)
    const searchComic = comic.filter((comic) =>
      regex.test(comic.title.toLowerCase())
    )
    setSearchedComic(searchComic)
  }, [currentSearch, comic])

  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" placeholder="Buscar cómic" />
      </form>
    </div>
  )
}

export default Search
