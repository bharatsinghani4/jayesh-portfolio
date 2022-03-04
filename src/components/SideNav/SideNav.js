import { Link } from 'react-router-dom';
import { elasticLink, nonElasticLink } from '../../utils/Utils';
import './SideNav.css';
import Boop from '../Boop/Boop';
import logoURL from '../../resources/images/logo_transparent.png';

export const SideNav = () => {
  const toggleActiveClass = (e) => {
    const linksArray = Array.from(document.querySelectorAll('.SideNav__Links'));
    linksArray.map((link) => {
      link.classList.remove('active');
    });
    e.target.classList.add('active');
  };

  return (
    <div className='SideNav'>
      <div className='SideNav__Logo--wrapper'>
        <Link to='/' className='SideNav__Logo'>
          <img src={logoURL} alt='Jayesh Portfolio Logo' />
        </Link>
        <p className='SideNav__Logo--title'>Jayesh Singhani</p>
      </div>
      <div className='SideNav__Links--wrapper'>
        <Link
          to='/about'
          className='SideNav__Links'
          onClick={toggleActiveClass}>
          About
        </Link>
        <Link
          to='/tearaveller'
          className='SideNav__Links'
          onClick={toggleActiveClass}>
          Tearaveller
        </Link>
        <Link
          to='/services'
          className='SideNav__Links'
          onClick={toggleActiveClass}>
          Services
        </Link>
        <Link
          to='/photography'
          className='SideNav__Links'
          onClick={toggleActiveClass}>
          Photography
        </Link>
        <Link
          to='/instagram'
          className='SideNav__Links'
          onClick={toggleActiveClass}>
          Instagram
        </Link>
        <Link
          to='/contact'
          className='SideNav__Links'
          onClick={toggleActiveClass}>
          Contact Me
        </Link>
      </div>
      <div className='SideNav__SocialMedia--wrapper'>
        <a
          href='https://www.linkedin.com/in/jayesh-s-416a6915a/'
          target='_blank'
          aria-label="Jayesh's Linked Profile"
          className='SideNav__SocialMedia--link'
          onMouseEnter={elasticLink}
          onMouseLeave={nonElasticLink}
          onBlur={nonElasticLink}>
          <Boop rotation={45} timing={100}>
            <div className='SideNav__SocialMedia--box linkedin'>
              <div className='SideNav__SocialMedia'>
                <i className='fa-brands fa-linkedin-in'></i>
              </div>
            </div>
          </Boop>
          <p>Jayesh Singhani</p>
        </a>
        <a
          href='https://www.instagram.com/jsinghani_023/'
          target='_blank'
          aria-label="Jayesh's Instagram Profile"
          className='SideNav__SocialMedia--link'
          onMouseEnter={elasticLink}
          onMouseLeave={nonElasticLink}
          onBlur={nonElasticLink}>
          <Boop rotation={45} timing={100}>
            <div className='SideNav__SocialMedia--box'>
              <div
                aria-label="Jayesh's Instagram Profile"
                className='SideNav__SocialMedia'>
                <i className='fa-brands fa-instagram'></i>
              </div>
            </div>
          </Boop>
          <p>@jsinghani_023</p>
        </a>
        <a
          href='https://www.instagram.com/the_tearaveller/'
          target='_blank'
          aria-label="Tearaveller's Instagram Profile"
          className='SideNav__SocialMedia--link'
          onMouseEnter={elasticLink}
          onMouseLeave={nonElasticLink}
          onBlur={nonElasticLink}>
          <Boop rotation={45} timing={100}>
            <div className='SideNav__SocialMedia--box'>
              <div className='SideNav__SocialMedia'>
                <i className='fa-brands fa-instagram'></i>
              </div>
            </div>
          </Boop>
          <p>@the_tearaveller</p>
        </a>
      </div>
    </div>
  );
};
