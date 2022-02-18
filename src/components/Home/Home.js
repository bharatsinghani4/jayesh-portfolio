import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { MainContent } from '../MainContent/MainContent';
import { SideNav } from '../SideNav/SideNav';
import logo from '../../resources/images/logo_transparent.png';
import './Home.css';

export const Home = () => {
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

  return (
    <div className='Container__fullWidth'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='Loader__flex'>
          <MainContent />
          <SideNav logoURL={logo} title='Jack of all things!' />
        </div>
      )}
    </div>
  );
};
