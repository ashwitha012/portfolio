import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col fixed top-1/3 left-0 z-50 space-y-4 pl-2">
      <a
        href="https://www.linkedin.com/in/ashwitha-reddy-nimmala-923a03245"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600"
      >
        <Linkedin size={24} />
      </a>
      
      
      <a
        href="mailto:ashwithareddy811@gmail.com"
        className="text-gray-600 hover:text-red-600"
      >
        <Mail size={24} />
      </a>
      <a
        href="/resume.pdf"
        download
        className="text-gray-600 hover:text-green-600"
      >
        <Download size={24} />
      </a>
    </div>
  );
};

export default Sidebar;
