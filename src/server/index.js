/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const controller = require('../db/controller/controller');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../../dist/')));
app.use(express.json());

app.post('/routine', (req, res) => {
  controller.saveRoutine(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.data);
    });
});

app.get('/routine', (req, res) => {
  controller.findRoutine(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.data);
    });
});

app.get('/user', (req, res) => {
  controller.getUser(req.body)
    .then((data) => {
      res.send(data.value);
    })
    .catch((err) => {
      res.send(err.data);
    });
});

try {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
} catch (error) {
  console.log('Error reving up servs ma dude');
}
