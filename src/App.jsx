import { useState, useEffect } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import Search from "./components/Search"
import Filter from "./components/Filter"
import Card from "./components/Card"

function App() {
  let [comic, setComic] = useState([])
  let [searchedComic, setSearchedComic] = useState(comic)
  let [filterComic, setFilterComic] = useState(comic)

  let url = `https://gateway.marvel.com:443/v1/public/comics?orderBy=title&limit=100&apikey=06921595b19cf4d64a3de502c4a1f12f`

  useEffect(() => {
    ;(async function () {
      let data = await fetch(url).then((res) => res.json())
      setComic(data.data.results)
    })()
  }, [url])

  return (
    <div className="App">
      <NavBar />
      <div className="d-flex flex-row flex-wrap justify-content-center m-3">
        <Search
          value={searchedComic}
          comic={comic}
          setSearchedComic={setSearchedComic}
        />

        <Filter
          value={filterComic}
          setFilterComic={setFilterComic}
          comic={comic}
        />
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center mb-5">
        <Card results={searchedComic || filterComic} />
      </div>
    </div>
  )
}

export default App
