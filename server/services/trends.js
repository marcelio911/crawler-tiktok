const TikTokScraper = require("tiktok-scraper");
const ssidTt = require("./config/ssid_tt");

// Trending feed
const trendingTopicsService = async (data) => {
  try {
    const posts = await TikTokScraper.trend("viagem", {
      number: 100,
      sessionList: [`sid_tt=${ssidTt}`],
    });
    console.log("tamanho:: ", posts.collector.length);
    return posts.collector;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default trendingTopicsService;
