import { Loader } from '../Loader/Loader';
import { LoaderFunction } from '../../utils/Utils';
import './Services.css';

export const Services = () => {
  const isLoading = LoaderFunction();

  return (
    <div className='Container__fullWidth'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='Services section-full'>
          <p>Hi I am from Services component.</p>
        </div>
      )}
    </div>
  );
};
