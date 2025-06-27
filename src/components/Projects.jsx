// src/pages/Projects.jsx
import React from 'react';
import hospitalImg from '../assets/hospital-management.jpeg'; // Hospital image
import movieRecImg from '../assets/image.webp'; // Movie image

const Projects = () => {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hospital Management System */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col space-y-4">
          <img
            src={hospitalImg}
            alt="Hospital Management System"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hospital Management System</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Role-based dashboards for Patients, Doctors, and Admins.</li>
              <li>JWT auth with 2FA (email OTP).</li>
              <li>RESTful services using DTOs & validation.</li>
              <li>Real-time slot booking with clash prevention.</li>
              <li>Frontend in React with protected routes.</li>
            </ul>
          </div>
        </div>

        {/* Movie Recommendation System */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col space-y-4">
          <img
            src={movieRecImg}
            alt="Movie Recommendation System"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Movie Recommendation System</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Built a hybrid recommendation system combining collaborative and content-based filtering. Increased accuracy by 15%. Backend developed in R and frontend using Streamlit. Optimized over 100K movie ratings with reduced response time by 30%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
