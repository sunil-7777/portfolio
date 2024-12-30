import React from 'react';
import HeroImage from '../assets/hero_image.png';
import { MdOutlineKeyboardArrowRight, MdLocationCity } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='h-screen w-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                {/* Text Content */}
                <div className='flex flex-col justify-center h-full md:w-3/5'>
                    <div className='text-4xl sm:text-5xl font-bold'>
                        I am
                        <br />
                        <TypeAnimation
                            sequence={[
                                "A FullStack Developer",
                                1000,
                                "An Android Developer",
                                1000,
                                "A Data Science student",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <p className='text-red-600 py-4 max-w-md flex items-center font-bold'>
                        <MdLocationCity className='mr-2' />
                        Bangalore, Karnataka, In
                    </p>
                    <div>
                        <Link to='about' smooth duration={300}>
                            <button className='group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-bl from-red-700 to-red-950 cursor-pointer'>
                                Know more
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </button>
                        </Link>

                    </div>
                </div>

                {/* Image Section */}
                <div className='md:w-2/5'>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className='rounded-2xl mx-auto w-2/3 md:w-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
