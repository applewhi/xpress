const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

const PORT = process.env.PORT || 4000;
const db = new sqlite3.Database(process.env.TEST_DATABASE || './datbase.sqlite');

app.get('/api/artists', (req, res, next) => {
  db.all('SELECT * FROM Artist', (error, row) => {
    res.status(200).send(row);
  }  
});
