'use strict';

const SQL = require('pg-template-tag').default;
const database = require('../database');

const createTable = () => database.query(`
  CREATE TABLE
    users
    (
      id SERIAL PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL
    );
`);

const createRow = data => database.query(SQL`
  INSERT INTO
    users
    (
      first_name,
      last_name,
      email
    )
  VALUES
    (
      ${data.firstName},
      ${data.lastName},
      ${data.email}
    )
  RETURNING
    *;
`);

module.exports = {
  createRow
};
