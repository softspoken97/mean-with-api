const mongoose = require('mongoose');

const SpeciesSchema = new mongoose.Schema({

    _id: {type: Number, required: true},
    key: {type: Number, required: true},
    kingdom: String,
    phylum: String,
    kingdomKey: {type: Number, required: true},
    phylumKey: {type: Number, required: true},
    parent: String,
    parentKey: {type: Number, required: true},
    scientificName: String,
    canonicalName: String,
    rank: String,
    status: String,
    higherClassificationMap: Object,
    synonym:false

  });

const Species = mongoose.model("Species", SpeciesSchema);
module.exports = Species;
