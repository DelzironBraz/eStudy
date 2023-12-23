import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Courses from './pages/Courses';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

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

      <div id='reviews'>
        <Reviews />
      </div>

      <div id='contact'>
        <Contact />
      </div>
    </main>
  );
};

export default App;