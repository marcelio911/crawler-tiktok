var express = require('express');
const {discoveryRepo, myConnection} = require('../repository/Connection');
const hashtagsService = require('../services/hashtag');
var router = express.Router();
myConnection.connectToServer();
const configResponse = require('./configResponse.js');

router.get('/discovery', async (req, res, next) => {
  configResponse(res);
  try {
    const { search } = req.query;
    if (search){
      console.log('searchedBy:: ', search);
      const results = await hashtagsService(search);
      console.log('hashtagsService:: ', results.length);
      discoveryRepo.insertToMany(search, results);
      
      res.status(201).send(`Pesquisado e armazenado com sucesso`);
      return;
    }
    res.send(400, `Campo de pesquisa obrigatório`);
  } catch (err) {
    res.send(`Nada encontrado nesta pesquisa`);
  }  
});

router.get('/', async (req, res, next) => {
  configResponse(res);
  try {
    const { search } = req.query;
    if (search){
      discoveryRepo.findByDiscoveries(search, (results, err)=> {
        if (err) {
          console.log(`findByDiscoveries::err: ${err}`);
          throw err;
        }
        if (results) {
          console.log(`findByDiscoveries2:: ${results.length}`);
        }          
        res.status(200).json(results);
      });
      return;
    }
    res.status(400).send(`Campo de pesquisa obrigatório`);
  } catch (err) {
    res.status(404).send(`Nada encontrado nesta pesquisa ${err}`);
  }  
});

router.get('/hashtags', async (req, res, next) => {
  configResponse(res);
  try {
      discoveryRepo.findByHotKeys((results, err) => {
        if (err) {
          res.status(404).send(`Nada encontrado nesta pesquisa ${err}`);
          return;
        }
        console.log(`results:: ${results.length}`);
        console.log('response: ', res.getHeaders());
        res.status(200).json(results);
      });
      return;
  } catch (err) {
    res.status(404).send(`Nada encontrado nesta pesquisa ${err}`);
  }  
});

module.exports = router;
