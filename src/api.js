// Export Component
export const APIKey = 'b285d18d11dcc358521846452d848e59';
// export const WeatherDataAPI = `https://api.openweathermap.org/data/2.5/onecall`;
export const WeatherDataAPI = 'https://api.openweathermap.org/data/2.5/weather?lat='
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
export const WeatherGeoAPI = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoApiOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "445fda8cf1msh70da80e5f525233p18eca4jsn9bcc56577356",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
};