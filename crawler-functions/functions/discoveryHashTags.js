const hashtagService = require("./services/hashtag");
// import trensService from "./trends";
const functions = require("firebase-functions");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const DiscoveryHashTags = functions.https.onRequest((req, response) => {
  functions.logger.info("DiscoveryHashTags! ", {structuredData: true}, req);

  const requestDict = req.params;
  console.log("requestDict", requestDict);

  const queryFormat = req.query.format;
  console.log("queryFormat", queryFormat);

  const search = requestDict["search"];
  const results = hashtagService.exec(search).then();

  response.send(results);
});

module.exports = DiscoveryHashTags;
