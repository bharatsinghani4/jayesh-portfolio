import { LoaderFunction } from '../../utils/Utils';
import { Loader } from '../Loader/Loader';
import { MainContent } from '../MainContent/MainContent';
import './Home.css';
import { Contact } from '../Contact/Contact';
import { About } from '../About/About';
import { Photography } from '../Photography/Photography';
import { Instagram } from '../Instagram/Instagram';
import { Services } from '../Services/Services';

export const Home = () => {
  const isLoading = LoaderFunction();

  return (
    <div className='Container__fullWidth'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='Home'>
          <div className='Loader__flex section-full'>
            <MainContent />
          </div>
          <About />
          <Services />
          <Photography />
          <Instagram />
          <Contact />
        </div>
      )}
    </div>
  );
};
