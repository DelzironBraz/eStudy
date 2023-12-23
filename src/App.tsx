import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Courses from './pages/Courses';

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

      <div id='courses'>
        <Courses />
      </div>
    </main>
  );
};

export default App;