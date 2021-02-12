const express = require("express");
const app = express();

// servir des fichiers statiques
app.use(express.static(__dirname + "/Website"));

// Server static ecoute le port 6789
app.listen(8521, function () {
  console.log("App started at http://localhost:8521");
});
