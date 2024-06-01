const pg = require('pg');
const { Client } = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || "postgres://localhost/barter");

module.exports = client;
