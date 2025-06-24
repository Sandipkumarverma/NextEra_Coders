// // src/components/Navbar.jsx
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react"; // Install lucide-react

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const checkLogin = () => {
//       const user = localStorage.getItem("user");
//       setIsLoggedIn(!!user);
//     };

//     checkLogin();
//     window.addEventListener("authChange", checkLogin);
//     return () => window.removeEventListener("authChange", checkLogin);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     window.dispatchEvent(new Event("authChange"));
//     setMenuOpen(false);
//     navigate("/login");
//   };

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav className="bg-white shadow-md fixed top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           NextEra Coders
//         </Link>

//         {/* Hamburger for mobile */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-4 text-sm font-medium items-center">
//           <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
//           <Link to="/editor" className="text-gray-700 hover:text-blue-600">Code Editor</Link>
//           <Link to="/dsa" className="text-gray-700 hover:text-blue-600">DSA</Link>
//           <Link to="/practice" className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-300 rounded-full hover:bg-blue-100 transition">🧠 DSA Problem</Link>

//           {isLoggedIn ? (
//             <>
//               <Link to="/profile" className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">👤 Profile</Link>
//               <button onClick={handleLogout} className="px-3 py-1 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition">Logout</button>
//             </>
//           ) : (
//             <Link to="/login" className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Login / Sign Up</Link>
//           )}
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md border-t border-gray-200 py-4 px-6 space-y-3">
//           <Link to="/courses" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Courses</Link>
//           <Link to="/editor" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Code Editor</Link>
//           <Link to="/dsa" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>DSA</Link>
//           <Link to="/practice" className="block px-3 py-2 bg-blue-50 text-blue-700 border border-blue-300 rounded-full hover:bg-blue-100" onClick={toggleMenu}>🧠 DSA Problem</Link>

//           {isLoggedIn ? (
//             <>
//               <Link to="/profile" className="block px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700" onClick={toggleMenu}>👤 Profile</Link>
//               <button onClick={handleLogout} className="block w-full px-3 py-2 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition">Logout</button>
//             </>
//           ) : (
//             <Link to="/login" className="block px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700" onClick={toggleMenu}>Login / Sign Up</Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;












// // src/components/Navbar.jsx
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const checkLogin = () => {
//       const user = localStorage.getItem("user");
//       setIsLoggedIn(!!user);
//       if (user) {
//         setUserData(JSON.parse(user));
//       }
//     };

//     checkLogin();
//     window.addEventListener("authChange", checkLogin);
//     return () => window.removeEventListener("authChange", checkLogin);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     window.dispatchEvent(new Event("authChange"));
//     setMenuOpen(false);
//     navigate("/login");
//   };

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav className="bg-white shadow-md fixed top-0 w-full z-50">
//       <div className="w-full px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           NextEra Coders
//         </Link>

//         {/* Mobile menu icon */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Desktop menu */}
//         <div className="hidden md:flex space-x-4 text-sm font-medium items-center">
//           <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
//           <Link to="/editor" className="text-gray-700 hover:text-blue-600">Code Editor</Link>
//           <Link to="/dsa" className="text-gray-700 hover:text-blue-600">DSA</Link>
//           <Link to="/practice" className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-300 rounded-full hover:bg-blue-100 transition">🧠 DSA Problem</Link>

//           {isLoggedIn ? (
//             <>
//               <Link to="/profile" className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">👤 Profile</Link>
//               <button onClick={handleLogout} className="px-3 py-1 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition">Logout</button>
//             </>
//           ) : (
//             <Link to="/login" className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Login / Sign Up</Link>
//           )}
//         </div>
//       </div>

//       {/* Mobile dropdown menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md border-t border-gray-200 py-4 px-6 space-y-3">
//           {isLoggedIn && userData && (
//             <>
//               <div className="flex flex-col items-center gap-2 pb-3 border-b border-gray-200">
//                 <img
//                   src={userData.avatar || "https://i.pravatar.cc/100"}
//                   alt="Avatar"
//                   className="w-16 h-16 rounded-full border-2 border-blue-500"
//                 />
//                 <span className="font-semibold text-blue-700">{userData.name || "User"}</span>
//               </div>
//               <Link to="/profile" className="block text-blue-600 font-semibold hover:text-blue-800" onClick={toggleMenu}>
//                 👤 Profile
//               </Link>
//             </>
//           )}

//           <Link to="/courses" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Courses</Link>
//           <Link to="/editor" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Code Editor</Link>
//           <Link to="/dsa" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>DSA</Link>
//           <Link to="/practice" className="block px-3 py-2 bg-blue-50 text-blue-700 border border-blue-300 rounded-full hover:bg-blue-100" onClick={toggleMenu}>🧠 DSA Problem</Link>

//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="block w-full mt-2 px-3 py-2 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition">
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="block mt-2 px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700" onClick={toggleMenu}>
//               Login / Sign Up
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
      if (user) {
        setUserData(JSON.parse(user));
      }
    };

    checkLogin();
    window.addEventListener("authChange", checkLogin);
    return () => window.removeEventListener("authChange", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange"));
    setMenuOpen(false);
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="w-full px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          NextEra Coders
        </Link>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 text-sm font-medium items-center">
          <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
          <Link to="/editor" className="text-gray-700 hover:text-blue-600">Code Editor</Link>
          <Link to="/dsa" className="text-gray-700 hover:text-blue-600">DSA</Link>
          <Link to="/practice" className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-300 rounded-full hover:bg-blue-100 transition">🧠 DSA Problem</Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">👤 Profile</Link>
              <button onClick={handleLogout} className="px-3 py-1 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition">Logout</button>
            </>
          ) : (
            <Link to="/login" className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Login / Sign Up</Link>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 py-4 px-6 space-y-3">
          {isLoggedIn && userData && (
            <>
              <div className="flex flex-col items-center gap-2 pb-3 border-b border-gray-200">
                <img
                  src={userData.avatar || "https://i.pravatar.cc/100"}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <span className="font-semibold text-blue-700">{userData.name || "User"}</span>

                {/* ✏️ Edit Profile */}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/profile");
                  }}
                  className="mt-1 text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
                >
                  ✏️ Edit Profile
                </button>
              </div>

              <Link to="/profile" className="block text-blue-600 font-semibold hover:text-blue-800" onClick={toggleMenu}>
                👤 Profile
              </Link>
            </>
          )}

          <Link to="/courses" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Courses</Link>
          <Link to="/editor" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Code Editor</Link>
          <Link to="/dsa" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>DSA</Link>
          <Link to="/practice" className="block px-3 py-2 bg-blue-50 text-blue-700 border border-blue-300 rounded-full hover:bg-blue-100" onClick={toggleMenu}>🧠 DSA Problem</Link>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="block w-full mt-2 px-3 py-2 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition">
              Logout
            </button>
          ) : (
            <Link to="/login" className="block mt-2 px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700" onClick={toggleMenu}>
              Login / Sign Up
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
