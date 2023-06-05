/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

try {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
} catch (error) {
  console.log('Error reving up servs ma dude');
}
