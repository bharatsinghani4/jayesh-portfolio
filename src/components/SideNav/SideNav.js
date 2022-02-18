import './SideNav.css';
import Boop from '../Boop/Boop';

export const SideNav = (props) => {
  return (
    <div className='SideNav'>
      <Boop rotation={20} timing={200}>
        <div className='SideNav__Logo'>
          <a href='/'>
            <img src={props.logoURL} alt='Jayesh Portfolio Logo' />
          </a>
        </div>
        <p className='SideNav__Logo--title'>{props.title}</p>
      </Boop>
    </div>
  );
};
