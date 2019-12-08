var express = require('express');
var router = express.Router();
const ExperimentModel = require('../models/experiment.model');
const SDMProjectionModel = require('../models/SDMProjection.model');
const request = require('request');

const ExperimentService = require('../services/postExperiment.service');


// GET by id
/*router.get('/get', async (req, res) => {
  const occurrence = await OccurrenceModel.findOne(req.query);
  try {
    res.send(occurrence);
  } catch (err) {
    res.status(500).send(err);
  }
});*/

/* POST Experiment to lifemapper */
router.post('/submit', async (req, res) => {
    console.log(req.query);
    //const experiment = new ExperimentModel(req.query);
    const experiment = new ExperimentModel({
        "occurrence": {
          "taxon_ids": [
            2420797
          ]
        },
        "scenario_package": {
          "projection_scenario": [
            {
              "scenario_code": "AR5-CCSM4-RCP4.5-2050-10min"
            }
          ],
          "model_scenario": {
            "scenario_code": "AR5-CCSM4-RCP4.5-2050-10min"
          }
        },
        "sdm": {
          "algorithm": [
            {
              "code": "BIOCLIM",
              "parameters": {
                "StandardDeviationCutoff": 0.674
              }
            }
          ]
        },
        "pam_stats": {
          "compute_pam_stats": 0
        },
        "archive_name": "test"
      })

    const options = {
      method: 'POST',
      url: 'http://client.lifemapper.org/api/v2/sdmProject',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      json: {
        "occurrence": {
          "taxon_ids": [
            2420797
          ]
        },
        "scenario_package": {
          "projection_scenario": [
            {
              "scenario_code": "AR5-CCSM4-RCP4.5-2050-10min"
            }
          ],
          "model_scenario": {
            "scenario_code": "AR5-CCSM4-RCP4.5-2050-10min"
          }
        },
        "sdm": {
          "algorithm": [
            {
              "code": "BIOCLIM",
              "parameters": {
                "StandardDeviationCutoff": 0.674
              }
            }
          ]
        },
        "pam_stats": {
          "compute_pam_stats": 0
        },
        "archive_name": "test"
      }
    };

    request.post(options, function (error, response, body) {
      try {
        //const SDMProjection = new SDMProjectionModel(body);
        //SDMProjection.save();
        console.log(body);
        res.send(body);
      } catch (err) {
        res.status(500).send(err);
        }
    });

});

router.post('/submit2', async (req, res) => {
  console.log(req.body);
  const json = ExperimentService.test(req.body);
  try {
    res.send(json);
  } catch (err) {
    res.status(500).send(err);
  }
  //const experiment = new ExperimentModel(req.query);
  /*const options = {
    method: 'POST',
    url: 'http://client.lifemapper.org/api/v2/sdmProject',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    json: req.query
  };

  request.post(options, function (error, response, body) {
    try {
      //const SDMProjection = new SDMProjectionModel(body);
      //SDMProjection.save();
      console.log(body);
      res.send(body);
    } catch (err) {
      res.status(500).send(err);
      }
  });*/

});



module.exports = router;
