import { Routes, Route, Link } from 'react-router-dom';
import { Contact } from '../Contact/Contact';
import './MainContent.css';

export const MainContent = () => {
  const toggleHover = (e) => {
    e.target.classList.add('rubberBand');
    setTimeout(() => {
      e.target.classList.remove('rubberBand');
    }, 1000);
  };

  return (
    <div className='MainContent'>
      <div className='MainContent__wrapper'>
        <h1
          className='MainContent__title'
          aria-label="Hi, I'm Jayesh, market researcher"
        >
          <span
            className='MainContent__title--letter'
            onMouseEnter={toggleHover}
            aria-hidden='true'
          >
            H
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            i
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            ,
          </span>
          <br />
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            I
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            '
          </span>
          <span
            className='MainContent__title--letter space'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            m
          </span>
          <span
            className='MainContent__title--letter seagreen'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            J
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            a
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            y
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            e
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            s
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            h
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            ,
          </span>
          <br />
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            m
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            a
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            r
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            k
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            e
          </span>
          <span
            className='MainContent__title--letter space'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            t
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            r
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            e
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            s
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            e
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            a
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            r
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            c
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            h
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            e
          </span>
          <span
            className='MainContent__title--letter'
            aria-hidden='true'
            onMouseEnter={toggleHover}
          >
            r
          </span>
          {/* <div className='MainContent__word'>
            <div className='MainContent__word--inline'></div>
            <div className='MainContent__word--inline'></div>
          </div>
          <div className='MainContent__word'>
            <div className='MainContent__word--inline'></div>
            <div className='MainContent__word--inline'></div>
          </div> */}
        </h1>
        <p className='MainContent__subtitle'>
          CEO(Tearaveller) / Entrepreneur / Photographer / Freelancer / Blogger
        </p>
        <Link
          to='/contact'
          className='MainContent__contactMeCTA'
          onMouseEnter={toggleHover}
        >
          Contact Me!
        </Link>
      </div>
    </div>
  );
};
