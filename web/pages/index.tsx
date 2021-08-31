import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ssidTt from '../configurations/ssidTt';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Crawler Tiktok | marcelio911</title>
        <meta name="description" content="For research and create database info from posts in Tiktok" />
        <meta name="author" content="marcelio911" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://systentando.com/crawler-tiktok">Crawler marcelio911!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '} ssidTt {ssidTt}
          <code className={styles.code}>pages/index.js</code>
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
  )
}

export default Home
