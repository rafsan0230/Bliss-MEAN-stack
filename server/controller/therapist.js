// REMOVE-START
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Therapist = require('./../models/therapist');
const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';
// REMOVE-END

const login = async (req, res) => {
  // REMOVE-START
  const { email, password } = req.body;
  try {
    const therapist = await Therapist.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, therapist.password);
    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ _id: therapist._id }, SECRET_KEY);
    res.status(200).send({ accessToken });
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
  // REMOVE-END
};

module.exports = { login };