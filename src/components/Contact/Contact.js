import { Loader } from '../Loader/Loader';
import { LoaderFunction } from '../../utils/Utils';
import './Contact.css';

export const Contact = () => {
  const isLoading = LoaderFunction();

  return (
    <div className='Container__fullWidth'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='Contact section-full'>
          <p>Hi I am from contact component.</p>
        </div>
      )}
    </div>
  );
};
