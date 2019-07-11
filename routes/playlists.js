const express = require('express');
const router = express.Router();

const db = require('../db/db');

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
   extended: true
}));

// en tant qu'utilisateur, je veux pouvoir créer une nouvelle playlist.

router.post('/playlists', (req, res) => {
   const formData = req.body;
   db.query('INSERT INTO playlists SET ?', formData, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de la sauvegarde d'une nouvelle playlist");
         return
      }
      if (!results) {
         res.status(400).send();
         return;
      }
      db.query('SELECT * FROM playlists WHERE id = ?', results.insertId, (err, results) => {
         if (err) {
            res.status(500).send();
            return;
         }
         res.status(201).send(results[0]);
      });
   });
});

// en tant qu'utilisateur, je veux pouvoir consulter une playlist en renseignant son id dans l'url.
// en tant qu'utilisateur, je veux créer et affecter un morceau à une playlist.
// en tant qu'utilisateur, je veux lister tous les morceaux d'une playlist.
// en tant qu'utilisateur, je veux pouvoir supprimer une playlist.
// en tant qu'utilisateur, je veux pouvoir modifier une playlist.
// en tant qu'utilisateur, je veux supprimer un morceau d'une playlist.
// en tant qu'utilisateur, je veux modifier un morceau d'une playlist.


module.exports = router;