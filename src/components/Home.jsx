import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Character from "./Character";
import { MdOutlineKeyboardArrowRight, MdLocationCity } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Home = () => {
    const [allAnimation, setAllAnimation] = useState([
        "golf",
        "idle",
        "jump",
        "pockets",
        "react",
        "rope",
        "shrug",
        "swingdance",
        "wave",
    ]);

    const [currentAnimationName, setCurrentAnimationName] = useState("wave");

    return (
        <div name='home' className='h-screen w-full relative flex flex-col justify-center pt-20'>
            {/* Main Container */}
            <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row w-full h-[90%]'>
                {/* Text Content */}
                <div className='flex flex-col justify-center h-full w-full md:w-3/5 px-4'>
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

                {/* 3D Model Section */}
                <div className='relative w-full md:w-2/5 h-full flex flex-col justify-between'>
                    <Canvas
                        className="w-full h-full"
                        camera={{ position: [0, 1.25, 2.5], fov: 50, near: 0.1, far: 1000 }}
                    >
                        <OrbitControls />
                        <ambientLight intensity={1} />
                        <directionalLight position={[-5, 5, 5]} />
                        <Character currentAnimationName={currentAnimationName} />
                    </Canvas>
                </div>
            </div>

            <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row w-full h-[10%]'>
                {/* Overlay Buttons */}
                <div className="flex flex-wrap md:flex-nowrap justify-between p-2 bg-red-950 bg-opacity-40 rounded-3xl z-20 w-full">
                    {allAnimation.map((name, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentAnimationName(name)}
                            className="h-10 flex-1 min-w-[30%] md:min-w-0 bg-red-800 text-white p-2 mx-1 my-1 rounded-2xl hover:bg-gradient-to-bl from-red-700 to-red-950 transition font-semibold"
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;