const mongoose = require('./../db');

const PatientSchema = mongoose.Schema({
      firstName: {
        type: String
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
      },
      dob: {
        type: String,
      },
      gender: {
        type: String
      },
      satisfaction: {
        type: Number
      }
})

module.exports = mongoose.model('Patient', PatientSchema);