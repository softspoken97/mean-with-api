var express = require('express');
var router = express.Router();
const AlgorithmModel = require('../models/algorithm.model');
const checkAuth = require("../middleware/check-auth");

/* GET all */
router.get('/getall', async (req, res) => {
  const algorithms = await AlgorithmModel.find({});
  try {
    res.send(algorithms);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* GET by id */
router.get('/get', async (req, res) => {
  const algorithm = await AlgorithmModel.findOne(req.query);
  try {
    res.send(algorithm);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
