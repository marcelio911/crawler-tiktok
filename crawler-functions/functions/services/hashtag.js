// @typescript-eslint/no-var-requires
const TikTokScraper = require("tiktok-scraper");
const ssidTt  = require("../config/ssid_tt");

// Hashtag feed
const hashtagsService = async (data) => {
    try {
      const posts = await TikTokScraper.hashtag(data, {
        number: 999999999,
        sessionList: [`sid_tt=${ssidTt}`],
      });
      console.log(posts);
      console.log("tamanho:: ", posts.collector.length);
      return posts.collector;
    } catch (error) {
      console.log(error);
      throw error;
    }
};

module.exports = hashtagsService;
