import React from 'react';
import Slider from 'react-slick';
import PortfolioScreenshot from '../assets/project_images/portfolio_screenshot.png';
import PlantProjectScreenshot from '../assets/project_images/plant_project_screenshot.png';
import InProgress from '../assets/project_images/in_progress.png';

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        lazyLoad: 'progressive',
    };

    const projects = [
        {
            id: 1,
            image: PlantProjectScreenshot,
            title: 'Plant Protect',
            description: 'In this project, I developed a comprehensive agricultural assistance system designed to empower farmers with essential recommendations. The system provides crop recommendations based on environmental and soil conditions, fertilizer suggestions tailored to the specific crop and soil type, and diagnoses crop diseases by predicting their names, causes, and potential cures. Built using Python, it leverages libraries like NumPy, Pandas, scikit-learn, and Flask for data processing, model deployment, and API integrations. With Pillow for image handling and Requests for API calls, this project exemplifies my ability to integrate data science and web technologies to deliver practical, impactful solutions for the farming community.',
        },
        {
            id: 2,
            image: PortfolioScreenshot,
            title: 'Personal Portfolio',
            description: 'This portfolio project is a showcase of my skills, creativity, and passion for web development. It features a sleek and modern design built with React and Tailwind CSS, demonstrating my ability to create responsive and interactive user interfaces. The portfolio includes sections highlighting my projects, skills, and contact details, with animations and transitions enhancing user experience. The Projects section features a dynamic carousel, showcasing my work with detailed descriptions and visual previews. This project reflects my dedication to building functional and aesthetically pleasing web applications while emphasizing attention to detail and user-centric design. It’s a testament to my growth as a developer.',
        },
        {
            id: 3,
            image: InProgress,
            title: 'AI Project (In Progress)',
            description: 'Working on some awesome AI project.',
        },
    ];

    return (
        <div name="projects" className="min-h-screen w-full p-4 pt-20">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-5xl inline text-red-700 underline font-StrangerThings">
                        Projects
                    </p>
                </div>
                <div className="mt-4">
                    <Slider {...settings}>
                        {projects.map((project) => (
                            <div key={project.id} className="p-4">
                                <div className="bg-gray-700 bg-opacity-30 border-2 border-red-700 rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`Project ${project.id}`}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-4">
                                        <p className="text-center text-xl font-StrangerThings text-red-700">
                                            {project.title}
                                        </p>
                                        <p className="text-center text-lg mt-2">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Projects;
