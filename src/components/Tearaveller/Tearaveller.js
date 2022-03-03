import { Loader } from '../Loader/Loader';
import { LoaderFunction } from '../../utils/Utils';
import './Tearaveller.css';

export const Tearaveller = () => {
  const isLoading = LoaderFunction();

  return (
    <div className='Container__fullWidth'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='Tearaveller section-full'>
          <p>Hi I am from Tearaveller component.</p>
        </div>
      )}
    </div>
  );
};
