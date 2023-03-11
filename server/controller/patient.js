const Patient = require('./../models/patient');
const PatientCouple = require('./../models/patientCouple');
const PatientChild = require('./../models/patientChild');
const PatientTrauma = require('./../models/PatientTrauma');



const getPatients = async (req, res) => {
  try {
    console.log(req.category)
    const cat = req.typeOfTherapy;
    const patients = await Patient.find({ category: cat });
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
}
const getCouplePatients = async (req, res) => {
  const therapistType = req.body.typeOfTherapy;
  try {
    console.log(therapistType)
    const patients = await Patient.find({ typeOfTherapy: therapistType });
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
}
const getChildPatients = async (req, res) => {
  const therapistType = req.body.typeOfTherapy;
  try {
    console.log(therapistType)
    const patients = await Patient.find({ typeOfTherapy: therapistType });
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
}
const getTraumaPatients = async (req, res) => {
  const therapistType = req.body.typeOfTherapy;
  try {
    console.log(therapistType)
    const patients = await Patient.find({ typeOfTherapy: therapistType });
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send(error);
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
const findCouplePatientbyID = async (req, res) => {
  const id = req.params.id;
  try {
    const patient = await PatientCouple.findById(id);
    console.log(patient)
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}
const findTraumaPatientbyID = async (req, res) => {
  const id = req.params.id;
  try {
    const patient = await PatientTrauma.findById(id);
    console.log(patient)
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}


module.exports = { getPatients, postPatient, getTraumaPatients, getChildPatients, getCouplePatients, deleteTraumaPatient, deleteChildPatient, deleteCouplePatient, findChildPatientbyID, findCouplePatientbyID, findTraumaPatientbyID};