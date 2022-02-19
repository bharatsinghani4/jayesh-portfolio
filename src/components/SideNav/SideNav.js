import './SideNav.css';
import Boop from '../Boop/Boop';

export const SideNav = (props) => {
  return (
    <div className='SideNav'>
      <div className='SideNav__Logo--wrapper'>
        {/* <Boop rotation={20} timing={200}></Boop> */}
        <div className='SideNav__Logo'>
          <a href='/'>
            <img src={props.logoURL} alt='Jayesh Portfolio Logo' />
          </a>
        </div>
        <p className='SideNav__Logo--title'>{props.title}</p>
      </div>
      <div className='SideNav__Links--wrapper'></div>
      <div className='SideNav__SocialMedia--wrapper'></div>
    </div>
  );
};
