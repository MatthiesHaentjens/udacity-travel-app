import { getCoordinates, getWeatherForecast } from "./getLocalWeather";
import { getDestinationPicture } from "./getPicture";
import { daysToGo } from "./daysToGo.js";

// Setup empty JS object to act as endpoint to collect all form and api data
const travelData = {};

export function openAddTripPopup(event) {

    // Open the popup
    document.getElementById("popup-form").style.display = "block";

}

export function getTripDetails(event) {

    // Prevent default page reload
    event.preventDefault(); 

    // Get the form data
    travelData['tripType'] = document.querySelector('.trip-checkbox:checked').value
    travelData['startingPoint'] = document.getElementById('starting-point').value
    travelData['destination'] = document.getElementById('destination').value
    travelData['departureDate'] = document.getElementById('departure-date').value
    travelData['endDate'] = document.getElementById('end-date').value

    // Calculate days to go
    travelData['daysToGo'] = Client.daysToGo(travelData['departureDate'])

    try {
        getCoordinates(travelData['destination'])
            .then((data) => {
                const lat = data.geonames[0].lat
                const lng = data.geonames[0].lng
                return getWeatherForecast(lat,lng)
            })
            .then((data) => {
                travelData['minTemp'] = data['data'][0]["min_temp"]
                travelData['maxTemp'] = data['data'][0]["max_temp"]
                return getDestinationPicture(travelData['destination'])
            })
            .then((data) => {
                if (data['hits'].length > 0) {
                    travelData['destinationPicture'] = data['hits'][0]['webformatURL']
                }
                else { 
                    travelData['destinationPicture'] = '../images/palm-trees.jpg'
                }

                return postData('/add', 
                {tripType:travelData.tripType,
                    startingPoint:travelData.startingPoint,
                    destination:travelData.destination,
                    destinationPicture:travelData.destinationPicture,
                    departureDate:travelData.departureDate,
                    daysToGo:travelData.daysToGo,
                    endDate:travelData.endDate,
                    minTemp:travelData.minTemp,
                    maxTemp:travelData.maxTemp })
            })
            .then(() => {
                createCard()
            })

    } 
    catch (error) {
        console.log('error', error);
    }

    document.getElementById("popup-form").style.display = "none";
    document.getElementById("form").reset();
    
}

/* Function to POST data */
export const postData = async ( url = '', data = {}) => {
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
      const data = await res.json();
      return data;
    }
    catch(error) {
      console.log("error", error);
    }
  }


export const createCard = async () => {

    const req = await fetch('/all');

    try {

        const data = await req.json();
        console.log(data)

        // Create new DOM elements
        const cards = document.getElementById(data[data.length - 1]['tripType'])
        const travelCard = document.createElement('div')
        const destinationPic = document.createElement('img')
        const travelDetails = document.createElement('div')
        const daysToDeparture = document.createElement('div')
        const travelLocations = document.createElement('div')
        const travelTimes = document.createElement('div')
        const typicalWeather = document.createElement('div')
        const deleteButton = document.createElement('button')
        
        // Append newly created elements into the DOM
        travelCard.appendChild(destinationPic)
        travelCard.appendChild(travelDetails)
        travelDetails.appendChild(daysToDeparture)
        travelDetails.appendChild(travelLocations)
        travelDetails.appendChild(travelTimes)
        travelDetails.appendChild(typicalWeather)
        travelDetails.appendChild(deleteButton)
        cards.appendChild(travelCard)


        // Set content and attributes
        travelCard.setAttribute('class', 'travel-card')
        destinationPic.setAttribute("src", data[data.length - 1]['destinationPicture'])
        destinationPic.setAttribute('class', 'destination-pic')
        travelDetails.setAttribute('class', 'travel-details')
        daysToDeparture.setAttribute('class', 'days-to-departure')
        daysToDeparture.innerHTML = 'Your trip to ' + data[data.length - 1]['destination'] + ' starts in ' + data[data.length - 1]['daysToGo'] + ' days';
        travelLocations.setAttribute('class', 'travel-locations')
        travelLocations.innerHTML = 'Traveling from ' + data[data.length - 1]['startingPoint'] + ' to ' + data[data.length - 1]['destination'];
        travelTimes.setAttribute('class', 'travel-locations')  
        travelTimes.innerHTML = 'Departing on ' + data[data.length - 1]['departureDate'] + ' and coming back on ' + data[data.length - 1]['endDate'];
        typicalWeather.setAttribute('class', 'typical-weather')
        typicalWeather.innerHTML = 'On your arrival day the temparature is between ' + data[data.length - 1]['minTemp'] + ' - ' + data[data.length - 1]['maxTemp'];
        deleteButton.setAttribute('class', 'remove-trip-button')
        deleteButton.onclick = function() {
            postData('/delete', {id:data[data.length - 1]['id']})
            this.closest('.travel-card').remove();
        }
        deleteButton.innerHTML = 'REMOVE TRIP'
    }
    catch(error) {
        console.log("error", error);
      }
}

