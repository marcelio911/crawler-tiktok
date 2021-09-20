const formmatReport = (payload: any): any => {
    const results = payload[0].responseCrawler;

    if (results?.length) {
        const hashtags = [];
        const repeated = [];
        let playCount = 0;
        let commentCount = 0;
        let downloaded = 0;
        let diggCount = 0;
        let shareCount = 0;
        
        for (const index of JSON.parse(JSON.stringify(results))){
            if (index?.hashtags) {
                for (const hash of index.hashtags){

                    const ok = hashtags.find(e => e.name == hash.name);
                    if (!ok) {
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
        }
        console.log('results: ', results.length);
        console.log('#hashtags: ', hashtags.length);
        console.log('#repeated: ', repeated.length);
        console.log('visualizacoes: ', playCount);
        console.log('comentarios: ', commentCount);
        console.log('downloaded: ', downloaded);
        console.log('curtidas: ', diggCount);
        console.log('compartilhamentos: ', shareCount);
        return {
            size: results.length,
            hashtags,
            repeated,
            playCount,
            commentCount,
            downloaded,
            diggCount,
            shareCount,
        }
    }

    
}


export default formmatReport;
