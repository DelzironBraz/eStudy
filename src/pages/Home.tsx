import { Link } from 'react-scroll';
import Button from '../components/Button';
import img from '../assets/hero.svg';

const Home = () => {
    return (
        <main className='min-h-[70vh] flex flex-col md:flex-row md:justify-between gap-5 items-center md:mx-32 mx-5 mt-10'>
            <div className='md:w-2/4 text-center'>
                <h2 className='text-5xl font-semibold leading-tight'>Knowledge with</h2>
                <span className='text-5xl font-semibold text-brightGreen'>eStudy</span>

                <p className='text-lightText mt-5 text-justify'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one
                    of the more obscure Latin words, consectetur
                </p>

                <Link to='contact' spy={true} smooth={true} duration={500}>
                    <Button title="Contact Us" />
                </Link>
            </div>

            <div className='w-full md:w-2/4'>
                <img src={img} alt="hero" />
            </div>
        </main>
    );
};

export default Home;