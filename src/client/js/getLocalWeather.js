/* Global Variables */

// Personal API Key for Geonames API
const baseURLGeonames = 'http://api.geonames.org/searchJSON?q=';
const apiKeyGeoNames = 'matthies';

// Need to figure out how this works
// const apiKeyGeoNames = process.env.API_KEY_GEONAMES

// Personal API Key for Weatherbit
const baseURLWeatherbitHistory = 'http://api.weatherbit.io/v2.0/history/daily?';
const baseURLWeatherbitForecast = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const apiKeyWeatherbit = '88034f45d76e48dd9032d139b923cb75';

// Need to figure out how this works
// const apiKeyWeatherbit = process.env.API_KEY_WEATHERBIT

/* Function to GET Geonames API Data*/
export const getCoordinates = async (city) =>{
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
export const getWeatherForecast = async (lat, lng) => {
    const res = await fetch(baseURLWeatherbitForecast + '&lat=' + lat + '&lon=' + lng + '&key=' + apiKeyWeatherbit);
    try {
        const data = await res.json();
        return data;
      }
      catch(error) {
        console.log("error", error);
      }
}

export const getHistoricalWeather = async (lat, lng, startDate, endDate) => {
    const res = await fetch(baseURLWeatherbitHistory + '&lat=' + lat + '&lon=' + lng + '&start_date=' + startDate + '&end_date=' + endDate + '&key=' + apiKeyWeatherbit);
    try {
        const data = await res.json();
        return data;
      }
      catch(error) {
        console.log("error", error);
      }
}
