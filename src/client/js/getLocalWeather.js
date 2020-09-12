/* Global Variables */

// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const OpenWeatherApiKey = '&appid=1259969657dfbfc713f6f6cb7caa2d64'
// const apiKey = '&appid=1259969657dfbfc713f6f6cb7caa2d64/&units=imperial';


// Event listener to add function to existing HTML DOM element
document.getElementById('get-weather').addEventListener('click', performAction);

/* Function called by event listener */
export async function performAction(e) {
    const city = 'London'
    const country = 'UK'
    // const startDate = 1369728000
    // const endDate = 1369789200
    const data = await Client.getWheather(baseURL, city, country, OpenWeatherApiKey);
    await Client.postData('/add', {temp:data.main.temp});
    await Client.updateUI();
}

/* Function to GET Web API Data*/
export const getWheather = async (baseURL, city, country, OpenWeatherApiKey)=>{
    const res = await fetch(baseURL+city+','+country+OpenWeatherApiKey);
    console.log(res)
    try {
      const data = await res.json();
      return data;
    }
    catch(error) {
      console.log("error", error);
    }
    console.log(data);
}

/* Function to POST data */
export const postData = async ( url = '', data = {})=>{
    const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
    });
    try {
      const newData = await res.json();
      return newData;
    }
    catch(error) {
      console.log("error", error);
    }
  }

/* Function to GET Project Data */
export const updateUI = async () => {
  const req = await fetch('/all');
  try{
    const allData = await req.json();
    document.getElementById('temp').innerHTML = allData[allData.length - 1].temp;

  }
  catch(error){
    console.log("error", error);
  }
}