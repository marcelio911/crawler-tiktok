import React, { FC } from "react";
import { Skeleton, Space, Divider, Switch, Form, Radio } from "antd";

import styles from "./MovieCard.module.css";

interface Content {
  authorMeta: {
    avatar: string;
    digg: number;
    fans: number;
    following: number;
    heart: number;
    name: string;
    nickName: "Reciclarte Artesanato Criativo";
    secUid: string;
    signature: string;
    verified: boolean;
    video: number;
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
}

interface Thumbnail {
  createdAt?: number;
  keySearch?: number;
  responseCrawler?: Content[];
}

interface Props {
  thumb?: Thumbnail;
}

const MovieCard: FC<Props> = (props) => {
  // props.title = 'Crawler Tiktok | marcelio911';

  return (
    <div id={styles.movieRow_listarea}>
      <div id={styles.list_videos}>
        {props.thumb?.responseCrawler?.map((e, idx) => (
          <div key={idx} id={styles.embbedded_videos} className={styles.card}>
            <Skeleton.Image />
            {/* <Skeleton active /> */}
            <span>
              {e.createTime +
                " _ " +
                new Date(Number(e.createTime)).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
