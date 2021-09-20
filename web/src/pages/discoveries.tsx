import type { NextPage } from "next";
import Script from 'next/script'
import styles from "../styles/Discovery.module.css";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Input, } from "antd";
import Header from "../components/header/Header";
import MovieCard from "../components/movieCard/movieCard";
import discoveryService from "../services/discoveryService";

const { Search } = Input;
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { search, setRegistersFound, setHashtags } from "../ducks/App/searchReducer";
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';



// import { RootState } from "../store/reducers";
// import { Actions } from "../ducks/App/duck";

const Discover: NextPage = () => {
  const dispatch = useAppDispatch()
  const registers = useAppSelector(search)

  const [dataDiscovery, setDataDiscovery] = useState();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [state, setState] = useState({
    loading: false,
  });

  const onDiscovery = async (data: string): Promise<void> => {
    setState({loading: true});
    await discoveryService.onDiscovery(data);
    await refreshHashTags();
    setState({loading: false});
  };

  const onSearch = async (data: string): Promise<void> => {
    setState({loading: true});
    await discoveryService.onDiscovery(data);
    const values = await discoveryService.onSearch(data);
    console.log("values:: ", values);
    dispatch(setRegistersFound(values));
    setState({loading: false});
  };
  
  const refreshHashTags = async () => {
    discoveryService.onHashtags((res?: any[], err?: Error) => {
      if (res && res.length > 0) {
        console.log('res:: 0', res);
        dispatch(setHashtags(res));
      }
    });
  }

  useEffect(() => {
    refreshHashTags();
  }, []);

  return (
    <div className={styles.container}>
      <Header title={"Discovery | myCrawler marcelio911s"}></Header>
      <Script async src="https://www.tiktok.com/embed.js"></Script>

      <main className={styles.main}>
        <h1 className={styles.title}>Sua audiência</h1>
        
        <div id={styles.actions}>
          <span>{'Hashtags: '}{registers.hashtags?.length}</span>
          <span>{'Top: '}{registers.foundItensBySearch?.length}</span>
        </div>

        <div className={styles.description}>
          <Search
            placeholder={`input search text: ${state.loading}`}
            onSearch={onDiscovery}
            enterButton
            className={styles.searchBar}
          />
          {<span>{state.loading}</span>}{state.loading && <Spin indicator={antIcon} />}
          <p className={styles.resultDiscovery}>{dataDiscovery}</p>          
        </div>

        
        <ul className={styles.ul}>
          {registers.hashtags && registers.hashtags.map((value, idx) => (
            <li
              className={styles.li}
              key={idx}
              onClick={() => {onSearch(value?.keySearch)}}
            >
              <a>{`#${value?.keySearch}`}</a>
            </li>
          ))}
        </ul>

        {registers.foundItensBySearch?.map((value, idx) => (
          <MovieCard key={idx} thumb={value} onSearch={onSearch}></MovieCard>
        ))}
      </main>
      <LoadingOverlay
        active={state.loading}
        spinner
        text='Aguarde estamos atualizandos os dados...'
        >
        <p>Some content or children or something.</p>
      </LoadingOverlay>
    </div>
  );
};

export default Discover;
