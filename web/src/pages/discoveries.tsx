import type { NextPage, NextPageContext } from "next";
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
interface StatelessPage<P = {}> extends React.Component<P> {
  getInitialProps?: (ctx: NextPageContext) => Promise<P>
  getServerSideProps?: (ctx: NextPageContext) => Promise<P>
}

const Discover: NextPage<StatelessPage> = () => {
  const dispatch = useAppDispatch()
  const registers = useAppSelector(search)

  const [dataDiscovery, setDataDiscovery] = useState();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [state, setState] = useState<{
    loading: boolean;
    key: string,
  }>({loading: false, key: 'generated'});

  const onDiscovery = async (data: string): Promise<void> => {
    setState({loading: true, key: data});
    await discoveryService.onDiscovery(data);
    await refreshHashTags();
    setState({loading: false, key: data});
  };

  const onSearch = async (data: string): Promise<void> => {
    setState({loading: true, key: data});
    const values = await discoveryService.onSearch(data);
    await refreshHashTags();
    dispatch(setRegistersFound(values));
    setState({loading: false, key: data});
  };
  
  const refreshHashTags = async () => {
    discoveryService.onHashtags((res?: any[], err?: Error) => {
      if (res && res.length > 0) {
        console.log('res:: 0', res);
        dispatch(setHashtags(res));
      }
    });
  }

  Discover.getInitialProps = async (): Promise<any> => {
    // ... stuff
    refreshHashTags();
    onSearch('piparn')
  }
  

  useEffect(() => {
    refreshHashTags();
  }, []);

  return (
    <div className={styles.container}>
      <Header title={"Discovery | myCrawler marcelio911s"}></Header>
      <Script async src="https://www.tiktok.com/embed.js"></Script>
      

      <main className={styles.main}>
        {/* <LoadingOverlay
            key={state.key}
            active={state.loading}
            text='Aguarde estamos coletando mais dados...'
            className={styles.loadingOverlay}
            spinner={<BounceLoader />}
            >
        </LoadingOverlay> */}
        
        <section id={styles.actions}>
          <span>{'Hashtags: '}{registers.reports?.hashtags?.length}</span>
          <span>{'Mentions: '}{registers.reports?.size}</span>
          <span>{'Down: '}{registers.reports?.downloaded}</span>
          <span>{'Views: '}{registers.reports?.playCount}</span>
          <span>{'Comments: '}{registers.reports?.commentCount}</span>
          <span>{'Likes: '}{registers.reports?.diggCount}</span>
        </section>
        <br/> 
        <section className={styles.description}>
          <h1 className={styles.title}>Sua audiência</h1>
          <Search
            placeholder={`input search text: ${state.loading}`}
            onSearch={onDiscovery}
            enterButton
            className={styles.searchBar}
          />
          {<span>{state.loading}</span>}{state.loading && <Spin indicator={antIcon} />}
          <p className={styles.resultDiscovery}>{dataDiscovery}</p>          
        </section>
        <br/> <br/> <br/> <br/> <br/> 
        <section id="hashtags">
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
        </section>        

        {registers.foundItensBySearch?.map((value, idx) => (
          <MovieCard key={idx} thumb={value} onSearch={onDiscovery}></MovieCard>
        ))}
       
      </main>
    </div>
  );
};

export default Discover;
