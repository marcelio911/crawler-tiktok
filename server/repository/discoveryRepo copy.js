var Db = require("mongodb").Db,
  MongoClient = require("mongodb").MongoClient,
  Server = require("mongodb").Server,
  ReplSetServers = require("mongodb").ReplSetServers,
  ObjectID = require("mongodb").ObjectID,
  Binary = require("mongodb").Binary,
  GridStore = require("mongodb").GridStore,
  Grid = require("mongodb").Grid,
  Code = require("mongodb").Code,
  BSON = require("mongodb").pure().BSON,
  assert = require("assert");

var db = new Db("test", new Server("localhost", 27017));

const discoveryRepo = {
  post: async (key, dataValues) => {
    db.open(function (err, db) {
      // Create a collection
      var collection = db.collection(key);
      // Insert some intial data into the collection
      collection.insert(
        dataValues,
        { w: 1, keepGoing: true },
        function (err, result) {
          // Count the number of documents left (should not include the duplicates)
          collection.count(function (err, count) {
            assert.equal(3, count);
          });
        }
      );
    });
  },
  find: async (key, callback) => {
    MongoClient.connect(
      "mongodb://localhost:27017/scrawler-tiktok",
      function (err, db) {
        if (err) {
          throw err;
        }
        db.collection(key)
          .find()
          .toArray(function (err, results) {
            if (err) {
              throw err;
            }
            console.log(results);
            callback({ key, results });
          });
      }
    );
  },
};

module.exports = discoveryRepo;
