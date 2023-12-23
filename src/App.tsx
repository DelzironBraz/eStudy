import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>

      <main className='bg-brightBackground'>
        <Navbar />
        <div id='home'>
          <Home />
        </div>
      </main>
    </>
  );
};

export default App;