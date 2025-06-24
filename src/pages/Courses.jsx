import { useState, useEffect } from "react";
import { courses } from "../data/courses";
import { Link } from "react-router-dom";

const Courses = () => {
  // Dark mode with persistence
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen px-4 py-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Dark Mode Toggle - Fixed Top Right Below Navbar */}
      <div className="fixed top-[64px] sm:top-[72px] right-4 z-50">
        <button
          onClick={() => setDarkMode((d) => !d)}
          className="text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-md border border-blue-600 bg-blue-800 hover:bg-blue-700 text-white font-medium transition shadow"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-blue-700 dark:text-blue-400 mb-15">
        📚 Our YouTube Courses
      </h2>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="relative bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            {/* New Badge */}
            {course.isNew && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                New
              </span>
            )}

            {/* Thumbnail */}
            <div className="relative h-56 overflow-hidden rounded-t-xl group">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 pointer-events-none rounded-t-xl" />
              <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-xs rounded-full px-3 py-1 flex space-x-2 font-mono">
                {course.duration && <span>{course.duration}</span>}
                {course.difficulty && (
                  <span
                    className={`px-2 rounded-full ${
                      course.difficulty === "Easy"
                        ? "bg-green-600"
                        : course.difficulty === "Medium"
                        ? "bg-yellow-500 text-black"
                        : "bg-red-600"
                    }`}
                  >
                    {course.difficulty}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-[210px]">
              <div>
                <h3
                  className="text-lg sm:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 truncate"
                  title={course.title}
                >
                  {course.title}
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3"
                  title={course.description}
                >
                  {course.description}
                </p>
              </div>
              <Link
                to={`/course/${course.id}`}
                className="mt-5 inline-block text-center px-5 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:to-blue-800 text-white rounded-md font-medium transition"
                aria-label={`View course ${course.title}`}
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
