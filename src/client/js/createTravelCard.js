const typeOfTrip = function(value) {

}


const createCard = function(value) {

    // create new DOM elements
    const cards = document.getElementsByClassName('cards')[0]; // to define which card based on user input
    const travelCard = document.createElement('div')
    const destinationPic = document.createElement('img')
    const travelDetails = document.createElement('div')
    const form = document.createElement('form')
    const travelLocations = document.createElement('div')
    const labelFrom1 = document.createElement('label')
    const labelTo1 = document.createElement('label')
    const inputStartingPoint = document.createElement('input')
    const inputDestination = document.createElement('input')
    const travelTimes = document.createElement('div')
    const labelFrom2 = document.createElement('label')
    const labelTo2 = document.createElement('label')
    const inputDepartureDate = document.createElement('input')
    const inputEndDate = document.createElement('input')
    const daysToDeparture = document.createElement('p')
    const typicalWeather = document.createElement('div')
    const saveButton = document.createElement('button')
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    
    // append newly created elements into the DOM
    travelCard.appendChild(destinationPic)
    travelCard.appendChild(travelDetails)
    travelDetails.appendChild(form)
    form.appendChild(travelLocations)
    travelLocations.appendChild(labelFrom1)
    travelLocations.appendChild(inputStartingPoint)
    travelLocations.appendChild(labelTo1)
    travelLocations.appendChild(inputDestination)
    form.appendChild(travelTimes)
    travelTimes.appendChild(labelFrom2)
    travelTimes.appendChild(inputDepartureDate)
    travelTimes.appendChild(labelTo2)
    travelTimes.appendChild(inputEndDate)
    travelDetails.appendChild(daysToDeparture)
    travelDetails.appendChild(typicalWeather)
    travelDetails.appendChild(saveButton)
    travelDetails.appendChild(editButton)
    travelDetails.appendChild(deleteButton)
    cards.appendChild(travelCard)

    // set content and attributes
    travelCard.setAttribute('class', 'travel-card')
    destinationPic.setAttribute("src", "../images/rotterdam.jpg") // to define based on user input of destination
    destinationPic.setAttribute('class', 'destination-pic')
    travelDetails.setAttribute('class', 'travel-details')
    travelLocations.setAttribute('class', 'travel-locations')
    inputStartingPoint.setAttribute('placeholder', 'Traveling from ...')
    inputStartingPoint.setAttribute('id', 'starting-point')
    inputStartingPoint.setAttribute('class', 'form-control')
    inputDestination.setAttribute('placeholder', 'Traveling to ...')
    inputDestination.setAttribute('id', 'destination')
    inputDestination.setAttribute('class', 'form-control')
    labelFrom1.innerHTML = 'From'
    labelTo1.innerHTML = ' To' 
    travelTimes.setAttribute('class', 'travel-locations')
    inputDepartureDate.setAttribute('placeholder', 'Departure date ...')
    inputDepartureDate.setAttribute('id', 'departure-date')
    inputDepartureDate.setAttribute('class', 'form-control')
    inputEndDate.setAttribute('placeholder', 'Up to ...')
    inputEndDate.setAttribute('id', 'end-date')
    inputEndDate.setAttribute('class', 'form-control')
    labelFrom2.innerHTML = 'From'
    labelTo2.innerHTML = ' To'   
    daysToDeparture.setAttribute('class', 'days-to-departure')
    daysToDeparture.innerHTML = 'Your trip to [City] starts in [Days]' // to define the city and number of days based on destination and departure date
    typicalWeather.setAttribute('class', 'typical-weather')
    typicalWeather.innerHTML = 'The typical weather during your travel period is' // to define typical weather based on destination and travel times
    saveButton.innerHTML = 'SAVE TRIP'
    editButton.innerHTML = 'EDIT TRIP'
    deleteButton.innerHTML = 'REMOVE TRIP'

    

}


                    // <div class="travel-card">
                    //     <img class="destination-pic" src="../images/amsterdam.jpg" alt="picture of city">
                    //     <div class="travel-details">
                    //         <form>
                    //             <div class="type-of-trip">
                    //                 <input type="radio" id="planned" name="trip-type" value="upcomming trip">
                    //                 <label for="planned">Upcommig trip</label>
                    //                 <input type="radio" id="wish" name="gender" value="wishlist">
                    //                 <label for="wish">Wishlist</label>
                    //             </div>
                    //             <div class="travel-locations">
                    //                 <label>From</label>
                    //                 <input id="starting-point" class="form-control" type="text" name="starting-point" placeholder="Traveling from ...">
                    //                 <label>To</label>
                    //                 <input id="destination" class="form-control" type="text" name="destination" placeholder="Traveling to ...">
                    //             </div>
                    //             <div class="travel-times">
                    //                 <label>From</label>
                    //                 <input id="departure-date" class="form-control" type="text" name="departure-date" placeholder="Departure date ...">
                    //                 <label>To</label>
                    //                 <input id="end-date" class="form-control" type="text" name="end-date" placeholder="Up to ...">
                    //             </div>
                    //         </form>
                    //         <p class="days-to-departure">Your trip to [City] starts in [Days]</p>
                    //         <div class="typical-weather">
                    //             <p>The typical weather during your travel period is</p>
                    //             <p>Temparature - high [value] - low [value]</p>
                    //             <p>[value]</p>
                    //         </div>
                    //         <button class="save-trip">SAVE TRIP</button>
                    //         <button class="edit-trip-button">EDIT TRIP</button>
                    //         <button class="remove-trip-button">REMOVE TRIP</button>
                    //     </div>
                    // </div>