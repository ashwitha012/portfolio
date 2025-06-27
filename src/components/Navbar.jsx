// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 bg-white shadow px-6 py-4 flex items-center">
      {/* Push links to the right */}
      <div className="ml-auto space-x-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
