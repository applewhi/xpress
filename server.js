const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;
const db = new sqlite.Database(process.env.TEST_DATABASE || './datbase.sqlite');
