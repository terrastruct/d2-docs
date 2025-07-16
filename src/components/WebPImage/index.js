import React from 'react';

const WebPImage = ({ src, webpSrc, alt, className, style, width, height, ...props }) => {
  // If webpSrc is provided, use it; otherwise try to derive it from src
  const webpSource = webpSrc || src.replace(/\.png$/, '.webp');
  
  return (
    <picture>
      <source srcSet={webpSource} type="image/webp" />
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