import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Discovery.module.css'
import React, { useEffect, useState } from 'react';
import { Input, Cascader } from 'antd';
import Header from '../components/Header';
import axios from 'axios';

const { Search } = Input;

const Discover: NextPage = () => {

  const [dataDiscovery, setDataDiscovery] = useState<any[]>([]);

  const onSearch = async(data: string): Promise<void> => {
    
    try {
      const res = await axios.get(`http://localhost:8888/discovery?search=${data}`);
      console.log('onSearch:: ', data, ' res:: ', res.status);
      if(res.status == 200){
        setDataDiscovery(res.data);
        console.log('onSearch:: ', data, ' res:: ', res.data);
      }
    } catch (err) {
      console.log('ERROR onSearch:: ', data, ' res:: ', err);
    }
    
  }

  return (
    <div className={styles.container}>
      <Header title={'Discovery | myCrawler marcelio911s'}></Header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Discovery
        </h1>

        <p className={styles.description}>
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
