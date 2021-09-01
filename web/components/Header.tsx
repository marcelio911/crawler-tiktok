import React, { FC } from "react";
import Head from 'next/head'

interface Props {
    title: string;
    description?: string;
}

const Header: FC<Props> = (props) => {

// props.title = 'Crawler Tiktok | marcelio911';

return (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="author" content="marcelio911" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
}

export default Header;