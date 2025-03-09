## Globetel API

Globetel is a hotel listing API that allows users to filter and sort hotels based on various criteria such as pricing, rating, reviews, category, amenities, and country.

## Features
- List all hotels
- Sort hotels by pricing (low-to-high or high-to-low)
- Sort hotels by rating (high-to-low or low-to-high)
- Sort hotels by reviews (most-to-least or least-to-most)
- Filter hotels by amenities (Spa, Bar, Pool, Restaurant, Gym, Pet Friendly, Parking, Free WiFi)
- Filter hotels by country (France, USA, India, Germany, United Kingdom, Australia, South Africa)
- Filter hotels by category (Mid-Range, Family, Luxury, Boutique, Resort, Budget)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/globetel.git
   ```
2. Navigate to the project directory:
   ```sh
   cd globetel
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   node index.js
   ```
5. The API will be available at:
   ```sh
   http://localhost:3010
   ```

## API Endpoints

### 1. Get all hotels
```http
GET /hotels
```
Returns a JSON response with all available hotels.

### 2. Get hotels sorted by pricing
```http
GET /hotels/sort/pricing?pricing=low-to-high
```
Sorts hotels by pricing from low to high. Change `low-to-high` to `high-to-low` for the reverse order.

### 3. Get hotels sorted by rating
```http
GET /hotels/sort/rating?rating=high-to-low
```
Sorts hotels by rating from high to low. Change `high-to-low` to `low-to-high` for the reverse order.

### 4. Get hotels sorted by reviews
```http
GET /hotels/sort/reviews?reviews=most-to-least
```
Sorts hotels by the number of reviews from most to least. Change `most-to-least` to `least-to-most` for the reverse order.

### 5. Filter hotels by amenity
```http
GET /hotels/filter/amenity?amenity=spa
```
Filters hotels based on the provided amenity. Replace `spa` with any other amenity from the list.

### 6. Filter hotels by country
```http
GET /hotels/filter/country?country=india
```
Filters hotels based on the selected country. Replace `india` with any other country from the list.

### 7. Filter hotels by category
```http
GET /hotels/filter/category?category=luxury
```
Filters hotels based on the selected category. Replace `luxury` with any other category from the list.

## Dependencies
- Express.js






