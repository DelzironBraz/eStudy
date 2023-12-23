import { Link } from 'react-scroll';
import { LuMenu } from "react-icons/lu";
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }

    return (
        <header>
            <div className='md:w-full md:fixed md:top-0 flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div>
                    <Link to="/" className='font-semibold text-2xl p-1 cursor-pointer text-brightGreen'>eStudy</Link>
                </div>
                <nav className='hidden md:flex gap-5 font-medium p-1 cursor-pointer'>
                    <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Home</Link>
                    <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>About</Link>
                    <Link to="courses" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Courses</Link>
                    <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Reviews</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Contact</Link>
                </nav>

                <div className='flex md:hidden' onClick={handleChange}>
                    <div>
                        <LuMenu size={22} />
                    </div>
                </div>

                <nav className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-200 ease-in-out`}>
                    <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Home</Link>
                    <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>About</Link>
                    <Link to="courses" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Courses</Link>
                    <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Reviews</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;