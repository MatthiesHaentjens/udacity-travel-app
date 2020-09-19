import { getCoordinates, getWeatherForecast } from "./getLocalWeather";
import { getDestinationPicture } from "./getPicture";

// Setup empty JS object to act as endpoint
const travelData = {};

export function openAddTripPopup(event) {

    // Open the popup
    document.getElementById("popup-form").style.display = "block";

}

export function getTripDetails(event) {

    //Prevent default page reload
    event.preventDefault(); 

    // Get the form data
    travelData['tripType'] = document.querySelector('.trip-checkbox:checked').value
    travelData['startingPoint'] = document.getElementById('starting-point').value
    travelData['destination'] = document.getElementById('destination').value
    travelData['departureDate'] = document.getElementById('departure-date').value
    travelData['endDate'] = document.getElementById('end-date').value
    // travelData['minTemp', 'maxTemp'] =
    // travelData['destinationPicture'] = Client.getDestinationPicture(travelData['destination'])

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
                travelData['destinationPicture']= data['hits'][0]['webformatURL']
                // console.log(travelData)
                return postData('/add', travelData)
            })
            .then((data) => {
                createCard(data)
            })

    } 
    catch (error) {
        console.log('error', error);
    }

    // const tripType = document.querySelector('.trip-checkbox:checked').value;
    // const startingPoint = document.getElementById('starting-point').value;
    // const destination = document.getElementById('destination').value;
    // const departureDate = '12-08-2020';
    // const endDate = '16-08-2020';
    // const destinationPicture = Client.getDestinationPicture(travelData['destination'])
    // const daysToGo = 26

    // console.log(travelData)
    // Give form data to createCard
    // Client.createCard(travelData['tripType'], daysToGo, travelData['startingPoint'], travelData['destination'] , travelData['departureDate'], travelData['endDate'] , travelData['destinationPicture'])
    // console.log(travelData)

    // Close the popup
    document.getElementById("popup-form").style.display = "none";
    document.getElementById("form").reset();
    
}

// export function fetchAllApiData(destination, departureDate, endDate) {
 
    

// }

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


export const createCard = (data) => {

    // const req = await fetch('/all');

    // try {
    //     const data = await req.json();
    //     console.log(data)

    // Create new DOM elements
    const cards = document.getElementById(data.tripType)
    const travelCard = document.createElement('div')
    const destinationPic = document.createElement('img')
    const travelDetails = document.createElement('div')
    const daysToDeparture = document.createElement('div')
    const travelLocations = document.createElement('div')
    const travelTimes = document.createElement('div')
    const typicalWeather = document.createElement('div')
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    
    // Append newly created elements into the DOM
    travelCard.appendChild(destinationPic)
    travelCard.appendChild(travelDetails)
    travelDetails.appendChild(daysToDeparture)
    travelDetails.appendChild(travelLocations)
    travelDetails.appendChild(travelTimes)
    travelDetails.appendChild(typicalWeather)
    travelDetails.appendChild(editButton)
    travelDetails.appendChild(deleteButton)
    cards.appendChild(travelCard)


    // Set content and attributes
    travelCard.setAttribute('class', 'travel-card')
    destinationPic.setAttribute("src", travelData['destinationPicture']) // to define based on user input of destination
    destinationPic.setAttribute('class', 'destination-pic')
    travelDetails.setAttribute('class', 'travel-details')
    daysToDeparture.setAttribute('class', 'days-to-departure')
    daysToDeparture.innerHTML = 'Your trip to ' + travelData['destination'] + ' starts in ' + '[data.daysToGo]' + ' days';
    travelLocations.setAttribute('class', 'travel-locations')
    travelLocations.innerHTML = 'Traveling from ' + travelData['startingPoint'] + ' to ' + travelData['destination'];
    travelTimes.setAttribute('class', 'travel-locations')  
    travelTimes.innerHTML = 'Departing on ' + travelData['departureDate'] + ' and coming back on ' + travelData['endDate'];
    typicalWeather.setAttribute('class', 'typical-weather')
    typicalWeather.innerHTML = 'On your arrival day the temparature is between ' + travelData['minTemp'] + ' - ' + travelData['maxTemp'];
    editButton.setAttribute('class', 'edit-trip-button')
    editButton.innerHTML = 'EDIT TRIP'
    deleteButton.setAttribute('class', 'remove-trip-button')
    deleteButton.onclick = function() {
        this.closest('.travel-card').remove();
    }
    deleteButton.innerHTML = 'REMOVE TRIP'
    // }
    // catch(error) {
    //     console.log("error", error);
    //   }
}

