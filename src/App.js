import { Loader } from './components/Loader/Loader';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Loader />} exact={true} />
      </Routes>
    </div>
  );
};

export default App;
