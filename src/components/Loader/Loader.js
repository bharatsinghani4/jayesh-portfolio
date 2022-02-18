import './Loader.css';
import { useState, useEffect } from 'react';
import { SideNav } from '../SideNav/SideNav';
import { MainContent } from '../MainContent/MainContent';

export const Loader = () => {
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
  }, []);

  return (
    <div className='Container__fullWidth'>
      {isLoading && (
        <div className='Loader Loader__flex'>
          <h2 className='Loader__heading'>Jack is thinking</h2>
          <div className='Loader__wrapper Loader__flex'>
            <div className='Loader__wrapper--light Loader__flex'>
              <div className='Loader__wrapper--light-bulb'></div>
            </div>
            <div className='Loader__wrapper--light Loader__flex'>
              <div className='Loader__wrapper--light-bulb'></div>
            </div>
            <div className='Loader__wrapper--light Loader__flex'>
              <div className='Loader__wrapper--light-bulb'></div>
            </div>
            <div className='Loader__wrapper--light Loader__flex'>
              <div className='Loader__wrapper--light-bulb'></div>
            </div>
            <div className='Loader__wrapper--light Loader__flex'>
              <div className='Loader__wrapper--light-bulb'></div>
            </div>
            <div className='Loader__wrapper--light Loader__flex'>
              <div className='Loader__wrapper--light-bulb'></div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className='Loader__flex'>
          <MainContent />
          <SideNav />
        </div>
      )}
    </div>
  );
};
