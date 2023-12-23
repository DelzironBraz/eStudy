import Button from "../components/Button";
import Heading from "../components/Heading";
import img from '../assets/contact.svg';

const Contact = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row gap-5 justify-center items-center md:mx-32 mx-5 my-10">
            <div className="w-full md:w-2/4">
                <Heading title="Contact" subTitle="Us" />
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col justify-center items-start">
                        <label htmlFor="username">Your Name</label>
                        <input className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.2)_0px_3px_8px] transition-all outline-none w-full' type="text" id="username" name="username" placeholder="enter your name" required />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <label htmlFor="email">Your E-mail</label>
                        <input className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.2)_0px_3px_8px] transition-all outline-none w-full' type="email" id="email" name="email" placeholder="enter your e-mail" required />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <label htmlFor="number">Your Number</label>
                        <input className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.2)_0px_3px_8px] transition-all outline-none w-full' type="tel" id="number" name="number" placeholder="enter your number" required />
                    </div>

                    <div className="flex flex-row justify-center">
                        <Button title="Send Message" />
                    </div>
                </form>
            </div>

            <div className="w-full md:w-2/4">
                <img src={img} alt="contact" />
            </div>
        </section>
    );
};

export default Contact;