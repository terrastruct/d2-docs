import React from "react";

const WebPImage = ({ src, webpSrc, alt, className, style, width, height, ...props }) => {
  if (!webpSrc) {
    throw new Error(`WebPImage component requires explicit webpSrc prop. Found src: ${src}`);
  }

  const pictureStyle = {
    display: 'block',
    ...(width && !style?.width ? { width } : {}),
    ...(height && !style?.height ? { height } : {}),
    ...(style || {})
  };

  return (
    <picture style={pictureStyle} className={className}>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default WebPImage;
