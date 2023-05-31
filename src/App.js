// Import
import Search from "./components/search/search"
import './App.css';
import { useState } from "react"
import { APIKey, WeatherGeoAPI, WeatherDataAPI } from "./api"

function App() {

  // Set States for Latitude and Longtidue
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");



  // Get Latitude and Longtidue from WeatherGEOAPI
  const getLatLon = async (citySearch) => {
    const url = `${WeatherGeoAPI}q=${citySearch}&apikey=${APIKey}`;

    return fetch(url)
      .then((response) => response.json()
      )
      .catch((error) => console.log(error))
  }
  getLatLon('tokyo')
    .then((data) =>
      // console.log(data, 'lat:', data[0].lat, 'lon:', data[0].lon)),
      setLat(data[0].lat), console.log("Setting Lat to:", lat),
      // setLon(data[0].lon), console.log("Setting Lon to:", lon)
    );


  return (
    <Search />
  )
}

export default App;
