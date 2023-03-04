const mongoose = require('./../db');

const AcceptedChildSchema = mongoose.Schema({
      typeOfTherapy: {
        type: String
      },
      gender: {
        type: String,
      },
      age: {
        type: String,
      },
      relationStatus: {
        type: String
      },
      traumaExperience: {
        type: String
      },
      email: {
        type: String,
      },
      mentalHealthRate: {
        type: Number
      }
})

module.exports = mongoose.model('AcceptedChild', AcceptedChildSchema);