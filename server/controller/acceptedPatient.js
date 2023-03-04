const AcceptedCouple = require('./../models/acceptedCouple');
const AcceptedChild = require('./../models/acceptedChild');
const AcceptedTrauma = require('./../models/acceptedtrauma');
const transport = require('./../middleware/nodemailer');
const {getMailOptions} = require('./../MailOptions/acceptedMail');

const postAcceptedCouple = async (req, res,) => {
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
    if (req.body.email) {
      try {
        const result = await AcceptedChild.create(req.body);
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
    console.log(req.body)
    if (req.body.email) {
      try {
        const result = await AcceptedTrauma.create(req.body);
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

  module.exports = { postAcceptedCouple, postAcceptedChild, postAcceptedTrauma};