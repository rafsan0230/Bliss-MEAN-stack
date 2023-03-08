const mongoose = require('./../db');

const PatientSchema = mongoose.Schema({
      typeOfTherapy: {
        type: String
      },
      gender: {
        type: String
      },
      age: {
        type: String
      },
      relationStatus: {
        type: String
      },
      traumaExperience: {
        type:  String
      },
      email: {
        type: String,
      },
      mentalHealthRate: {
        type: String
      },
      sleepCondition: {
        type: String
      },
      language: {
        type: String
      },
      eatingHabit: {
        type: String
      },
      financialState: {
        type: String
      },
      therapistPreference: {
        type: String
      },
      physicalHealth: {
        type: String
      },
      therapyExpreience: {
        type: String
      },
      pres: {
        type: String
      }
})

module.exports = mongoose.model('Patient', PatientSchema);