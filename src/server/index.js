
// 
const dotenv = require('dotenv');
dotenv.config();

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Geonames api
// Still need to figure out how this works instead of calling the urls and api key directly in the client js
// const Geonames = require('geonames.js')

// const geonames = new Geonames({
//   username: process.env.myusername,
//   lan: 'en',
//   encoding: 'JSON'
// });

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

// Callback to debug
function listening() {
  console.log('server running');
  console.log(`running on localhost: ${port}`);
};

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get('/', function (req, res) {
  res.send(projectData);
})

// Post Route, which receives the temperature, date and user response
// and adds data to projectData
app.post('/add', function (req, res) {
    newEntry = {
        tripType: req.body.tripType,
        startingPoint: req.body.startingPoint,
        destination: req.body.destination,
        destinationPicture: req.body.destinationPicture,
        departureDate: req.body.departureDate,
        endDate: req.body.endDate,
        minTemp: req.body.minTemp,
        maxTemp: req.body.ma
    };
    projectData.push(newEntry);
    res.send(projectData);
});