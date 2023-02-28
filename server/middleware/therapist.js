const jwt = require('jsonwebtoken');
const { Therapist } = require('../models/therapist');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
    try {
      const check = req.get('Authorization');
      if (check) {
        const token = check.split(' ')[1];
        const { _id } = jwt.verify(token, secret);
        const therapist = await Therapist.findById(_id);
        if (therapist) {
          req.therapist = therapist;
          next();
        } else {
          res.status(401).send('Invalid token');
        }
      } else { 
        res.status(401).send('You are not logged in.');
      }
    } catch (error) {
      res.status(500).send(error.error.message);
      console.log(error);
    }
  };
  
  module.exports = authMiddleware;