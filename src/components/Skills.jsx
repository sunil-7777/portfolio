import Java from '../assets/skills_logos/android/Java.png';
import Python from '../assets/skills_logos/machine_learning/Python.png';
import JavaScript from '../assets/skills_logos/backend/JavaScript.png';
import Kotlin from '../assets/skills_logos/android/Kotlin.png';
import Node from '../assets/skills_logos/backend/Node.js.png';
import Express from '../assets/skills_logos/backend/Express.png';
import SpringBoot from '../assets/skills_logos/backend/SpringBoot.png'
import ApacheMaven from '../assets/skills_logos/backend/ApacheMaven.png'
import React from '../assets/skills_logos/frontend/React.png';
import Tailwind from '../assets/skills_logos/frontend/Tailwind.png';
import Android from '../assets/skills_logos/android/Android.png';
import MySQL from '../assets/skills_logos/backend/MySQL.png';
import Jupyter from '../assets/skills_logos/machine_learning/Jupyter.png';
import HTML5 from '../assets/skills_logos/frontend/HTML5.png';
import CSS3 from '../assets/skills_logos/frontend/CSS3.png';
import NumPy from '../assets/skills_logos/machine_learning/NumPy.png';
import Pandas from '../assets/skills_logos/machine_learning/Pandas.png';
import ScikitLearn from '../assets/skills_logos/machine_learning/scikit-learn.png';
import TensorFlow from '../assets/skills_logos/machine_learning/TensorFlow.png';
import Gradle from '../assets/skills_logos/android/Gradle.png';

const Skills = () => {
    const skillsData = {
        frontend: [
            { id: 1, src: HTML5, title: 'HTML5', style: 'shadow-orange-500' },
            { id: 2, src: CSS3, title: 'CSS3', style: 'shadow-blue-500' },
            { id: 3, src: React, title: 'React', style: 'shadow-blue-400' },
            { id: 4, src: Tailwind, title: 'Tailwind CSS', style: 'shadow-teal-300' },
        ],
        android: [
            { id: 5, src: Android, title: 'Android Studio', style: 'shadow-green-700' },
            { id: 6, src: Java, title: 'Java', style: 'shadow-orange-500' },
            { id: 7, src: Kotlin, title: 'Kotlin', style: 'shadow-purple-500' },
            { id: 8, src: Gradle, title: 'Gradle', style: 'shadow-gray-700' },
        ],
        backend: [
            { id: 9, src: JavaScript, title: 'JavaScript', style: 'shadow-yellow-500' },
            { id: 10, src: Node, title: 'Node.js', style: 'shadow-green-500' },
            { id: 11, src: Express, title: 'Express.js', style: 'shadow-gray-500' },
            { id: 12, src: MySQL, title: 'MySQL', style: 'shadow-blue-600' },
            { id: 13, src: SpringBoot, title: 'Spring Boot', style: 'shadow-green-600' },
            { id: 14, src: ApacheMaven, title: 'Maven', style: 'shadow-pink-600' },
        ],
        machine_learning: [
            { id: 15, src: Python, title: 'Python', style: 'shadow-blue-500' },
            { id: 16, src: Jupyter, title: 'Jupyter', style: 'shadow-orange-500' },
            { id: 17, src: NumPy, title: 'NumPy', style: 'shadow-blue-300' },
            { id: 18, src: Pandas, title: 'Pandas', style: 'shadow-blue-900' },
            { id: 19, src: ScikitLearn, title: 'Scikit-learn', style: 'shadow-orange-400' },
            { id: 20, src: TensorFlow, title: 'TensorFlow', style: 'shadow-orange-600' },
        ],
    };

    return (
        <div name="skills" className='min-h-screen pt-20 w-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-5xl inline text-red-700 underline border-red-700 font-StrangerThings'>Skills</p>
                </div>
                <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className='p-4 bg-gray-700 bg-opacity-30 rounded-lg border-2 border-red-700'>
                            <h2 className='text-3xl font-bold capitalize mb-4 text-red-700 font-StrangerThingsOutlined'>{category.replace('_', ' ')}</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {skills.map(({ id, src, title, style }) => (
                                    <div key={id} className={`flex items-center shadow-sm hover:scale-105 duration-500 py-2 px-4 rounded-lg ${style}`}>
                                        <img src={src} alt={`${title} Logo`} className='w-10 h-10' />
                                        <p className='ml-4 text-base'>{title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
