var Db = require("mongodb").Db,
  MongoClient = require("mongodb").MongoClient,
  Server = require("mongodb").Server,
  ReplSetServers = require("mongodb").ReplSetServers,
  ObjectID = require("mongodb").ObjectID,
  Binary = require("mongodb").Binary,
  GridStore = require("mongodb").GridStore,
  Grid = require("mongodb").Grid,
  Code = require("mongodb").Code,
  // BSON = require("mongodb").pure().BSON,
  assert = require("assert");

const discoveryRepo = require('./discoveryRepo');
var _db;

// var db = new Db('scrawler-tiktok', new Server('localhost', 27017));
// console.log('db.listCollections:: ', db.listCollections);
const myConnection = {

  connectToServer: async () => {
    return MongoClient.connect(
        "mongodb://localhost:27017",
        (err, client) => {
          if (err) {
            throw err;
          }
          _db = client.db('scrawler-tiktok');
          discoveryRepo.constructor(_db);
          return _db;
      })
    },      
    getDb: async() => {
      return _db;
    }
}

module.exports = { myConnection, discoveryRepo};