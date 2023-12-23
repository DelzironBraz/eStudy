import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer>
            <div className='bg-white rounded-l shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div className='flex flex-col md:flex-row justify-between p-5 md:px-32 border-1 border-solid border-lightText'>
                    <nav className='flex flex-col md:flex-row gap-5 font-medium p-1 cursor-pointer'>
                        <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Home</Link>
                        <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>About</Link>
                        <Link to="courses" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Courses</Link>
                        <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Reviews</Link>
                        <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-brightGreen transition-all cursor-pointer'>Contact</Link>
                    </nav>

                    <div>
                        <Link to="/" className='font-semibold text-2xl p-1 cursor-pointer text-brightGreen'>eStudy</Link>
                    </div>
                </div>
                <div className="text-center py-4">
                    <p>@Copyright a project clone of <span className="hover:brightGreen">champion programmers</span> | All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;