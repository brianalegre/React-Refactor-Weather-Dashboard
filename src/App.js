// Import
import Search from "./components/search/search"
import './App.css';
import { useState } from "react"

function App() {

  const hanldeUserInput = (searchText) => {
    console.log(searchText)
    const [lat, lon] = searchText.value.split(" ")
  }

  return (
    <Search userInput={hanldeUserInput} />
  )
}

export default App;
