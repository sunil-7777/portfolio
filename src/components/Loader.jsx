import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-black">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-red-700 border-opacity-75"></div>
            <p className='text-red-700 text-xl pt-8'>Heading upside down</p>
        </div>
    );
};

export default Loader;
