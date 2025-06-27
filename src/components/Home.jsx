import React from 'react';
import bg from '../assets/bg.jpg';
import avatar from '../assets/avatar.jpeg';
import { Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 bg-transparent">
        {/* Avatar */}
        <img
          src={avatar}
          alt="Avatar"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg mb-6"
        />

        {/* Blinking Intro Text */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 animate-blink">
          I am Ashwitha Reddy Nimmala
        </h1>

        {/* Role */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
          Full Stack Developer | Java, Spring Boot, React.js, AWS
        </h2>

        {/* Description */}
        <p className="max-w-xl text-gray-700 mb-6">
          I build scalable backend systems and responsive front-end interfaces.
          Passionate about microservices, cloud-native deployments, and
          creating seamless user experiences.
        </p>

        {/* View Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
        >
          View My Resume
        </a>
      </section>
    </div>
    
    <About id="ab"></About>
    <Projects></Projects>
    <Contact></Contact>
    </div>
  );
};

export default Home;
