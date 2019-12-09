const ExperimentModel = require('../models/experiment.model');
const request = require('request');
var uuid = require('uuid');

let occurrenceID = 12345;
const scenarioCode = '';

const requestJSON = {
  occurrence: {
    taxon_ids: []
  },
  scenario_package: {
    projection_scenario: [
      {
        scenario_code: ""
      }
    ],
    model_scenario: {
      scenario_code: ""
    }
  },
  sdm: {
    algorithm: [
      {
        code: "",
        parameters: {
        }
      }
    ]
  },
  pam_stats: {
    compute_pam_stats: 0
  },
  archive_name: ""
};

function getScenarioCode(url, callback) {
  request(url, function (error, response, body) {
    //console.log(JSON.parse(body).code);
    callback(JSON.parse(body).code);
  });
};

exports.test = function (req, callback) {

    requestJSON.archive_name = uuid.v1();
    requestJSON.occurrence.taxon_ids = [req.occurrencesForm.id ];
    requestJSON.sdm.algorithm[0].code = req.algorithmsForm.code;

      //console.log(req.algorithmsForm.parameters.length);
      for(var i=0; i< req.algorithmsForm.parameters.length; i++) {
        var param = req.algorithmsForm.parameters[i].name;
        var value = req.algorithmsForm.parameters[i].default;
        requestJSON.sdm.algorithm[0].parameters[param] = value ;
      }
    getScenarioCode(req.scenariosForm.url, function(response){
      var code = response;
      requestJSON.scenario_package.projection_scenario[0].scenario_code = code;
      requestJSON.scenario_package.model_scenario.scenario_code = code;

      return callback(requestJSON);
      });

};

