import React, { useEffect, useState } from 'react';
import imagesLoaded from 'imagesloaded';
import './Loader.css'; // Make sure your loader styles are imported

const Loader = () => {
  const [loaded, setLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const MIN_LOADER_TIME = 1500;
    const startTime = Date.now();

    const imgLoad = imagesLoaded(document.body);

    imgLoad.on('done', () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOADER_TIME - elapsedTime);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setLoaded(true);
        }, 300);
      }, remainingTime);
    });
  }, []);

  return (
    !loaded && (
      <div id="loader" className={`loader ${loaded ? 'loaded' : ''}`}>
        <div
          id="loaderContent"
          className={`loader__content ${fadeOut ? 'fade-out' : ''}`}
        >
          <div className="loader__shadow"></div>
          <div className="loader__box"></div>
        </div>
      </div>
    )
  );
};

export default Loader;
