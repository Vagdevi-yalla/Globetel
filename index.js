const express = require('express');
const { resolve } = require('path');
const hotels = require('./hotels');
let cors = require('cors');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(cors());

//display all hotels

app.get('/hotels', (req, res) => {
  res.json({ hotels: hotels });
});

//hotels sorted by price

function priceHighToLow(hotel1, hotel2) {
  return hotel2.price - hotel1.price;
}

function priceLowToHigh(hotel1, hotel2) {
  return hotel1.price - hotel2.price;
}

app.get('/hotels/sort/pricing', (req, res) => {
  const pricing = req.query.pricing;
  const HotelInfo = hotels.slice();
  if (pricing === 'high-to-low') {
    HotelInfo.sort(priceHighToLow);

    res.json(HotelInfo);
  } else if (pricing === 'low-to-high') {
    HotelInfo.sort(priceLowToHigh);

    res.json(HotelInfo);
  }
});

//hotels sorted by rating

function ratingHighToLow(hotel1, hotel2) {
  return hotel2.rating - hotel1.rating;
}

function ratingLowToHigh(hotel1, hotel2) {
  return hotel1.rating - hotel2.rating;
}

app.get('/hotels/sort/rating', (req, res) => {
  const rating = req.query.rating;
  const HotelInfo = hotels.slice();
  if (rating === 'high-to-low') {
    HotelInfo.sort(ratingHighToLow);
    res.json(HotelInfo);
  } else if (rating === 'low-to-high') {
    HotelInfo.sort(ratingLowToHigh);
    res.json(HotelInfo);
  }
});

//hotels sorted by reviews

function rewiewsMostToLeast(hotel1, hotel2) {
  return hotel2.reviews - hotel1.reviews;
}

function reviewsLeastToMost(hotel1, hotel2) {
  return hotel1.reviews - hotel2.reviews;
}

app.get('/hotels/sort/reviews', (req, res) => {
  const reviews = req.query.reviews;
  const HotelInfo = hotels.slice();
  if (reviews === 'most-to-least') {
    HotelInfo.sort(rewiewsMostToLeast);
    res.json(HotelInfo);
  } else if (reviews === 'least-to-most') {
    HotelInfo.sort(reviewsLeastToMost);
    res.json(HotelInfo);
  }
});

//hotels based on the Hotel Amenity

function filterByAmenity(hotel, amenity) {
  return hotel.amenity.toLowerCase() === amenity;
}

app.get('/hotels/filter/amenity', (req, res) => {
  const amenity = req.query.amenity;
  const result = hotels.filter((hotel) => filterByAmenity(hotel, amenity));
  res.json(result);
});

//hotels based on country

function filterByCountry(hotel, country) {
  return hotel.country.toLowerCase() === country;
}

app.get('/hotels/filter/country', (req, res) => {
  const country = req.query.country;
  const result = hotels.filter((hotel) => filterByCountry(hotel, country));
  res.json(result);
});

//hotels based on category

function filterByCategory(hotel, category) {
  return hotel.category.toLowerCase() === category;
}

app.get('/hotels/filter/category', (req, res) => {
  const category = req.query.category;
  const result = hotels.filter((hotel) => filterByCategory(hotel, category));
  res.json(result);
});

//PORT
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
