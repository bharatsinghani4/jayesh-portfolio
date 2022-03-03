import { Loader } from '../Loader/Loader';
import { LoaderFunction } from '../../utils/Utils';
import './About.css';

export const About = () => {
  const isLoading = LoaderFunction();

  return (
    <div className='Container__fullWidth'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='About section-full'>
          <p>Hi I am from about component.</p>
        </div>
      )}
    </div>
  );
};
