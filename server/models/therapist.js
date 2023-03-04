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
      licenseNo: {
        type: String,
        required: true,
      },
      category: {
        type: String
      }
})

module.exports = mongoose.model('Therapist', TherapistSchema);