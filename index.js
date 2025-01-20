const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const {createItinerary, getItinerary} = require('./controllers/dataController');
const {getFlights, getHotels, getSites, getFlighByOriginAndDestination,getHotelsByLocation,getSitesByLocation} = require('./controllers/itineraryController');
const { sequelize } = require('./models');

app.use(cors());
app.use(express.json());

app.post('/itinerary', createItinerary);
app.get('/itinerary/:id', getItinerary);

app.get('/data/getFlightsbyOriginAndDestination', getFlighByOriginAndDestination);
app.get('/data/flights', getFlights);
app.get('/data/hotels', getHotels);
app.get('/data/getHotelsbyLocation', getHotelsByLocation);
app.get('/data/sites', getSites);
app.get('/data/getSitesbyLocation', getSitesByLocation);

sequelize.authenticate().then(()=>{
    console.log('Database connected');
}).catch(error=>{
    console.error("Unable to connect to database", error);
});

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})