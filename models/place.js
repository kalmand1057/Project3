const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: 'Name required' },
  country: { type: String, required: 'Country required' },
  image: { type: String, required: 'Image url required' },
  descriptLong: { type: String, required: 'description required' },
  geog: { type: Array, required: 'Lat/lng required, in array form: [lat, lng]' },
  budget1: { type: String },
  budget2: { type: String },
  budget3: { type: String },
})

module.exports = mongoose.model('Place', placeSchema)
