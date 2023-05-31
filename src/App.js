// Import
import Search from "./components/search/search"
import './App.css';
// import { useState } from "react"
import { APIKey, WeatherGeoAPI } from "./api"

function App() {

  // const hanldeUserInput = (searchText) => {
  //   console.log(searchText)
  //   const [lat, lon] = searchText.value.split(" ")
  // }

  // City Name = Tokyo
  function getLatLon(cityName) {

    // Geo Call, Fetch
    fetch(WeatherGeoAPI + `q=${encodeURI(cityName)}&appid=${APIKey}`)
    console.log("getLatLon Called")
      .then(function (response) {
        if (response.okay) {
          response.json()
            .then(function (data) {
              console.log(data)
            })
        }
      })
  }

  getLatLon("tokyo")

  return (
    <Search />
  )
}

export default App;
