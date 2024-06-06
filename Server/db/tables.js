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
    password VARCHAR(500) NOT NULL,
    imgUrl VRCHAR,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  );
  CREATE TABLE follows {
    id UUID PRIMARY KEY,
    following_user_id UUID REFERENCES users(id) NOT NULL,
    followed_user_id UUID REFERENCES users(id) NOT NULL,
    created_at TIMESTAMP
  };
  CREATE TABLE posts (
    id UUID PRIMARY KEY,
    user_id REFERENCES users(id) NOT NULL,
    title VARCHAR(500) NOT NULL,
    body TEXT,
    img_url VARCHAR(900),
    created_at TIMESTAMP
  );
  CREATE TABLE listings(
    id UUID PRIMARY KEY,
    user_id REFERENCES users(id) NOT NULL,
    title VARCHAR(500) NOT NULL,
    body TEXT,
    img_url VARCHAR(900),
    zipcode INT,
    created_at TIMESTAMP
  );
  CREATE TABLE post_comments (
    id UUID PRIMARY KEY,
    user_id REFERENCES users(id) NOT NULL,
    post_id REFERENCES posts(id) NOT NULL,
    body TEXT NOT NULL,
    img_url VARCHAR(900),
    created_at TIMESTAMP
  );
  CREATE TABLE listing_comments (
    id UUID PRIMARY KEY,
    user_id REFERENCES users(id) NOT NULL,
    listing_id REFERENCES listings(id) NOT NULL,
    body TEXT NOT NULL,
    img_url VARCHAR(900),
    created_at TIMESTAMP
  );
  `;
  await client.query(SQL);
}

createTables()

module.exports = { 
  dropTables,
  createTables,
}