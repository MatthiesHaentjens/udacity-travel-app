export function openAddTripPopup(event) {

    // Open the popup
    document.getElementById("popup-form").style.display = "block";

}

export function tripDetails(event) {

    // Get the form data
    // const tripType = document.getElementById().value
    // const startingPoint = document.getElementById('starting-point').value
    // const destination = document.getElementById('destination').value
    // const departureDate = document.getElementById('departure-date').value
    // const endDate = document.getElementById('end-date').value

    console.log('I work');

    const tripType = 'planned-trips'
    const startingPoint = 'Amsterdam';
    const destination = 'Moscow';
    const departureDate = '12-08-2020';
    const endDate = '16-08-2020';
    const daysToGo = 26

    // Give form data to createCard
    Client.createCard(tripType, daysToGo, startingPoint, destination, departureDate, endDate);

    // Close the popup
    // document.getElementById("popup-form").style.display = "block";
}


export function createCard(tripType, daysToGo, startingPoint, destination, departureDate, endDate) {

    // Create new DOM elements
    const cards = document.getElementById(tripType)
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
    destinationPic.setAttribute("src", "../images/rotterdam.jpg") // to define based on user input of destination
    destinationPic.setAttribute('class', 'destination-pic')
    travelDetails.setAttribute('class', 'travel-details')
    daysToDeparture.setAttribute('class', 'days-to-departure')
    daysToDeparture.innerHTML = 'Your trip to ' + destination + ' starts in ' + daysToGo + ' days';
    travelLocations.setAttribute('class', 'travel-locations')
    travelLocations.innerHTML = 'Traveling from ' + startingPoint + ' to ' + destination;
    travelTimes.setAttribute('class', 'travel-locations')  
    travelTimes.innerHTML = 'Departing on ' + departureDate + ' and coming back on ' + endDate;
    typicalWeather.setAttribute('class', 'typical-weather')
    typicalWeather.innerHTML = 'The typical weather during your travel period is' // to define typical weather based on destination and travel times
    editButton.setAttribute('class', 'edit-trip-button')
    editButton.innerHTML = 'EDIT TRIP'
    deleteButton.setAttribute('class', 'remove-trip-button')
    deleteButton.onclick = function() {
        this.closest('.travel-card').remove();
    }
    deleteButton.innerHTML = 'REMOVE TRIP'

}

