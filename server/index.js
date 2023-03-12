const express = require('express');
const cors = require('cors');
const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3001;
const router = require('./router');

const corsConfig = {
  origin: 'http://localhost:4200',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

const server = app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`something went wrong! ${err}`); 
  } else {
    console.log(`Server (JWT) is listening on port ${SERVER_PORT}!`); 
  }
});

module.exports = server;
