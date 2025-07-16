import React, { useState, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
import pako from "pako";
import ExternalLink from "@site/static/icons/externallink.svg";
import "./styles.css";

const ExampleModal = ({ isOpen, onClose, title, svgContent, code, layout }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isFullscreen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Only close on mousedown (full click), not on keyup or other events
    if (e.type === "mousedown" && e.target === e.currentTarget) {
      onClose();
    }
  };

  const getPlaygroundURL = () => {
    const playgroundURL = new URL("https://play.d2lang.com");
    playgroundURL.searchParams.set("script", compressAndEncodeScript(code));
    if (layout) {
      playgroundURL.searchParams.set("layout", layout);
    }
    return playgroundURL.toString();
  };

  const base64url_encode = (buffer) => {
    return btoa(Array.from(buffer, (b) => String.fromCharCode(b)).join(""))
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  };

  const compressAndEncodeScript = (script) => {
    const textEncoder = new TextEncoder();
    const uint8Array = textEncoder.encode(script);
    const deflate = new pako.Deflate({ level: 9, windowBits: -15 });
    deflate.push(uint8Array, true);
    return base64url_encode(deflate.result);
  };

  return (
    <div className="example-modal-overlay" onMouseDown={handleOverlayClick}>
      <div className="example-modal-content">
        <div className="example-modal-header">
          <div className="example-modal-header-content">
            <h2>{title}</h2>
            <a
              className="example-modal-playground"
              href={getPlaygroundURL()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Playground
            </a>
          </div>
          <button className="example-modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="example-modal-body">
          <div className="example-modal-section">
            <div className="example-modal-svg-container">
              <div
                className="embedSVG"
                dangerouslySetInnerHTML={{ __html: svgContent }}
                onClick={() => setIsFullscreen(true)}
                style={{ cursor: "zoom-in" }}
                title="Click to view fullscreen"
              ></div>
            </div>
          </div>
          <div className="example-modal-section">
            <CodeBlock className="language-d2" hidePlaygroundLink={true}>
              {code}
            </CodeBlock>
          </div>
        </div>

        {isFullscreen && (
          <div
            className="example-modal-fullscreen-overlay"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                setIsFullscreen(false);
              }
            }}
          >
            <div className="example-modal-fullscreen-content">
              <button
                className="example-modal-fullscreen-close"
                onClick={() => setIsFullscreen(false)}
              >
                ×
              </button>
              <div
                className="embedSVG"
                dangerouslySetInnerHTML={{ __html: svgContent }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExampleModal;
