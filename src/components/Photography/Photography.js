import { Loader } from '../Loader/Loader';
import { LoaderFunction } from '../../utils/Utils';
import './Photography.css';

export const Photography = () => {
  const isLoading = LoaderFunction();

  return (
    <div className='Container__fullWidth'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='Photography section-full'>
          <p>Hi I am from photography component.</p>
        </div>
      )}
    </div>
  );
};
