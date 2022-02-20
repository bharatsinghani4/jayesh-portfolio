import { Home } from './components/Home/Home';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Instagram } from './components/Instagram/Instagram';
import { Photography } from './components/Photography/Photography';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
        <Route path='/about' element={<About />} exact={true} />
        <Route path='/contact' element={<Contact />} exact={true} />
        <Route path='/instagram' element={<Instagram />} exact={true} />
        <Route path='/photography' element={<Photography />} exact={true} />
      </Routes>
    </div>
  );
};

export default App;
