var express = require('express');
var router = express.Router();
const ScenarioModel = require('../models/scenario.model');
const checkAuth = require("../middleware/check-auth");
/* GET all */

router.get('/', async (req, res) => {
    const scenarios = await ScenarioModel.find({});
    try {
      res.send(scenarios);
    } catch (err) {
      res.status(500).send(err);
    }
  });


  router.get("/api/v1/:id", (req, res, next) => {
    ScenarioModel.findById(req.params.id).then(scenarios => {
      if (scenarios) {
        res.status(200).json(scenarios);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    });
});

module.exports = router;
