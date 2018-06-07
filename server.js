const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

const PORT = process.env.PORT || 4000;
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');


app.get('/api/artists', (req, res, next) => {
  db.all('SELECT * FROM Artist WHERE is_currently_employed = 1', (error, rows) => {
    if (error) {
      next(error);
    } else {
        res.status(200).send({artists: rows});
      }
  });
});

app.param('artistId', (req, res, next, id) => {
  if (Number(id))
})

//FIND ARTIST BY ID HELPER FUNCTION
const getArtistById = function('artistId',statusCode){
  db.get(`SELECT * FROM Artist WHERE Artist.id = $artistId`, {$artistId: artistID},
    (error, row) => {
    if (error) {
      next(error)
    } else if (row) {
        res.status(statusCode);
      } else {
        res.status(404).send();
      }
    });
}

app.post('/api/artists/', (req, res, next) => {
  const artist = req.body.artist;

  if (!artist.name || !artist.date_of_birth || !artist.biography) {
    res.status(400).send();
  } else {
    const sqlIns = `INSERT INTO Artist (name, date_of_birth, biography,
      is_currently_employed) VALUES ($name, $dob, $bio)`;
      db.run(sqlIns, {
        $name: artist.name,
        $dob: artist.dateOfBirth,
        $bio: artist.biography
      }, err => {
        if (error) {
          next(error);
        } else {
            getArtistById(this.ID, 201);
            res.send(row);
            }
          });
        }
    });

app.get('/api/artists/:artistId', (req, res, next) => {
  getArtistById(Number(req.params.id, 200));
  res.send(row);
});

app.put('/api/artists/:artistId', (req, res, next) => {
  const artist = req.body.artist
  if (!artist.name || !artist.date_of_birth || !artist.biography) {
      res.status(400).send();
  }
  getArtistById(Number(req.params.id, 200))
  db.run(`UPDATE Artist SET name = $name, date_of_birth = $dob, biography =
  $bio, is_currently_employed = $isEmployed`,{
    $name: res.body.artist.name
  });
});
