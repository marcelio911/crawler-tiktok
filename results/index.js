const { results, key } = require('./turismo_nordeste.json');

const hashtags = [];
const excepctions = [];
let playCount = 0;
let commentCount = 0;
let downloaded = 0;
let diggCount = 0;
let shareCount = 0;


for (index of results){
    const ok = index.hashtags.filter(i => i.title.startsWith('O que você anda fazendo nessas férias?'));
    // console.log('ok:: ', index);
    if (ok && ok.length > 0) {
        hashtags.push(index.hashtags);
        playCount += index.playCount;
        commentCount += index.commentCount;
        downloaded += index.downloaded;
        diggCount += index.diggCount;
        shareCount += index.shareCount;
        
        
    } else {
        excepctions.push(index.hashtags);
    }
}

console.log('results: ', results.length);
console.log('#hashtags: ', hashtags.length);
console.log('#excepctions: ', excepctions.length);
console.log('visualizacoes: ', playCount);
console.log('comentarios: ', commentCount);
console.log('downloaded: ', downloaded);
console.log('curtidas: ', diggCount);
console.log('compartilhamentos: ', shareCount);

const test = [
    { id: '2965629', name: 'praia', title: '', cover: '' },
    { id: '153828', name: 'fy', title: '', cover: '' },
    { id: '55935', name: 'piscina', title: '', cover: '' },
    {
      id: '2704742',
      name: 'ferias',
      title: 'O que você anda fazendo nessas férias?🏊🏾 ⛹🏾 🏋🏾 🚴🏾',
      cover: ''
    },
    { id: '11922210', name: 'guaratuba', title: '', cover: '' }
  ];

  console.log('teste: ', test.filter(i => i.title.startsWith('O que você anda fazendo nessas férias?')));