import type { NextPage } from "next";
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



// import { RootState } from "../store/reducers";
// import { Actions } from "../ducks/App/duck";

const Discover: NextPage = () => {
  const dispatch = useAppDispatch()
  const registers = useAppSelector(search)

  const [dataDiscovery, setDataDiscovery] = useState();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const state = {
    loading: false,
  };

  const onDiscovery = async (data: string): Promise<void> => {
    state.loading = true;
    await discoveryService.onDiscovery(data);
    state.loading = false;
  };

  const onSearch = async (data: string): Promise<void> => {
    state.loading = true;
    const values = await discoveryService.onSearch(data);
    console.log("values:: ", values);
    dispatch(setRegistersFound(values));
    state.loading = false;
  };

  

  useEffect(() => {
    discoveryService.onHashtags((res?: any[], err?: Error) => {
      if (res && res.length > 0) {
        console.log('res:: 0', res);
        dispatch(setHashtags(res));
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <Header title={"Discovery | myCrawler marcelio911s"}></Header>

      <main className={styles.main}>
        <h1 className={styles.title}>Descubra sua audiência</h1>

        <div className={styles.description}>
          <Search
            placeholder="input search text"
            onSearch={onDiscovery}
            enterButton
            className={styles.searchBar}
          />
          <p className={styles.resultDiscovery}>{dataDiscovery}</p>
        </div>

        {state.loading && <Spin indicator={antIcon} />}
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
          <MovieCard key={idx} thumb={value}></MovieCard>
        ))}
      </main>
    </div>
  );
};

export default Discover;
