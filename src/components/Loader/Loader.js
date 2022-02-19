import './Loader.css';
import logo from '../../resources/images/logo.png';

export const Loader = () => {
  return (
    <div className='Loader Loader__flex'>
      <div className='Loader__logo--box'>
        <img
          src={logo}
          alt="Jayesh's Portfolio Logo"
          className='Loader__logo'
        />
      </div>
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
  );
};
