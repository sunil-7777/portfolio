import Java from '../assets/skills_logos/Java.png'
import Python from '../assets/skills_logos/Python.png'
import JavaScript from '../assets/skills_logos/JavaScript.png'
import Kotlin from '../assets/skills_logos/Kotlin.png'
import Node from '../assets/skills_logos/Node.js.png'
import Express from '../assets/skills_logos/Express.png'
import React from '../assets/skills_logos/React.png'
import Tailwind from '../assets/skills_logos/Tailwind.png'  // Add Tailwind logo
import Android from '../assets/skills_logos/Android.png'  // Add Android logo
import MySQL from '../assets/skills_logos/MySQL.png'  // Add MySQL logo
import Jupyter from '../assets/skills_logos/Jupyter.png'  // Add Jupyter logo

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: Java,
            title: 'Java',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: Python,
            title: 'Python',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: Kotlin,
            title: 'Kotlin',
            style: 'shadow-purple-500',
        },
        {
            id: 5,
            src: Node,
            title: 'Node.js',
            style: 'shadow-green-500',
        },
        {
            id: 6,
            src: Express,
            title: 'Express.js',
            style: 'shadow-gray-500',
        },
        {
            id: 7,
            src: React,
            title: 'React',
            style: 'shadow-blue-400',
        },
        {
            id: 8,
            src: Tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-teal-300',
        },
        {
            id: 9,
            src: Android,
            title: 'Android',
            style: 'shadow-green-700',
        },
        {
            id: 10,
            src: MySQL,
            title: 'MySQL',
            style: 'shadow-blue-600',
        },
        {
            id: 11,
            src: Jupyter,
            title: 'Jupyter',
            style: 'shadow-yellow-500',
        },
    ];

    return (
        <div name="skills" className='min-h-screen pt-20 w-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-5xl inline text-red-700 underline border-red-700 font-StrangerThings'>Skills</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title + " Image"} className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p> {/* Displaying the dynamic title */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Skills;
