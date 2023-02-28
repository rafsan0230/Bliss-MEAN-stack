const mongoose = require('./../db');

const TherapistSchema = mongoose.Schema({
      name: {
        type: String
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
      },
      category: {
        type: String
      }
})

module.exports = mongoose.model('Therapist', TherapistSchema);