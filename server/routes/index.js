var express = require('express');
const discoveryRepo = require('../repository/discoveryRepo');
const hashtagsService = require('../services/hashtag');
var router = express.Router();

router.get('/discovery', async (req, res, next) => {
  try {
    const { search } = req.query;
    if (search){
      console.log('req:: ', search);
      const results = await hashtagsService(search);
      discoveryRepo.post(search, results);
      res.status(201).send(`Pesquisado e armazenado com sucesso`);
      return;
    }
    res.send(400, `Campo de pesquisa obrigatório`);
  } catch (err) {
    res.send(`Nada encontrado nesta pesquisa`);
  }  
});

router.get('/', async (req, res, next) => {
  try {
    const { search } = req.query;
    if (search){
      discoveryRepo.find(search, (results)=> {
        console.log(`results:: ${results.length}`);
        res.status(200).json(results);
      });
      return;
    }
    res.status(400).send(`Campo de pesquisa obrigatório`);
  } catch (err) {
    res.status(404).send(`Nada encontrado nesta pesquisa ${err}`);
  }  
});

module.exports = router;
