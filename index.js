const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


const client = require("./db/client");
client.connect();
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on ${port}`));