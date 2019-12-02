var express = require('express');
var router = express.Router();
const AlgorithmModel = require('../models/algorithm.model');
const checkAuth = require("../middleware/check-auth");

/* GET all */
router.get('/', async (req, res) => {
    const algorithms = await AlgorithmModel.find({});
    try {
      res.send(algorithms);
    } catch (err) {
      res.status(500).send(err);
    }
  });


router.get("/api/v1/:id", (req, res, next) => {
  AlgorithmModel.findById(req.params.id).then(algorithms => {
    if (algorithms) {
      res.status(200).json(algorithms);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});
module.exports = router;
