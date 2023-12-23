import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';

const App = () => {
  return (
    <main className='bg-brightBackground'>
      <Navbar />

      <div id='home'>
        <Home />
      </div>

      <div id='about'>
        <About />
      </div>
    </main>
  );
};

export default App;