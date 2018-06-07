const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

const PORT = process.env.PORT || 4000;
const db = new sqlite3.Database(process.env.TEST_DATABASE || './datbase.sqlite');

app.get('/api/artists', (req, res, next) => {
  db.all('SELECT * FROM Artist WHERE is_currently_employed = 1', (error, rows) => {
    if (error) {
      next(error);
    } else {
        res.status(200).send({artists: rows});
      }
  });
});

app.post('/api/artists/', (req, res, next) => {
  db.run(`INSERT INTO Artist (name, date_of_birth, biography,
  is_currently_employed) VALUES (req.body.name,
    req.body.date_of_birth, req.body.biography,
    req.body.is_currently_employed)`, err => {
      if (error) {
        next(error);
      } else {
          res.status(201).send({artist: this.lastID});
        }
    });
});
