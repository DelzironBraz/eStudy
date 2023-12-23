import img from '../assets/about.svg';
import Button from '../components/Button';
import { Link } from 'react-scroll';
import Heading from '../components/Heading';

const About = () => {
    return (
        <section className='md:min-h-screen flex flex-col-reverse justify-between md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14'>
            <div className='w-full md:w-2/4'>
                <img src={img} alt="about" />
            </div>
            <div className='w-full md:w-2/4 text-justify space-y-2'>
                <Heading title="About" subTitle="Us?" />
                <p className='text-lightText'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old.
                </p>
                <Link to='contact' spy={true} smooth={true} duration={500}>
                    <Button title="Contact Us" />
                </Link>
            </div>
        </section>
    );
};

export default About;