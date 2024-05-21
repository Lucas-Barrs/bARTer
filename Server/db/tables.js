const client = require('./client');
const uuid = require('uuid');

//Drop if exists to avoid duplicates
const dropTables = async () => {
  const SQL = `
  DROP TABLE IF EXISTS comments;
  DROP TABLE IF EXISTS posts CASCADE;
  DROP TABLE IF EXISTS users CASCADE:
  `;
  await client.query(SQL);
};

//Create tables 
const createTables = async () => {
  const SQL = `
  CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(500) UNIQUE,
    email VARCHAR(500) UNIQUE,
    password VARCHAR(500) NOT NULL
  );
  CREATE TABLE posts (
    id UUID PRIMARY KEY,
    user_id REFERENCES users(id) NOT NULL,
    title VARCHAR(500) NOT NULL,
    details TEXT,
    img_url VARCHAR(900)
  );
  CREATE TABLE comments (
    id UUID PRIMARY KEY,
    user_id REFERENCES users(id) NOT NULL,
    post_id REFERENCES posts(id) NOT NULL,
    details TEXT NOT NULL,
    img_url VARCHAR(900)
  );
  `;
  await client.query(SQL);
}

module.exports = { 
  dropTables,
  createTables,
}