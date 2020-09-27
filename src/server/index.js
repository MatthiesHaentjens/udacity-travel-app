
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
const projectData = [];

app.get('/all', function (req, res) {
  res.send(projectData);
})

// Post Route, which receives the temperature, date and user response
// and adds data to projectData
app.post('/add', function (req, res) {
  console.log(req)
    newEntry = {
        tripType: req.body.tripType,
        startingPoint: req.body.startingPoint,
        destination: req.body.destination,
        destinationPicture: req.body.destinationPicture,
        departureDate: req.body.departureDate,
        endDate: req.body.endDate,
        minTemp: req.body.minTemp,
        maxTemp: req.body.maxTemp,
        id: projectData.length === 0 ? 1 : projectData[projectData.length - 1].id + 1 
    };
    projectData.push(newEntry);
    
    // projectData['tripType'] = req.body.tripType,
    // projectData['startingPoint'] = req.body.startingPoint,
    // projectData['destination'] = req.body.destination,
    // projectData['destinationPicture'] = req.body.destinationPicture,
    // projectData['departureDate']= req.body.departureDate,
    // projectData['endDate'] = req.body.endDate,
    // projectData['minTemp'] = req.body.minTemp,
    // projectData['maxTemp'] = req.body.maxTemp,
    // // projectData['id'] = projectData.length === 0 ? 1 : projectData[projectData.length].id + 1
    res.send(projectData);
    console.log(projectData)
    
});

app.post('/delete', function (req,res) {
  // console.log(req)
  // const id = req.body.id
  // const record = projectData.find(req.body.id)
  // console.log(record)
  projectData.splice(projectData.findIndex(x => x.id === req.body.id), 1)
  res.send(projectData);
  console.log(projectData)
})

// To do
// Set webpack up to also run my server file
// Set a days to go function
// Set up my delete route
// Set up a radio button instead of a checkbox - Check
// Set error messages
  // Date format
  // Destination
// Style my travel card
// Prepare a custom readme
// Set API credentials in the .env file
// Set up a function to move trips to memory lane
// Clean up code