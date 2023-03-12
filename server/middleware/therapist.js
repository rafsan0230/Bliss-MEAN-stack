const jwt = require('jsonwebtoken');
const Therapist = require('./../models/therapist');
const Patient = require('./../models/patient');

const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';

const authMiddleware = async (req, res, next) => {
  const authHeaders = req.headers['authorization'];
  
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, SECRET_KEY);
    const therapist = await Therapist.findOne({ _id });
    if (!therapist) return res.sendStatus(401);
    req.therapist = therapist;
    next();
  } catch (error) {
    console.log("some")
    res.sendStatus(401);
  }
};

module.exports = authMiddleware;