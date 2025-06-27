import React from 'react';
import bg from '../assets/bg.jpg';

const About = () => {
  return (
    
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        >
<section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Passionate Full Stack Developer with 3+ years of experience in  building scalable web applications. Specializing in clean code, secure architecture, and cloud-native deployments.
        </p>

        {/* About Paragraphs */}
        <div className="space-y-5 text-lg text-gray-700 mb-12 leading-relaxed">
          <p>
            I have expertise in backend technologies like <strong>Java, Spring Boot, REST APIs</strong> and frontend frameworks like <strong>React.js and TypeScript</strong>. I enjoy translating complex business requirements into scalable software solutions.
          </p>
          <p>
            My experience includes deploying applications on <strong>AWS</strong>, implementing microservices with <strong>Kafka</strong>, and working in <strong>Agile teams</strong> using modern CI/CD tools like Jenkins and GitHub Actions.
          </p>
        </div>

        {/* Technical Skills Section */}
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">Frontend</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>React.js, Redux, React Router</li>
              <li>TypeScript, JavaScript</li>
              <li>HTML5, CSS3, Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-green-600 mb-3">Backend</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Java, Spring Boot, REST APIs</li>
              <li>JPA, Hibernate, MySQL, PostgreSQL</li>
              <li>JWT, OAuth2, Spring Security</li>
            </ul>
          </div>

          {/* DevOps */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-purple-600 mb-3">DevOps & CI/CD</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Docker, Kubernetes</li>
              <li>Jenkins, GitHub Actions</li>
              <li>Postman, Junit, Mockito</li>
            </ul>
          </div>

          {/* Cloud & Others */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-yellow-600 mb-3">Cloud & Tools</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>AWS (EC2, S3, Lambda, RDS)</li>
              <li>Kafka, RabbitMQ</li>
              <li>Agile, Git, GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
