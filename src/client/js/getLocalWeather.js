/* Global Variables */

// Personal API Key for Geonames API
const baseURL = 'http://api.geonames.org/searchJSON?q=';
const apiKeyGeoNames = 'matthies'


// Event listener to add function to existing HTML DOM element
document.getElementById('get-weather').addEventListener('click', performAction);

/* Function called by event listener */
export async function performAction(e) {
    const city = 'Amsterdam'
    const country = 'NL'
    const data = await Client.getCoordinates(baseURL, city, country, apiKeyGeoNames);
    console.log(data)
    await Client.postData('/add', {lat:data.geonames[0].lat});
    await Client.updateUI();
}

/* Function to GET Web API Data*/
export const getCoordinates = async (baseURL, city, country, apiKeyGeoNames)=>{
    const res = await fetch(baseURL+city+'&country='+country+'&maxRows=1'+'&username='+apiKeyGeoNames);
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
    document.getElementById('lat').innerHTML = allData[allData.length - 1].lat;

  }
  catch(error){
    console.log("error", error);
  }
}

// Geonames response
// {"totalResultsCount":883,"geonames":
//     [{"adminCode1":"07",
//     "lng":"4.88969",
//     "geonameId":2759794,
//     "toponymName":"Amsterdam",
//     "countryId":"2750405",
//     "fcl":"P",
//     "population":741636,
//     "countryCode":"NL",
//     "name":"Amsterdam",
//     "fclName":"city, village,...",
//     "adminCodes1":{"ISO3166_2":"NH"},
//     "countryName":"Netherlands",
//     "fcodeName":"capital of a political entity",
//     "adminName1":"North Holland",
//     "lat":"52.37403",
//     "fcode":"PPLC"}]
// }