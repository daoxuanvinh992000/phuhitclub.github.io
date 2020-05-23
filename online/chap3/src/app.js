const express = require('express');
const app = express();

const config = require('./configs/config');

config(app);

module.exports = app;