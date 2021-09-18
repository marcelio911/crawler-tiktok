const { HotkeyAdapter } = require("../adapters/hotKeysAdapter");

var _db;

const findByCollection = async (collection, key, callback) => {
  if (key) {
    _db
    .collection(collection)
    .find({ keySearch: key })
    .toArray(function (err, results) {
      if (err) {
        throw err;
      }
      callback(results);    
    });
    return;
  }
  _db
  .collection(collection)
  .find()
  .toArray(function (err, results) {
    if (err) {
      throw err;
    }
    callback(results);    
  });
}

const discoveryRepo = {
  constructor: (connection) => {
    _db = connection;
  },
  insert: async (collectionName, responseCrawler) => {
    if (!responseCrawler) {
      console.log('responseCrawler is empty');
      return;
    }
    // Create a collection
    var collection = _db.collection(collectionName);
    // Insert some intial data into the collection
    await collection.insertOne(
      responseCrawler,
      { w: 1, keepGoing: true },
      function (err, result) {
        if (err) {
          console.log("err:: ", err);
        }
        if (result) {
          console.log("scrawler-tiktok:: ", result.length);
        }        
        // Count the number of documents left (should not include the duplicates)
        collection.count(function (err, count) {
          console.log(3, count);
        });
      }
    );

  },
  insertToMany: async (key, responseCrawler) => {
    try {
      const hotkeyAdapter=  await HotkeyAdapter(key);
      await discoveryRepo.insert('hotKeys', hotkeyAdapter);
      await discoveryRepo.insert('discoveries', { ...hotkeyAdapter, responseCrawler });
    } catch (err){
      throw err;
    }
  },
  findByDiscoveries: async (key, callback) => {
    try {
      console.log('callback typeof:: ', typeof callback);
      findByCollection('discoveries', key, response => {
        console.log('callback2 typeof:: ', typeof callback);
        callback(response);
      });      
    } catch (err) {
      callback(null, err);
    }
  },
  findByHotKeys: async (callback) => {
    try {
      console.log('callback typeof:: ', typeof callback);
      findByCollection('hotKeys', undefined, callback, response => {
        console.log('callback2 typeof:: ', typeof callback);
        callback(response);
      });
    } catch (err) {
      callback(null, err);
    }
  },
};

module.exports = discoveryRepo;
