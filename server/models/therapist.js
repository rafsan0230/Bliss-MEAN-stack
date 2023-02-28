const { model, Schema } = require('mongoose');

const TherapistSchema = new Schema({
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

const Therapist = model('Therapist', TherapistSchema);
module.exports = Therapist;