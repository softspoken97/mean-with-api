const mongoose = require('mongoose');

const AlgorithmSchema = new mongoose.Schema({
  "_id": String,
  "authors": String,
  "link": String,
  "software": String,
  "description": String,
  "parameters": [
  ],

  "code": String,
  "name": String,
  "version": String,

});

const Algorithm = mongoose.model("Algorithm", AlgorithmSchema);
module.exports = Algorithm;




