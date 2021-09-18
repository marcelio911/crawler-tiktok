var levelup = require('levelup');
var leveldown = require('leveldown');

// 1) Create our store
var db = levelup(leveldown('./drivers/mydb'))

const discoveryRepoCopy = {
  post: async (key, dataValues) => {
    // 2) Put a key & value
    db.put(`${key}`, dataValues, function (err) {
      if (err) return console.log('Ooops!', err) // some kind of I/O error    
    });
  },
  find: async (key, callback) => {
    // 3) Fetch by key
    await db.get(`${key}`, (err, values) => {
      if (err) return console.log('Ooops!', err) // likely the key was not found

      // Ta da!
       console.log(`ta da:: ${key}`)
       callback({key, values});
    });
  }
}

module.exports = discoveryRepoCopy;