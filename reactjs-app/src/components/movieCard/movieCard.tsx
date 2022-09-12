import React, { FC } from "react";
import { Skeleton, Space, Divider, Switch, Form, Radio } from "antd";
import ReactPlayer from "react-player/lazy";

import styles from "./MovieCard.module.css";
import TikTokResult from "../../interfaces/tiktokResult";
import Image from "../Image/Image";

interface Thumbnail {
  createdAt?: number;
  keySearch?: number;
  responseCrawler?: TikTokResult[];
}

interface Props {
  thumb?: Thumbnail;
  onSearch: (data: string) => Promise<void>;
}

const MovieCard: FC<Props> = (props) => {
  // props.title = 'Crawler Tiktok | marcelio911';

  return (
    <div id={styles.movieRow_listarea}>
      <div id={styles.list_videos}>
        {props.thumb?.responseCrawler?.map((e, idx) => (
          // <a
          //   href={e.webVideoUrl}
          //   target="_blank"
          //   key={`ink${idx}`}
          //   rel="noreferrer"
          // >
          <div key={idx} id={styles.embbedded_videos} className={styles.card}>
            {/* <Skeleton.Image className={styles.skeleton_image} /> */}
            <Image
              src={e.authorMeta.avatar}
              width={150}
              height={90}
              layout="responsive"
              objectFit="cover"
              quality={70}
              className={styles.skeleton_image}
              alt={e.authorMeta.name}
            />
            <div id="details">
              <p>
                {new Date(Number(e.createTime) * 1000).toLocaleDateString()}
                <br />
                {e.hashtags.map((hash, idxHah) => (
                  <a
                    key={idxHah}
                    title={`${hash.title}`}
                    target="_blank"
                    onClick={() => {
                      props.onSearch(hash.name);
                    }}
                    href={`https://www.tiktok.com/tag/${hash.name}`} rel="noreferrer"
                  >
                    {`#${hash.name} `}
                  </a>
                ))}
              </p>
              <p>{`${e.hashtags[0].title}😍🇧🇷🇧🇷`}</p>
              <p>
                {e.authorMeta.name}
                <br />
              </p>
              <div
                // cite={e.webVideoUrl}
                data-video-id={e.secretID}
                className={styles.tiktok_embed}
              >
                <section>
                  <a
                    target="_blank"
                    title={e.authorMeta.name}
                    href={e.webVideoUrl}
                    rel="noreferrer"
                  >
                    {"@"}
                    {e.authorMeta.name}
                  </a>
                  <a
                    target="_blank"
                    title={`♬ ${e.musicMeta.musicAuthor}`}
                    href={e.musicMeta.playUrl}
                    rel="noreferrer"
                  >
                    ♬ {e.musicMeta.musicName}
                  </a>
                </section>
              </div>
            </div>
          </div>
          // </a>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
