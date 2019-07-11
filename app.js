const express = require('express');
const app = express();
const playlistsRouter = require('./routes/playlists');

const port = 3000;

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.use('/api', playlistsRouter);

app.listen(port, (err) => {
   if (err) {
      throw new Error('Something bad happened...');
   }
   console.log(`Server is listening on ${port}`);
});