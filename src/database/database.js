'use strict';

const pg = require('pg');

const pool = pg.Pool({
  connectionString: 'postgres://postgres:postgres@localhost:5432/instabook'
});

const query = async sql => (await pool.query(sql)).rows;

module.exports = {
  query
};
