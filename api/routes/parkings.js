var express = require('express');
var routerParkings = express.Router();
var axios = require('axios')
require("dotenv").config();

/* GET parking listing. */
routerParkings.get('/', async function(req, res, next) {
  try {
    switch (req.query.location) {
      case req.query.status === 'open' && req.query.location:
          const parksOpen = await axios.get(`https://api.yelp.com/v3/businesses/search?categories=parking&location=${req.query.location}&limit=50`, {
              headers: {
                'Authorization': `Bearer ${process.env.Token}`,
              }
            }) 
          const sendInfoOpen = parksOpen.data.businesses.filter(park => park.is_closed === false)
          
          res.status(200).json(sendInfoOpen)
          break;
      case req.query.location != undefined:
          const parksAll = await axios.get(`https://api.yelp.com/v3/businesses/search?categories=parking&location=${req.query.location}&limit=50`, {
            headers: {
              'Authorization': `Bearer ${process.env.Token}`,
            }
          }) 
          res.json(parksAll.data.businesses)  
          break;
      default:
        const parks =  []
        res.status(200).json(parks)
    }
  } catch (error) {
    const parks =  []
    res.status(200).json(parks)
  }
});

module.exports = routerParkings;
