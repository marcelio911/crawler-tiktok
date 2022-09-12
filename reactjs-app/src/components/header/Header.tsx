import React, { FC } from "react";
import  MetaTags from '../../index.d';

interface Props {
    title: string;
    description?: string;
}

const Header: FC<Props> = (props) => {

// props.title = 'Crawler Tiktok | marcelio911';

return (
  <MetaTags>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="author" content="marcelio911" />
    <link rel="icon" href="/favicon.ico" />
  </MetaTags>
);
}

export default Header;