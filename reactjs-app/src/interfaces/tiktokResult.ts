
interface TikTokResult {
    authorMeta: {
      avatar: string;
      digg: number;
      fans: number;
      following: number;
      heart: number;
      name: string;
      nickName: string;
      secUid: string;
      signature: string;
      verified: boolean;
      video: number;
    };
    secretID: string;
    mentions: [];
    musicMeta: {
      musicId: string;
      musicName: string;
      musicOriginal: string;
      musicAuthor: string;
      coverThumb: string;
      coverLarge: string;
      coverMedium: string;
      duration: number;
      playUrl: string;
    };
    commentCount: number;
    covers: { default: string; dynamic: string; origin: string };
    createTime: number;
    diggCount: number;
    downloaded: boolean;
    hashtags: Array<{ id: number; name: string; title: string; cover: string }>;
    playCount: number;
    shareCount: number;
    text: string;
    videoUrl: string;
    webVideoUrl: string;
  };

  export default TikTokResult;