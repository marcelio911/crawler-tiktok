const { responseCrawler, keySearch} = require('./results.json')[0];

const hashtags = [];
const repeated = [];
let playCount = 0;
let commentCount = 0;
let downloaded = 0;
let diggCount = 0;
let shareCount = 0;

const results = responseCrawler;
for (index of responseCrawler){
    for (hash of index.hashtags){

        const ok = hashtags.find(e => e.name == hash.name);
        if (!ok) {
            console.log('differents:: ', hash.name);
            hashtags.push(hash);
            playCount += index.playCount;
            commentCount += index.commentCount;
            downloaded += index.downloaded;
            diggCount += index.diggCount;
            shareCount += index.shareCount;
        } else {
            repeated.push(index.hashtags);
        }
    }
}

console.log('results: ', results.length);
console.log('#hashtags: ', hashtags.length);
console.log('#repeated: ', repeated.length);
console.log('visualizacoes: ', playCount);
console.log('comentarios: ', commentCount);
console.log('downloaded: ', downloaded);
console.log('curtidas: ', diggCount);
console.log('compartilhamentos: ', shareCount);
