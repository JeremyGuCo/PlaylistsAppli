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

router.get('/playlists/:id', (req, res) => {
   const idPlaylist = req.params.id;
   db.query('SELECT * FROM playlists WHERE id = ?', idPlaylist, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de la récupération d'une playlist");
         return;
      }
      if (!results.length) {
         res.status(404).send("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

// en tant qu'utilisateur, je veux créer et affecter un morceau à une playlist.

router.post('/tracks', (req, res) => {
   const formData = req.body;
   db.query('INSERT INTO tracks SET ?', formData, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de la sauvegarde d'un nouveau morceau");
         return
      }
      if (!results) {
         res.status(400).send();
         return;
      }
      db.query('SELECT * FROM tracks WHERE id = ?', results.insertId, (err, results) => {
         if (err) {
            res.status(500).send();
            return;
         }
         res.status(201).send(results[0]);
      });
   });
});

// en tant qu'utilisateur, je veux lister tous les morceaux d'une playlist.

router.get('/tracks/playlists/:id', (req, res) => {
   const idPlaylist = req.params.id;
   db.query('SELECT * FROM tracks WHERE playlist_id = ?', idPlaylist, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de la récupération des morceaux d'un playlist");
         return;
      }
      if (!results.length) {
         res.status(404).send("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

// en tant qu'utilisateur, je veux pouvoir supprimer une playlist.

router.delete('/playlists/:id', (req, res) => {
   const id = req.params.id;
   db.query('DELETE FROM playlists WHERE id = ? ', id, err => {
      if (err) {
         res.status(500).send("Erreur lors de la suppression");
         return;
      }
      res.status(201).send()
   })
})

// en tant qu'utilisateur, je veux pouvoir modifier une playlist.

router.put('/playlists/:id', (req, res) => {
   const id = req.params.id;
   const formData = req.body;
   db.query('UPDATE playlists SET ? WHERE id = ?', [formData, id], (err, results) => {
      console.log(results)
      if (err) {
         res.status(500).send("Erreur lors de la modification d'une playlist");
         return;
      }
      db.query('SELECT * FROM playlists WHERE id = ?', id, (err, results) => {
         if (err) {
            res.status(500).send();
            return;
         }
         res.status(200).send(results[0]);
      });
   });
});

// en tant qu'utilisateur, je veux supprimer un morceau d'une playlist.

router.delete('/tracks/:id', (req, res) => {
   const id = req.params.id;
   db.query('DELETE FROM tracks WHERE id = ? ', id, err => {
      if (err) {
         res.status(500).send("Erreur lors de la suppression d'un morceau");
         return;
      }
      res.status(201).send()
   })
})

// en tant qu'utilisateur, je veux modifier un morceau d'une playlist.

router.put('/tracks/:id', (req, res) => {
   const id = req.params.id;
   const formData = req.body;
   db.query('UPDATE tracks SET ? WHERE id = ?', [formData, id], (err, results) => {
      console.log(results)
      if (err) {
         res.status(500).send("Erreur lors de la modification d'un morceau");
         return;
      }
      db.query('SELECT * FROM tracks WHERE id = ?', id, (err, results) => {
         if (err) {
            res.status(500).send();
            return;
         }
         res.status(200).send(results[0]);
      });
   });
});

module.exports = router;