/* Global Variables */
const fetch = require("node-fetch");

// Personal API Key for Geonames API
const baseURLGeonames = 'http://api.geonames.org/searchJSON?q=';
const apiKeyGeoNames = 'matthies';

// Personal API Key for Weatherbit
const baseURLWeatherbitHistory = 'http://api.weatherbit.io/v2.0/history/daily?';
const baseURLWeatherbitForecast = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const apiKeyWeatherbit = '88034f45d76e48dd9032d139b923cb75';


/* Function to GET Geonames API Data*/
export async function getCoordinates(city) {
    const res = await fetch(baseURLGeonames+city+'&maxRows=1'+'&username='+apiKeyGeoNames);
    try {
      const data = await res.json();
      return data;
    }
    catch(error) {
      console.log("error", error);
    }
}

/* Function to GET Weatherbit API Data*/
export async function getWeatherForecast(lat, lng) {
    const res = await fetch(baseURLWeatherbitForecast + '&lat=' + lat + '&lon=' + lng + '&key=' + apiKeyWeatherbit);
    try {
        const data = await res.json();
        return data;
      }
      catch(error) {
        console.log("error", error);
      }
}

export async function getHistoricalWeather(lat, lng, startDate, endDate) {
    const res = await fetch(baseURLWeatherbitHistory + '&lat=' + lat + '&lon=' + lng + '&start_date=' + startDate + '&end_date=' + endDate + '&key=' + apiKeyWeatherbit);
    try {
        const data = await res.json();
        return data;
      }
      catch(error) {
        console.log("error", error);
      }
}
