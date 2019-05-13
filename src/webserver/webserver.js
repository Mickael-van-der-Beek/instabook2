'use strict';

// Importing Express.js
const express = require('express');
const bodyParser = require('body-parser');
const userTable = require('../database/tables/user-table');

// Created a webserver
const app = express();

app.use(bodyParser.json());

// Get all users route
// req is request
// res is response
app.get('/users', (req, res, next) => {
  console.log('GET ALL USERS');
  res.json({});
});

// Create one user route
app.post('/users', async (req, res, next) => {
  console.log('CREATE ONE USER');
  const data = req.body;
  const user = (await userTable.createRow(data))[0];
  res.json(user);
});

// Get one user route
app.get('/users/:id', (req, res, next) => {
  console.log('GET ONE USER');
  console.log(req.params.id);
  res.json({});
});

// Creating a port variable
// Value is expected to be an integer between 1 and 2^16 - 1
const port = 2338;

// Make the webserver listen on a port
app.listen(port, err => {
  if (err) {
    throw err;
  }

  console.log(`Webserver is listening on http://localhost:${port}/`);
});
