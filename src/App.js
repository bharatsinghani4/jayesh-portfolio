import { Home } from './components/Home/Home';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
      </Routes>
    </div>
  );
};

export default App;
