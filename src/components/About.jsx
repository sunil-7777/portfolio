import React from 'react';

const About = () => {
  return (
    <div name="about" className='min-h-screen pt-24 w-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        {/* Heading Section */}
        <div className='pb-8'>
          <p className='text-5xl inline text-red-700 underline border-red-700 font-StrangerThings'>
            About
          </p>
        </div>

        {/* Content Section */}
        <section className='text-xl space-y-6'>
          <p>
            I am <b>Pathakamuri Sunil Kumar</b>, an enthusiastic engineering student with a keen interest in Artificial Intelligence, Data Science, and innovative technologies. My passion lies in exploring the endless possibilities of AI and its applications in solving real-world challenges. I am deeply fascinated by how data can be transformed into actionable insights and strive to enhance my knowledge in programming, machine learning, and cutting-edge development tools. With a strong foundation in languages like Python, Java, and Kotlin, I enjoy delving into complex problems and building efficient, scalable solutions.
          </p>

          <p>
            Beyond academics, I am equally passionate about staying updated on emerging tech trends and experimenting with various frameworks and tools. I am drawn to the creative and analytical aspects of coding, which fuels my curiosity to continuously learn and grow. My commitment to innovation and teamwork drives me to contribute to impactful projects and pursue opportunities that help shape the future of technology.
          </p>
        </section>
      </div>
    </div>

  );
};

export default About;
