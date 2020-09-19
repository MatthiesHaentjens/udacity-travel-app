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

// Event listener to add function to existing HTML DOM element
// document.getElementById('get-weather').addEventListener('click', performAction);

/* Function called by event listener */
// export async function performAction(e) {
//     const city = 'Amsterdam'
//     const country = 'NL'
//     const data = await Client.getCoordinates(city, country);
//     console.log(data)
//     const lat = data.geonames[0].lat
//     const lng = data.geonames[0].lng
//     const forecastWeatherData = await Client.getWeatherForecast(lat, lng);
//     console.log(forecastWeatherData)
//     const startDate = '2020-01-01'
//     const endDate = '2020-01-02'
//     const historicalWeatherData = await Client.getHistoricalWeather(lat, lng, startDate, endDate);
//     console.log(historicalWeatherData)
//     const destinationPicture = await Client.getDestinationPicture(city)
//     console.log(destinationPicture)
    // await Client.postData('/add', {lat:data.geonames[0].lat});
    // await Client.updateUI();
// }

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

/* Function to POST data */
// export const postData = async ( url = '', data = {})=>{
//     const res = await fetch(url, {
//     method: 'POST',
//     credentials: 'same-origin',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//    // Body data type must match "Content-Type" header
//     body: JSON.stringify(data),
//     });
//     try {
//       const newData = await res.json();
//       return newData;
//     }
//     catch(error) {
//       console.log("error", error);
//     }
//   }

/* Function to GET Project Data */
// export const updateUI = async () => {
//   const req = await fetch('/all');
//   try{
//     const allData = await req.json();
//     document.getElementById('lat').innerHTML = allData[allData.length - 1].lat;

//   }
//   catch(error){
//     console.log("error", error);
//   }
// }
