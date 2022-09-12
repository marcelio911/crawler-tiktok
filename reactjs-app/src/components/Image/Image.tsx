import React, { FC } from "react";

interface Props {
    src: string;
    alt?: string;
    layout?: string;
    objectFit?: string;
    className?: string;
    quality?: number;
    width?: number;
    height?: number;
}

const Image: FC<Props> = (props) => {

const {
    src,
    alt,
    width,
    height,
    layout
} = props;

return (
  <img 
    src={src} 
    alt={alt} 
    width={width} 
    height={height} 
    style={{position: "relative"}}/>
    
);
}

export default Image;