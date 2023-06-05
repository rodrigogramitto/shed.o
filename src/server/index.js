/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../../dist/index.html')));
app.use(express.json());

try {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
} catch (error) {
  console.log('Error reving up servs ma dude');
}
