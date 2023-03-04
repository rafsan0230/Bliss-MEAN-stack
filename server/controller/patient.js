const Patient = require('./../models/patient');
const PatientCouple = require('./../models/patientCouple');
const PatientChild = require('./../models/patientChild');
const PatientTrauma = require('./../models/PatientTrauma');



const getPatients = async (req, res) => {
  try {
    const patient = await Patient.find();
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}
const getCouplePatients = async (req, res) => {
  try {
    const patientCouple = await PatientCouple.find();
    res.status(201);
    res.send(patientCouple);
  }
  catch (error) {
      res.send(error);
  }
}
const getChildPatients = async (req, res) => {
  try {
    const patientChild = await PatientChild.find();
    res.status(201);
    res.send(patientChild);
  }
  catch (error) {
      res.send(error);
  }
}
const getTraumaPatients = async (req, res) => {
  try {
    const patientTrauma = await PatientTrauma.find();
    res.status(201);
    res.send(patientTrauma);
  }
  catch (error) {
      res.send(error);
  }
}




const postPatient = async (req, res,) => {
  if (req.body.email) {
    try {
      const result = await Patient.create(req.body);
      console.log(req.body)
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
const postCouplePatient = async (req, res,) => {
  if (req.body.email) {
    try {
      const result = await PatientCouple.create(req.body);
      console.log(req.body)
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
const postChildPatient = async (req, res,) => {
  if (req.body.email) {
    try {
      const result = await PatientChild.create(req.body);
      console.log(req.body)
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
const postTraumaPatient = async (req, res,) => {
  console.log(req.body)
  if (req.body.email) {
    try {
      const result = await PatientTrauma.create(req.body);
      console.log(req.body)
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


const deleteTraumaPatient = async (req, res) => {
  const id = req.params.id;
  try {
    const patient = await PatientTrauma.findByIdAndDelete(id);
    console.log(patient)
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}
const deleteCouplePatient = async (req, res) => {
  const id = req.params.id;
  try {
    const patient = await PatientCouple.findByIdAndDelete(id);
    console.log(patient)
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}
const deleteChildPatient = async (req, res) => {
  const id = req.params.id;
  try {
    const patient = await PatientChild.findByIdAndDelete(id);
    console.log(patient)
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}

const findChildPatientbyID = async (req, res) => {
  const id = req.params.id;
  try {
    const patient = await PatientChild.findById(id);
    console.log(patient)
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}


module.exports = { getPatients, postPatient, postTraumaPatient, postChildPatient, postCouplePatient, getTraumaPatients, getChildPatients, getCouplePatients, deleteTraumaPatient, deleteChildPatient, deleteCouplePatient};