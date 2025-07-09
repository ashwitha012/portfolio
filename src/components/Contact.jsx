// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, FileDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_eqsss6x',       // Your EmailJS Service ID
        'template_vnosn6k',       // Your EmailJS Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        '2pZoMN6PIxNyc5xTI'      // Your EmailJS Public Key
      )
      .then(() => {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        setStatus('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">Contact Me</h2>
        <p className="text-center text-gray-600">I’m open to full-time opportunities. Feel free to reach out!</p>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-600 w-6 h-6" />
            <span className="text-gray-700 text-lg">ashwithareddyn123@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-green-600 w-6 h-6" />
            <span className="text-gray-700 text-lg">+1 (713) 412-9212</span>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="text-blue-700 w-6 h-6" />
            <a
              href="https://www.linkedin.com/in/ashwitha-reddy-nimmala-923a03245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 text-lg hover:underline"
            >
              linkedin.com/in/ashwitha-reddy-nimmala
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FileDown className="text-purple-600 w-6 h-6" />
            <a href="/Resume.pdf" download className="text-gray-700 text-lg hover:underline">
              Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p
            className={`text-center font-medium mt-4 ${
              status.startsWith('✅') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
