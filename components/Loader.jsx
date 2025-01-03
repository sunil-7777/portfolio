import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-black">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-red-700 border-opacity-75"></div>
        </div>
    );
};

export default Loader;
