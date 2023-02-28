const { Therapist } = require('../models/therapist');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkTherapist = await Therapist.find({ email });
    if (!checkTherapist.length) {
      res.status(401).send('There is no account with this email.');
    } else {
      const therapist = checkTherapist[0];
      if (bcrypt.compareSync(password, therapist.password)) {
        const projection = { _id: 1, email: 1, firstName: 1, lastName: 1 };
        const therapistToSend = await Therapist.findById(therapist._id, projection);
        const token = jwt.sign({ _id: therapist._id }, secret);
        res.setHeader('Authorization', 'Bearer ' + token);
        res.status(201).send(therapistToSend);
      } else {
        res.status(401).send('Invalid password.');
      }
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

module.exports = { login };