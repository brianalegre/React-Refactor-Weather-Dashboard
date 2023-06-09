// Import
import Search from "./components/search/search"
import './App.css';
import { useState } from "react"
import { APIKey, WeatherGeoAPI, WeatherDataAPI } from "./api"

function App() {

  // Use States
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Handle On Search Change
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
    const [lat, lon] = searchData.value.split(" ");

    // API Call
    const currentWeatherFetch = fetch(`${WeatherDataAPI}${lat}&lon=${lon}&appid=${APIKey}&units=metric`);
    const forecastFetch = fetch(`${WeatherDataAPI}${lat}&lon=${lon}&appid=${APIKey}&units=metric`);

    // Promise
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        console.log(response)
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log());

  }


  // // Set States for Latitude and Longtidue
  // const [lat, setLat] = useState("35.6828387");
  // const [lon, setLon] = useState("139.7594549");

  // // Handle On Search Change
  // const handleOnSearchChange = (searchData) => {
  //   console.log(searchData)
  //   const [lat, lon] = searchData.value.split(" ");
  // }

  // // Get Latitude and Longtidue from WeatherGeoAPI
  // const getLatLon = async (citySearch) => {
  //   const url = `${WeatherGeoAPI}q=${citySearch}&apikey=${APIKey}`;

  //   return fetch(url)
  //     .then((response) => response.json()
  //     )
  //     .catch((error) => console.log(error))
  // }
  // getLatLon('tokyo')
  //   .then((data) =>
  //     console.log("I am getLatLong", data)
  //     // console.log(data, 'lat:', data[0].lat, 'lon:', data[0].lon)),
  //     // setLat(data[0].lat), console.log("Setting Lat to:", lat),
  //     // setLon(data[0].lon), console.log("Setting Lon to:", lon)
  //   );

  // // Get Current Weather from WeatherDataAPI
  // const getCurrentWeather = async () => {
  //   const url2 = `${WeatherDataAPI}${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;

  //   return fetch(url2)
  //     .then((response) => response.json()
  //       // Get data needed to display
  //       // Weather, Wind, Humidity, Feels Like, Icon
  //     )
  //     .catch((error) => console.log(error))
  // }

  // getCurrentWeather()
  //   .then((data) =>
  //     console.log("I am get currentWeather", data),
  //     console.log(lat, lon)
  //   )

  return (
    <Search onSearchChange={handleOnSearchChange} />
  )
}

export default App;
