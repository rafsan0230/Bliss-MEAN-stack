const AcceptedCouple = require('./../models/acceptedCouple');
const AcceptedChild = require('./../models/acceptedChild');
const AcceptedTrauma = require('./../models/acceptedtrauma');
const transport = require('./../middleware/nodemailer');
const {getMailOptions} = require('./../MailOptions/acceptedMail');
const PatientTrauma = require('../models/PatientTrauma');
const PatientChild = require('../models/patientChild');
const PatientCouple = require('../models/patientCouple');
const { findById } = require('./../models/acceptedCouple');

const getAcceptedCouple = async (req, res) => {
  try {
    const patient = await AcceptedCouple.find();
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}

const getAcceptedChild = async (req, res) => {
  try {
    const patient = await AcceptedChild.find();
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}

const getAcceptedTrauma = async (req, res) => {
  try {
    const patient = await AcceptedTrauma.find();
    res.status(201);
    res.send(patient);
  }
  catch (error) {
      res.send(error);
  }
}

const postAcceptedCouple = async (req, res,) => {
    console.log("from controller",req.body)
    const id = req.body._id
    const filter= {_id : id}
    const update = {$set: {pres : req.body.pres}}

    const patient = await PatientCouple.findOneAndUpdate(filter, update, {
      new:true
    })


    if (req.body.email) {
      try {
        const result = await AcceptedCouple.create(req.body);
        //console.log(getMailOptions(req.body.email))
        transport(getMailOptions(req.body.email));

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


  const postAcceptedChild = async (req, res,) => {

    console.log("from controller",req.body)
    const id = req.body._id
    const filter= {_id : id}
    const update = {$set: {pres : req.body.pres}}

    const patient = await PatientChild.findOneAndUpdate(filter, update, {
      new:true
    })

    if (req.body.email) {
      try {
        const result = await AcceptedChild.create(req.body);
        transport(getMailOptions(req.body.email));
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


  const postAcceptedTrauma = async (req, res,) => {
    console.log("from controller",req.body)
    const id = req.body._id
    const filter= {_id : id}
    const update = {$set: {pres : req.body.pres}}

    const patient = await PatientTrauma.findOneAndUpdate(filter, update, {
      new:true
    })
   


    if (req.body.email) {
      try {
        const result = await AcceptedTrauma.create(req.body);
        transport(getMailOptions(req.body.email));
        // console.log(req.body.data)
        res.status(201);
        res.send(patient);
      } catch (error) {
        console.log(error);
      }
    }else{
      res.status(400).send('Insufficient data');
    }
  }

  module.exports = { postAcceptedCouple, postAcceptedChild, postAcceptedTrauma, getAcceptedCouple, getAcceptedChild, getAcceptedTrauma};