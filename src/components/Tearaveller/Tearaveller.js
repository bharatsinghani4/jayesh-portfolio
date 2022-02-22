import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import './Tearaveller.css';

export const Tearaveller = () => {
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
        <div className='Tearaveller section-full'>
          <p>Hi I am from Tearaveller component.</p>
        </div>
      )}
    </div>
  );
};
