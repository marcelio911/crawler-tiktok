import styles from '../styles/Home.module.css'
import ssidTt from '../app/ssid_tt';
import Header from '../components/header/Header';
import React from 'react';
import { Provider } from 'react-redux'

import store from '../app/store'
import Image from '../components/Image/Image';

const Home = (): JSX.Element => {

  return (
    <Provider store={store}>
    <div className={styles.container}>
      <Header title={'Crawler Tiktok | marcelio911'}></Header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome <a href="https://systentando.com/crawler-tiktok">Tictoc Crawler!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '} ssidTt {ssidTt}
        </p>

        <div className={styles.grid}>
          <a href="discoveries" className={styles.card}>
            <h2>Discover hashtags&rarr;</h2>
            <p>Use keywords and explore the results.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </Provider>
  )
}

export default Home
