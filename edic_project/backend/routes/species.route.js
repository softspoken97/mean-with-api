var express = require('express');
var router = express.Router();
//const OcurrenceModel = require('../models/ocurrence.model');
const request = require('request');
const SpeciesModel = require('../models/specieMetadata.model');
const checkAuth = require("../middleware/check-auth");


router.get('/', async (req, res) => {
  const species = await SpeciesModel.find({});
  try {
    res.send(species);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.get("/api/v1/:id", (req, res, next) => {
  SpeciesModel.findById(req.params.id).then(species => {
    if (species) {
      res.status(200).json(species);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});
module.exports = router;



