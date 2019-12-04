import lm_client
import pymongo, requests
from lm_client.client.client import LmApiClient
from pymongo import MongoClient

lmClient = LmApiClient()
cluster = MongoClient("mongodb+srv://johnboy:afc8w8DRasUcZpBR@cluster0-mdduj.mongodb.net/node-angular?retryWrites=true&w=majority")
#cluster = MongoClient("mongodb://localhost:27017")
db = cluster["node-angular"]

#get occurrences
occurrences = lmClient.occurrence.list(limit = 100)
collection = db["occurrences"]
collection.insert_many(occurrences)

#get environmental layers
layers = lmClient.layer.list(limit = 100)
collection = db["layers"]
collection.insert_many(layers)

#get Scenarios
scenarios = lmClient.scenario.list()
collection = db["scenarios"]
collection.insert_many(scenarios)

#get algorithms
URL = "https://raw.githubusercontent.com/lifemapper/core/master/LmWebServer/public_html/clients/algorithms.json"
r = requests.get(url = URL)
algorithms = r.json()
collection = db["algorithms"]
collection.insert_many(algorithms)

#get algorithms
URL = "http://api.gbif.org/v1/species/suggest?"
r = requests.get(url = URL)
species = r.json()
collection = db["species"]
collection.insert_many(species)
