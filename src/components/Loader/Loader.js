import './Loader.css';

export const Loader = () => {
  return (
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
  );
};
