// REMOVE-START
const jwt = require('jsonwebtoken');
const Therapist = require('./../models/therapist');
const Patient = require('./../models/patient');

const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';
// REMOVE-END

const authMiddleware = async (req, res, next) => {
  // REMOVE-START
  // extract token from auth headers
  const authHeaders = req.headers['authorization'];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1];

  try {
    // verify & decode token payload,
    const { _id } = jwt.verify(token, SECRET_KEY);
    // attempt to find therapist object and set to req
    const patient = await Patient.findOne({ _id });
    if (!patient) return res.sendStatus(401);
    req.patient = patient;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
  // REMOVE-END
};

module.exports = authMiddleware;