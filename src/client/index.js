import { openAddTripPopup } from './js/createTravelCard.js';
import { getTripDetails } from './js/createTravelCard.js';
import { createCard } from './js/createTravelCard.js';
// import { performAction } from './js/getLocalWeather.js';
import { getCoordinates } from './js/getLocalWeather.js';
import { getWeatherForecast } from './js/getLocalWeather.js';
import { getHistoricalWeather } from './js/getLocalWeather.js';
import { getDestinationPicture } from './js/getPicture.js'
import { postData } from './js/createTravelCard.js';
// import { updateUI } from './js/getLocalWeather.js';


import './styles/styles.scss';

import logo from './images/logo-tripplist.png';

export {
    openAddTripPopup,
    getTripDetails,
    createCard,
    // performAction,
    getCoordinates,
    getWeatherForecast,
    getHistoricalWeather,
    getDestinationPicture,
    postData
    // updateUI
}