const Patient = require('./../models/patient');
const transport = require('./../middleware/nodemailer');
const {getMailOptions} = require('./../MailOptions/acceptedMail');



const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
}
const getCouplePatients = async (req, res) => {
  try {
    const patients = await Patient.find({ typeOfTherapy: "Couple" , pres :  null  });
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
}
const getChildPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ typeOfTherapy: "For my child",  pres :  null   });
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
}

const getIndividualPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ typeOfTherapy: "Individual",  pres :  null   });
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
}

const getAcceptedCouple = async (req, res) => {
  try {
    const patient = await Patient.find({ typeOfTherapy: "Couple" , pres : { $ne : null } });
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}

const getAcceptedChild = async (req, res) => {
  try {
    const patient = await Patient.find({ typeOfTherapy: "For my child" , pres : { $ne : null } });
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}

const getAcceptedIndividual = async (req, res) => {
  try {
    const patient = await Patient.find({ typeOfTherapy: "Individual" , pres : { $ne : null } });
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}




const postPatient = async (req, res,) => {
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

const findPatientbyID = async (req, res) => {
    const id = req.params.id;
    try {
      const patient = await Patient.findById(id);
      res.status(201);
      res.send(patient);
    }
    catch (error) {
        res.send(error);
    }
  }

  const postPrescription = async (req, res,) => {
    const id = req.body._id
    const filter= {_id : id}
    const update = {$set: {pres : req.body.pres}}

    const patient = await Patient.findOneAndUpdate(filter, update, {
      new:true
    })
    if (req.body.email) {
      try {
        // const result = await Patient.create(req.body);
        transport(getMailOptions(req.body.email, req.body.pres));
        // res.status(201);
        res.send(patient);
      } catch (error) {
        console.log(error);
      }
    }else{
      res.status(400).send('Insufficient data');
    }
  }

  const deletePatient = async (req, res) => {
    const id = req.params.id;
    try {
      const patient = await Patient.findByIdAndDelete(id);
      res.status(201);
      res.send(patient);
    }
    catch (error) {
        res.send(error);
    }
  }

module.exports = { getPatients, postPatient, getIndividualPatients, getChildPatients, getCouplePatients, getAcceptedCouple, getAcceptedChild, getAcceptedIndividual, findPatientbyID, postPrescription, deletePatient};