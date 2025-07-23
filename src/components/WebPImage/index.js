import React from "react";

const WebPImage = ({ src, webpSrc, alt, className, style, width, height, ...props }) => {
  if (!webpSrc) {
    throw new Error(`WebPImage component requires explicit webpSrc prop. Found src: ${src}`);
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        width={width}
        height={height}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default WebPImage;
