const Patient = require('./../models/patient');


const getPatients = async (req, res) => {
  console.log("some");
  try {
    const patient = await Patient.find();
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}

const postPatient = async (req, res,) => {
  console.log(req.body)
  if (req.body.email) {
    try {
      const result = await Patient.create(req.body);
      res.status(201);
      res.send(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }else{
    res.status(400).send('Insufficient data');
  }
}

module.exports = { getPatients, postPatient };