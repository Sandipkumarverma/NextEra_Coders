import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [isSignupMode, setIsSignupMode] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, college } = form;

    if (isSignupMode) {
      if (!name || !email || !password) {
        return setError("Please fill in all required fields.");
      }

      // Save to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ name, email, college: college || "Not Provided" })
      );

      alert("✅ Signup successful! Please login.");
      setIsSignupMode(false);
      setForm({ name: "", email: "", password: "", college: "" });
      setError("");
    } else {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        return setError("No user found. Please sign up first.");
      }

      const parsed = JSON.parse(savedUser);
      if (parsed.email === email) {
        window.dispatchEvent(new Event("authChange"));
        navigate("/profile");
      } else {
        setError("Incorrect email. Try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          {isSignupMode ? "Create Account" : "Login to NextEra Coders"}
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignupMode && (
            <div>
              <label className="block mb-1 text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter password"
            />
          </div>

          {isSignupMode && (
            <div>
              <label className="block mb-1 text-gray-700">College (Optional)</label>
              <input
                type="text"
                name="college"
                value={form.college}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Enter your college name"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            {isSignupMode ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isSignupMode ? "Already have an account?" : "Don't have an account?"} {" "}
          <button
            onClick={() => {
              setIsSignupMode(!isSignupMode);
              setError("");
            }}
            className="text-blue-600 hover:underline"
          >
            {isSignupMode ? "Login here" : "Sign up here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;







