import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses"; // ✅ Import Courses Page
import CourseDetails from "./pages/CourseDetails";
import EditorPage from "./pages/CodeEditor";
import DSA from "./pages/DSA";
import Practice from "./pages/Practice";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null); // null = not logged in
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} /> {/* ✅ New Route */}
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

/*{ <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/course/:id" element={<CourseDetails />} />
    <Route path="/editor" element={<CodeEditor />} />
    <Route path="/dsa" element={<DSA />} />
    <Route path="/dsa/:id" element={<DSAProblemPage />} />
    <Route path="/live" element={<LiveClass />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</BrowserRouter> }*/
