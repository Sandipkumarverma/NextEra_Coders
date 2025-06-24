

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "../assets/sandip.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const videoIds = ["j-1d6zcgd3U", "g5uH4yhYz3Q","HtHU5ucWYQw"];
  const testimonials = [
    { name: "Vipul", text: "NextEra Coders helped me land my first internship!" },
    { name: "Naveen", text: "Best oneshot Javascript yt video from beginners to advanced level ❤" },
    { name: "Shivam", text: "Good project with proper explanation" },
    { name: "Priya", text: "Best JS tutorials and projects for practice!" },
  ];

  const stats = [
    { label: "Happy Coders", value: "25,000+" },
    { label: "Subscribers", value: "10,000+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Hours of Content", value: "500+" },
  ];

  return (
    <div className="pt-5 bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="text-center px-6 py-24 bg-gradient-to-br from-blue-100 to-blue-50" data-aos="fade-up">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center" data-aos="zoom-in">
            <img
              src={profilePic}
              alt="Sandip Kumar Verma"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-md"
            />
            <p className="text-base text-gray-600 mt-2 font-medium">👨‍💻 Sandip Kumar Verma</p>
          </div>

          <div className="text-center md:text-left" data-aos="fade-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 leading-tight">
              <Typed
                strings={["NextEra Coders 🚀", "Master DSA ✨", "Learn Web Dev 💻", "Crack Interviews 🎯"]}
                typeSpeed={70}
                backSpeed={40}
                loop
              />
            </h1>
            <p className="text-lg text-gray-700 max-w-xl mt-3">
              One platform for all your coding needs — Practice, Learn, and Crack top tech jobs with expert-led tutorials and projects.
            </p>
            <Link
              to="/login"
              className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition"
            >
              🚀 Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-lg shadow">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
        {[
          { title: "DSA Practice", desc: "Solve 1000+ curated problems & track progress.", emoji: "🧠", link: "/practice" },
          { title: "Code Editor", desc: "Write & run code in multiple languages.", emoji: "💻", link: "/editor" },
          { title: "Courses", desc: "Master full stack, JS, React, Next.js & more.", emoji: "📚", link: "/courses" },
          { title: "DSA full course", desc: "Follow structured paths from basics to expert.", emoji: "🗺️", link: "/dsa" },
        ].map((f, i) => (
          <Link
            to={f.link}
            key={i}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200"
            data-aos="zoom-in"
          >
            <div className="text-5xl mb-4">{f.emoji}</div>
            <h3 className="text-2xl font-bold text-blue-700 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </Link>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-200" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-10">
            Why Choose <span className="text-blue-500">NextEra Coders</span>?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {["Structured Roadmaps", "Hands-On Projects", "Beginner to Advanced Levels"].map((point, i) => (
              <div key={i} className="p-8 rounded-lg shadow-md bg-blue-50" data-aos="zoom-in">
                <p className="font-medium text-blue-800 text-lg">✅ {point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* YouTube Videos */}
<section className="py-20 px-6 bg-gray-50 text-center" data-aos="fade-up">
  <h2 className="text-3xl font-bold mb-8 text-blue-700">Latest YouTube Videos</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {videoIds.map((id) => (
      <iframe
        key={id}
        src={`https://www.youtube.com/embed/${id}`}
        className="w-full aspect-video rounded-xl shadow-lg"
        allowFullScreen
        title={`YouTube video ${id}`}
      />
    ))}
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-blue-600 text-white" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-4">Join 10,000+ Coders on NextEra</h2>
        <p className="mb-6 text-lg">Your journey to become a top developer starts here.</p>
        <Link
          to="/login"
          className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100"
        >
          Start Learning Now ➜
        </Link>
      </section>
    </div>
  );
};

export default Home;

















// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Typed from "react-typed";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import profilePic from "../assets/sandip.jpg"; // Ensure correct path

// const Home = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const handleNewsletter = (e) => {
//     e.preventDefault();
//     // Placeholder: integrate Formspree/Getform or your backend
//     alert(`Thank you for subscribing: ${email}`);
//     setEmail("");
//   };

//   const stats = [
//     { label: "Subscribers", value: "10,000+" },
//     { label: "Projects", value: "20+" },
//     { label: "Videos", value: "150+" },
//     { label: "Learners", value: "25,000+" },
//   ];

//   const testimonials = [
//     { name: "Amit", text: "NextEra Coders helped me crack my first internship!" },
//     { name: "Priya", text: "Best JavaScript tutorials I’ve ever watched!" },
//     { name: "Rahul", text: "Love the interactive practice platform. Highly recommend!" },
//   ];

//   const videoIds = ["j-1d6zcgd3U", "bMknfKXIFA8", "ZLk75fFXqH4"];

//   const featuresList = [
//     { title: "DSA Practice", desc: "Solve 1000+ DSA problems with real-time stats.", emoji: "🧠", link: "/practice" },
//     { title: "Code Editor", desc: "Write and test your code instantly.", emoji: "💻", link: "/editor" },
//     { title: "Courses", desc: "Learn JS, React, Next.js and more.", emoji: "📚", link: "/courses" },
//     { title: "Live Classes", desc: "Join our interactive live sessions.", emoji: "🔴", link: "/courses" },
//   ];

//   return (
//     <div className={`pt-5 min-h-screen transition-colors ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"}`}>
//       {/* Dark Mode Toggle */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed top-4 right-4 p-2 rounded-full shadow bg-white dark:bg-gray-700"
//         aria-label="Toggle Dark Mode"
//       >
//         {darkMode ? "🌞" : "🌙"}
//       </button>

//       {/* Hero Section */}
//       <section
//         className="text-center px-6 py-20 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-700"
//         data-aos="fade-up"
//       >
//         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
//           <div className="flex flex-col items-center" data-aos="zoom-in">
//             <img
//               src={profilePic}
//               alt="Profile picture of Sandip Kumar Verma"
//               className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-blue-500 shadow-md"
//             />
//             <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">👨‍💻 Sandip Kumar Verma</p>
//           </div>
//           <div className="text-center md:text-left" data-aos="fade-left">
//             <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-3">
//               <Typed
//                 strings={["NextEra Coders", "Master DSA ✨", "Learn Web Dev 💻", "Crack Interviews 🚀"]}
//                 typeSpeed={70}
//                 backSpeed={40}
//                 loop
//                 aria-label="Animated typing of core offerings"
//               />
//             </h1>
//             <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mt-2">
//               One platform for all your coding needs — Practice, Learn, and Crack top tech jobs.
//             </p>
//             <Link
//               to="/login"
//               className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full text-lg font-semibold transition"
//             >
//               🚀 Get Started
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-4 max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
//         {featuresList.map((f, i) => (
//           <Link
//             to={f.link}
//             key={i}
//             className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300 border border-gray-200 dark:border-gray-700"
//             data-aos="zoom-in"
//           >
//             <div className="text-4xl mb-4">{f.emoji}</div>
//             <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">{f.title}</h3>
//             <p className="text-gray-600 dark:text-gray-400 text-sm">{f.desc}</p>
//           </Link>
//         ))}
//       </section>

//       {/* Stats Counter Section */}
//       <section className="py-16 bg-blue-100 dark:bg-gray-800 text-center" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300">NextEra in Numbers</h2>
//         <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//           {stats.map((item, i) => (
//             <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
//               <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{item.value}</p>
//               <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Latest YouTube Videos */}
//       <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-center" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Latest from YouTube</h2>
//         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {videoIds.map((id) => (
//             <iframe
//               key={id}
//               src={`https://www.youtube.com/embed/${id}`}
//               className="w-full aspect-video rounded-lg shadow"
//               allowFullScreen
//               title={`YouTube video ${id}`}
//               data-aos="zoom-in"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 bg-white dark:bg-gray-800" data-aos="fade-up">
//         <h2 className="text-3xl font-bold text-center mb-10 text-blue-700 dark:text-blue-300">What Students Say</h2>
//         <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-4 max-w-6xl mx-auto">
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow text-left w-full max-w-md"
//               data-aos={`fade-${i % 2 === 0 ? "right" : "left"}`}
//             >
//               <p className="text-gray-700 dark:text-gray-300">“{t.text}”</p>
//               <p className="mt-4 text-blue-700 dark:text-blue-300 font-semibold">– {t.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-16 px-6 text-center bg-blue-600 text-white" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//         <p className="mb-6 text-lg">Join our newsletter for the latest tutorials and tips.</p>
//         <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
//           <input
//             type="email"
//             placeholder="Your email address"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="flex-grow px-4 py-2 rounded-full text-gray-800"
//           />
//           <button
//             type="submit"
//             className="px-6 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-200 transition"
//           >
//             Subscribe
//           </button>
//         </form>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-4">Join 10,000+ Coders on NextEra</h2>
//         <p className="mb-6 text-lg">Build your skills. Crack top tech jobs. Build your future.</p>
//         <Link
//           to="/login"
//           className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow hover:shadow-lg transition"
//         >
//           Start Learning Now ➜
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 text-center bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-400">
//         <p>© {new Date().getFullYear()} NextEra Coders. All rights reserved.</p>
//         <div className="flex justify-center gap-4 mt-2">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/courses" className="hover:underline">Courses</Link>
//           <Link to="/practice" className="hover:underline">Practice</Link>
//           <Link to="/login" className="hover:underline">Login</Link>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;




















