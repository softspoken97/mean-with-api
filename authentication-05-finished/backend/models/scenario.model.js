const mongoose = require('mongoose');

const ScenarioSchema = new mongoose.Schema({
  name: String,
  id: {type: Number, required: true},
  url: String,
  epsg: String,
  modificationTime: Date

});

const Scenario = mongoose.model("Scenario", ScenarioSchema);
module.exports = Scenario;


