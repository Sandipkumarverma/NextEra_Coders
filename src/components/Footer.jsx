// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message sent successfully! (This is a demo)");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-700 mt-20 shadow-xl pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-700">NextEra Coders</h2>
          <p className="mt-2 text-sm text-gray-600">
            Empowering the next generation of developers with real-world coding skills and a smart learning environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-blue-700 font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-600">🏠 Home</Link></li>
            <li><Link to="/courses" className="hover:text-blue-600">📚 Courses</Link></li>
            <li><Link to="/practice" className="hover:text-blue-600">🧠 DSA Practice</Link></li>
            <li><Link to="/editor" className="hover:text-blue-600">💻 Code Editor</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-blue-700 font-semibold text-lg mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaEnvelope className="text-blue-500" /> sandipkrvirat@gmail.com</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-blue-500" /> +91 8102292840</li>
            <li>📍 Giridih, Jharkhand, India</li>
          </ul>

          {/* Socials */}
          <div className="flex gap-4 text-xl mt-4">
            <a href="https://youtube.com/@NextEraCoders" target="_blank" rel="noreferrer" className="hover:text-red-600"><FaYoutube /></a>
            <a href="https://github.com/Sandipkumarverma" target="_blank" rel="noreferrer" className="hover:text-gray-800"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sandip-kr-verma/" target="_blank" rel="noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-blue-700 font-semibold text-lg mb-3">📬 Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-sm">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={3}
              required
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-200 py-3 text-center text-xs text-gray-700">
        © {new Date().getFullYear()} <span className="font-semibold text-blue-800">NextEra Coders</span>. Made with ❤️ by Sandip Kumar Verma.
      </div>
    </footer>
  );
};

export default Footer;
