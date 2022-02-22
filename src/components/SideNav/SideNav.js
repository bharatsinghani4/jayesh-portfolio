import { Link } from 'react-router-dom';
import './SideNav.css';
import Boop from '../Boop/Boop';
import logoURL from '../../resources/images/logo_transparent.png';

export const SideNav = () => {
  return (
    <div className='SideNav'>
      <div className='SideNav__Logo--wrapper'>
        <Link to='/' className='SideNav__Logo'>
          <img src={logoURL} alt='Jayesh Portfolio Logo' />
        </Link>
        <p className='SideNav__Logo--title'>Jayesh Singhani</p>
      </div>
      <div className='SideNav__Links--wrapper'>
        <Link to='/about' className='SideNav__Links'>About</Link>
        <Link to='/tearaveller' className='SideNav__Links'>Tearaveller</Link>
        <Link to='/services' className='SideNav__Links'>Services</Link>
        <Link to='/photography' className='SideNav__Links'>Photography</Link>
        <Link to='/instagram' className='SideNav__Links'>Instagram</Link>
        <Link to='/contact' className='SideNav__Links'>Contact Me</Link>
      </div>
      <div className='SideNav__SocialMedia--wrapper'>
        <div className="SideNav__SocialMedia--link">
          <Boop rotation={20} timing={200}>
            <div className='SideNav__SocialMedia--box linkedin'>
              <a
                href='https://www.linkedin.com/in/jayesh-s-416a6915a/'
                target='_blank'
                aria-label="Jayesh's Linked Profile"
                className='SideNav__SocialMedia'
              >
                <i className='fa-brands fa-linkedin-in'></i>
              </a>
            </div>
          </Boop>
          <p>Jayesh Singhani</p>
        </div>
        <div className="SideNav__SocialMedia--link">
          <Boop rotation={20} timing={200}>
            <div className='SideNav__SocialMedia--box'>
              <a
                href='https://www.instagram.com/jsinghani_023/'
                target='_blank'
                aria-label="Jayesh's Instagram Profile"
                className='SideNav__SocialMedia'
              >
                <i className='fa-brands fa-instagram'></i>
              </a>
            </div>
          </Boop>
          <p>@jsinghani_023</p>
        </div>
        <div className="SideNav__SocialMedia--link">
          <Boop rotation={20} timing={200}>
            <div className='SideNav__SocialMedia--box'>
              <a
                href='https://www.instagram.com/the_tearaveller/'
                target='_blank'
                aria-label="Tearaveller's Instagram Profile"
                className='SideNav__SocialMedia'
              >
                <i className='fa-brands fa-instagram'></i>
              </a>
            </div>
          </Boop>
          <p>@the_tearaveller</p>
        </div>
      </div>
    </div>
  );
};
