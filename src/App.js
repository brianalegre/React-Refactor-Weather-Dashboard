// Import
import Search from "./components/search/search"
import './App.css';
// import { useState } from "react"
import { APIKey, WeatherGeoAPI, WeatherDataAPI } from "./api"

function App() {

  // const hanldeUserInput = (searchText) => {
  //   console.log(searchText)
  //   const [lat, lon] = searchText.value.split(" ")
  // }

  // City Name = Tokyo
  // function getLatLon(cityName) {

  //   // Geo Call, Fetch
  //   fetch(WeatherGeoAPI + `q=${encodeURI(cityName)}&appid=${APIKey}`)
  //   console.log("getLatLon Called")
  //     .then(function (response) {
  //       if (response.okay) {
  //         response.json()
  //           .then(function (data) {
  //             console.log(data)
  //           })
  //       }
  //     })
  // }

  const getLatLon = async (citySearch) => {
    const url = `${WeatherGeoAPI}q=${citySearch}&apikey=${APIKey}`;

    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
  }

  getLatLon('tokyo')
    .then((data) => console.log(data));


  return (
    <Search />
  )
}

export default App;
