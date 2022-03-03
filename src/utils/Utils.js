import { useState, useEffect } from 'react';

export const toggleHover = (e) => {
  e.target.classList.add('rubberBand');
  setTimeout(() => {
    e.target.classList.remove('rubberBand');
  }, 1000);
};

export const LoaderFunction = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(false);
      return;
    } else {
      for (let i = 1; i <= 6; i++) {
        setTimeout(() => {
          if (i >= 2) {
            document
              .querySelector(`.Loader__wrapper--light:nth-child(${i - 1})`)
              .firstElementChild.classList.remove('on');
          }
          document
            .querySelector(`.Loader__wrapper--light:nth-child(${i})`)
            .firstElementChild.classList.add('on');
        }, i * 200);
      }
      setIsLoading(true);
    }

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoading]);

  return isLoading;
};

export const elasticLink = (e) => {
  const socialHandleArr = Array.from(e.target.childNodes);
  const socialHandle = socialHandleArr[1];
  socialHandle.classList.add('elastic');
};

export const nonElasticLink = (e) => {
  const socialHandleArr = Array.from(e.target.childNodes);
  const socialHandle = socialHandleArr[1];
  socialHandle.classList.remove('elastic');
};
