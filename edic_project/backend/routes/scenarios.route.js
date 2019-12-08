var express = require('express');
var router = express.Router();
const ScenarioModel = require('../models/scenario.model');
const checkAuth = require("../middleware/check-auth");

//Get all scenarios
router.get('/getall', async (req, res) => {
    const scenarios = await ScenarioModel.find({});
    try {
      res.send(scenarios);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// GET by id
router.get('/get', async (req, res) => {
  const scenario = await ScenarioModel.findOne(req.query);
  try {
    res.send(scenario);
  } catch (err) {
    res.status(500).send(err);
  }
});


/* GET metadata from url by id */
router.get('/metadata', async (req, res) => {
  const scenario = await ScenarioModel.findOne(req.query);
  console.log(scenario.url);
  try {
    request(scenario.url, function (error, response, body) {
        try {
             console.log(response);
            res.send(body);
          } catch (err) {
            res.status(500).send(err);
          }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
