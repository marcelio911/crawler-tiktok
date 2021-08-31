import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Discovery.module.css'
import React, { useEffect, useState } from 'react';
import { Input, Cascader } from 'antd';

const { Search } = Input;

const Discover: NextPage = () => {

  const [dataDiscovery, setDataDiscovery] = useState<any[]>([]);

  const onSearch = async(data: string): Promise<void> => {
    // setDataDiscovery(await hashtagsService(data));
    console.log('onSearch:: ', data);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Discovery | myCrawler marcelio911s </title>
        <meta name="description" content="For research and create database info from posts in Tiktok" />
        <meta name="author" content="marcelio911" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Discoverys
        </h1>

        <p className={styles.description}>
          <input placeholder="insert hashtags" className="search"/>
          <Input
            addonBefore={<Cascader placeholder="insert hashtags" style={{ width: 150 }} />}
            defaultValue="search"
            className="search"
          />
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </p>
        
      </main>

    </div>
  )
}

export default Discover
