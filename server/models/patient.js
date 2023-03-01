const mongoose = require('./../db');

const PatientSchema = mongoose.Schema({
      typeOfTherapy: {
        type: String
      },
      email: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true,
      },
      accidentHistory: {
        type: String
      }
})

module.exports = mongoose.model('Patient', PatientSchema);