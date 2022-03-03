import { Loader } from '../Loader/Loader';
import { LoaderFunction } from '../../utils/Utils';
import './Instagram.css';

export const Instagram = () => {
  const isLoading = LoaderFunction();

  return (
    <div className='Container__fullWidth'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='Instagram section-full'>
          <p>Hi I am from instagram component.</p>
        </div>
      )}
    </div>
  );
};
