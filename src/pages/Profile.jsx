// // 🆕 All updates for dynamic stats and calendar integration
// import React, { useState, useEffect, useMemo } from "react";
// import { FaEdit, FaStar, FaMedal } from "react-icons/fa";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// // 🔧 Converts any date to YYYY-MM-DD format for consistency
// const getDateKey = (date) => new Date(date).toISOString().split("T")[0];

// // 🔁 Get last X days in YYYY-MM-DD format (for weekly chart)
// const getLastXDays = (days) => {
//   const today = new Date();
//   return [...Array(days)].map((_, i) => {
//     const d = new Date(today);
//     d.setDate(today.getDate() - i);
//     return getDateKey(d);
//   }).reverse();
// };

// const Profile = () => {
//   // 👤 Initial user info
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     level: "Intermediate",
//     rank: "#421",
//     college: "",
//     languages: ["JavaScript"],
//     problemsSolved: 0,
//     avatar: "https://avatars.githubusercontent.com/u/000000?v=4",
//     joined: "",
//     instituteRank: "#12"
//   });

//   const [editMode, setEditMode] = useState(false);
//   const [form, setForm] = useState(user);
//   const [userStats, setUserStats] = useState(() => JSON.parse(localStorage.getItem("userStats") || "{}"));
//   const [calendarStart, setCalendarStart] = useState(0); // 📅 Calendar scroll position

//   // 📊 Memoized chart & calendar stats
//   const { weeklyData, monthlyData, activityCalendar, totalSolved } = useMemo(() => {
//     const dateMap = {};
//     Object.values(userStats || {}).forEach((arr) => {
//       if (Array.isArray(arr)) {
//         arr.forEach((date) => {
//           const key = getDateKey(date);
//           dateMap[key] = (dateMap[key] || 0) + 1;
//         });
//       }
//     });

//     // 📈 Weekly stats
//     const last7Days = getLastXDays(7);
//     const weeklyData = {
//       labels: last7Days.map((d) => d.slice(5)),
//       datasets: [{
//         label: "Weekly Solved",
//         data: last7Days.map((d) => dateMap[d] || 0),
//         borderColor: "#3b82f6",
//         backgroundColor: "rgba(59,130,246,0.2)",
//         fill: true,
//         tension: 0.4,
//       }],
//     };

//     // 📊 Monthly stats grouped by week
//     const today = new Date();
//     const monthlyData = {
//       labels: Array.from({ length: 4 }, (_, i) => `Week ${i + 1}`),
//       datasets: [{
//         label: "Monthly Solved",
//         data: [0, 0, 0, 0],
//         borderColor: "#10b981",
//         backgroundColor: "rgba(16,185,129,0.2)",
//         fill: true,
//         tension: 0.4,
//       }],
//     };

//     Object.keys(dateMap).forEach((d) => {
//       const date = new Date(d);
//       const diffDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
//       const week = 3 - Math.floor(diffDays / 7);
//       if (week >= 0 && week < 4) monthlyData.datasets[0].data[week] += dateMap[d];
//     });


//     const calendarMonths = [];
//     // Replace 6-month loop with 12-month loop:
// for (let m = 11; m >= 0; m--) {
//   const d = new Date(today);
//   d.setMonth(d.getMonth() - m);
//   calendarMonths.push({
//     month: d.toLocaleString("default", { month: "short" }),
//     days: [...Array(30)].map((_, i) => {
//       const day = new Date(d.getFullYear(), d.getMonth(), i + 1);
//       const key = getDateKey(day);
//       return dateMap[key] || 0;
//     }),
//   });
// }


//     const totalSolved = Object.values(userStats).flat().length;
//     return { weeklyData, monthlyData, activityCalendar: calendarMonths, totalSolved };
//   }, [userStats]);

//   // ⏬ Fetch user info from localStorage
//   useEffect(() => {
//     const localUser = JSON.parse(localStorage.getItem("user"));
//     if (localUser) {
//       setUser((prev) => ({ ...prev, ...localUser }));
//       setForm((prev) => ({ ...prev, ...localUser }));
//     }
//   }, []);

//   // ⏬ Fetch userStats from localStorage on load
//   useEffect(() => {
//     const stats = JSON.parse(localStorage.getItem("userStats") || "{}");
//     setUserStats(stats);
//   }, []);

//   // 🖊️ Profile form handlers
//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
//   const handleLanguageChange = (e) => {
//     const selected = [...e.target.options].filter((o) => o.selected).map((o) => o.value);
//     setForm({ ...form, languages: selected });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUser(form);
//     setEditMode(false);
//     localStorage.setItem("user", JSON.stringify(form));
//   };
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setForm({ ...form, avatar: reader.result });
//       reader.readAsDataURL(file);
//     }
//   };
  

//   return (
//     <div className="min-h-screen pt-24 bg-gray-100 px-4 md:px-12 lg:px-20">
//       {/* 👤 Profile Card */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
//         <div className="relative group">
//           <img src={user.avatar} alt="Profile Avatar" className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md" />
//           <button onClick={() => setEditMode(true)} className="absolute bottom-1 right-1 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700">
//             <FaEdit />
//           </button>
//         </div>

//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-blue-800">{user.name}</h2>
//           <p className="text-sm text-gray-500">{user.email}</p>
//           <div className="mt-2 flex justify-center gap-2 text-green-600 font-semibold text-lg">
//             <FaStar className="text-yellow-400" />
//             Rank: <span className="font-bold">{user.rank}</span>
//           </div>
//           <p className="mt-2 text-xl font-bold text-purple-700">🎓 {user.college}</p>
//           <div className="flex justify-center mt-1 text-yellow-600 text-md font-semibold">
//             <FaMedal className="mr-1" />
//             Institute Rank: <span>{user.instituteRank}</span>
//           </div>
//           <p className="mt-2 text-lg font-semibold text-orange-600">🧠 {user.languages.join(", ")}</p>
//           <p className="mt-2 text-blue-600 font-semibold text-lg">✔️ Total Solved: {totalSolved}</p>
//         </div>
//       </div>

//       {/* 📈 Weekly and Monthly Chart */}
//       <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-blue-700 mb-3">📈 Weekly Stats</h3>
//           <div className="h-[22rem]"><Line data={weeklyData} /></div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-green-600 mb-3">📊 Monthly Stats</h3>
//           <div className="h-[22rem]"><Line data={monthlyData} /></div>
//         </div>
//       </div>

// {/* 📆 Updated Interactive Calendar with Sliding Effect */}
//       <div className="bg-white p-6 mt-10 rounded-lg shadow relative overflow-hidden">
//         <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
//           <button
//             onClick={() => setCalendarStart((prev) => Math.max(0, prev - 1))}
//             className={`px-3 py-1 rounded-full shadow text-white ${calendarStart <= 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
//           >⬅️ Prev</button>

//           <h3 className="text-lg font-bold text-blue-700 text-center w-full sm:w-auto">🗓️ 6-Month Activity Calendar</h3>

//           <button
//             onClick={() => setCalendarStart((prev) => Math.min(activityCalendar.length - 6, prev + 1))}
//             className={`px-3 py-1 rounded-full shadow text-white ${calendarStart >= activityCalendar.length - 6 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
//           >Next ➡️</button>
//         </div>

//         <div className="relative h-auto w-full overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${calendarStart * 16.66}%)`,
//               width: `${activityCalendar.length * 16.66}%`,
//             }}
//           >
//             {activityCalendar.map((month, idx) => (
//               <div key={idx} className="w-[16.66%] p-2 sm:p-3">
//                 <div className="bg-gray-50 rounded-lg p-2 shadow-sm">
//                   <h4 className="text-center text-sm font-medium text-gray-700 mb-2">{month.month}</h4>
//                   <div className="grid grid-cols-7 gap-[3px]">
//                     {month.days.map((val, i) => (
//                       <div
//                         key={i}
//                         className={`w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-sm transition duration-200 ease-in-out ${
//                           val > 3
//                             ? "bg-green-600"
//                             : val > 1
//                             ? "bg-green-400"
//                             : val === 1
//                             ? "bg-green-200"
//                             : "bg-gray-200"
//                         }`}
//                         title={`Solved ${val} problems`}
//                       ></div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>


//       {/* ✏️ Profile Edit Modal */}
//       {editMode && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-xl">
//             <h3 className="text-xl font-semibold text-blue-700 mb-4">Edit Profile</h3>
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               {[
//                 "name",
//                 "email",
//                 "college"
//               ].map((field) => (
//                 <div key={field}>
//                   <label className="block text-gray-700 mb-1">{field[0].toUpperCase() + field.slice(1)}</label>
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     name={field}
//                     value={form[field]}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded"
//                   />
//                 </div>
//               ))}
//               <div>
//                 <label className="block text-gray-700 mb-1">Languages Known</label>
//                 <select
//                   multiple
//                   value={form.languages}
//                   onChange={handleLanguageChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded h-32 bg-blue-50 text-blue-800 font-medium"
//                 >
//                   {["C", "C++", "JavaScript", "Python", "Java", "Go", "Rust", "TypeScript"].map((lang) => (
//                     <option key={lang} value={lang}>{lang}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-1">Profile Image</label>
//                 <input type="file" accept="image/*" onChange={handleFileUpload} className="w-full" />
//               </div>
//               <div className="flex justify-end gap-4">
//                 <button type="button" onClick={() => setEditMode(false)} className="px-4 py-2 rounded border border-gray-400">Cancel</button>
//                 <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;

















// // 🆕 All updates for dynamic stats and calendar integration
// import React, { useState, useEffect, useMemo } from "react";
// import { FaEdit, FaStar, FaMedal } from "react-icons/fa";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// // 🔧 Converts any date to YYYY-MM-DD format for consistency
// const getDateKey = (date) => new Date(date).toISOString().split("T")[0];

// // 🔁 Get last X days in YYYY-MM-DD format (for weekly chart)
// const getLastXDays = (days) => {
//   const today = new Date();
//   return [...Array(days)].map((_, i) => {
//     const d = new Date(today);
//     d.setDate(today.getDate() - i);
//     return getDateKey(d);
//   }).reverse();
// };

// const Profile = () => {
//   // 👤 Initial user info
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     level: "Intermediate",
//     rank: "#421",
//     college: "",
//     languages: ["JavaScript"],
//     problemsSolved: 0,
//     avatar: "https://avatars.githubusercontent.com/u/000000?v=4",
//     joined: "",
//     instituteRank: "#12"
//   });

//   const [editMode, setEditMode] = useState(false);
//   const [form, setForm] = useState(user);
//   const [userStats, setUserStats] = useState(() => JSON.parse(localStorage.getItem("userStats") || "{}"));
//   const [calendarStart, setCalendarStart] = useState(0); // 📅 Calendar scroll position

//   // 📊 Memoized chart & calendar stats
//   const { weeklyData, monthlyData, activityCalendar, totalSolved, calendarStartInit } = useMemo(() => {
//     const dateMap = {};
//     Object.values(userStats || {}).forEach((arr) => {
//       if (Array.isArray(arr)) {
//         arr.forEach((date) => {
//           const key = getDateKey(date);
//           dateMap[key] = (dateMap[key] || 0) + 1;
//         });
//       }
//     });

//     // 📈 Weekly stats
//     const last7Days = getLastXDays(7);
//     const weeklyData = {
//       labels: last7Days.map((d) => d.slice(5)),
//       datasets: [{
//         label: "Weekly Solved",
//         data: last7Days.map((d) => dateMap[d] || 0),
//         borderColor: "#3b82f6",
//         backgroundColor: "rgba(59,130,246,0.2)",
//         fill: true,
//         tension: 0.4,
//       }],
//     };

//     // 📊 Monthly stats grouped by week
//     const today = new Date();
//     const monthlyData = {
//       labels: Array.from({ length: 4 }, (_, i) => `Week ${i + 1}`),
//       datasets: [{
//         label: "Monthly Solved",
//         data: [0, 0, 0, 0],
//         borderColor: "#10b981",
//         backgroundColor: "rgba(16,185,129,0.2)",
//         fill: true,
//         tension: 0.4,
//       }],
//     };

//     Object.keys(dateMap).forEach((d) => {
//       const date = new Date(d);
//       const diffDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
//       const week = 3 - Math.floor(diffDays / 7);
//       if (week >= 0 && week < 4) monthlyData.datasets[0].data[week] += dateMap[d];
//     });


//     const calendarMonths = [];
//     // Replace 6-month loop with 12-month loop:
// for (let m = 11; m >= 0; m--) {
//   const d = new Date(today);
//   d.setMonth(d.getMonth() - m);
//   calendarMonths.push({
//     month: d.toLocaleString("default", { month: "short" }),
//     days: [...Array(30)].map((_, i) => {
//       const day = new Date(d.getFullYear(), d.getMonth(), i + 1);
//       const key = getDateKey(day);
//       return dateMap[key] || 0;
//     }),
//   });
// }
// calendarMonths.reverse(); // So the current month comes first

// // 👇 Initialize calendarStart to 0 to show current month group
// const calendarStartInit = 0;


//     const totalSolved = Object.values(userStats).flat().length;
//     return { weeklyData, monthlyData, activityCalendar: calendarMonths, totalSolved };
//   }, [userStats]);

//   // ⏬ Fetch user info from localStorage
//   useEffect(() => {
//     const localUser = JSON.parse(localStorage.getItem("user"));
//     if (localUser) {
//       setUser((prev) => ({ ...prev, ...localUser }));
//       setForm((prev) => ({ ...prev, ...localUser }));
//     }
//   }, []);

//   // ⏬ Fetch userStats from localStorage on load
//   useEffect(() => {
//     const stats = JSON.parse(localStorage.getItem("userStats") || "{}");
//     setUserStats(stats);
//   }, []);

//   // 🖊️ Profile form handlers
//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
//   const handleLanguageChange = (e) => {
//     const selected = [...e.target.options].filter((o) => o.selected).map((o) => o.value);
//     setForm({ ...form, languages: selected });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUser(form);
//     setEditMode(false);
//     localStorage.setItem("user", JSON.stringify(form));
//   };
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setForm({ ...form, avatar: reader.result });
//       reader.readAsDataURL(file);
//     }
//   };
  

//   return (
//     <div className="min-h-screen pt-24 bg-gray-100 px-4 md:px-12 lg:px-20">
//       {/* 👤 Profile Card */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
//         <div className="relative group">
//           <img src={user.avatar} alt="Profile Avatar" className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md" />
//           <button onClick={() => setEditMode(true)} className="absolute bottom-1 right-1 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700">
//             <FaEdit />
//           </button>
//         </div>

//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-blue-800">{user.name}</h2>
//           <p className="text-sm text-gray-500">{user.email}</p>
//           <div className="mt-2 flex justify-center gap-2 text-green-600 font-semibold text-lg">
//             <FaStar className="text-yellow-400" />
//             Rank: <span className="font-bold">{user.rank}</span>
//           </div>
//           <p className="mt-2 text-xl font-bold text-purple-700">🎓 {user.college}</p>
//           <div className="flex justify-center mt-1 text-yellow-600 text-md font-semibold">
//             <FaMedal className="mr-1" />
//             Institute Rank: <span>{user.instituteRank}</span>
//           </div>
//           <p className="mt-2 text-lg font-semibold text-orange-600">🧠 {user.languages.join(", ")}</p>
//           <p className="mt-2 text-blue-600 font-semibold text-lg">✔️ Total Solved: {totalSolved}</p>
//         </div>
//       </div>

//       {/* 📈 Weekly and Monthly Chart */}
//       <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-blue-700 mb-3">📈 Weekly Stats</h3>
//           <div className="h-[22rem]"><Line data={weeklyData} /></div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-green-600 mb-3">📊 Monthly Stats</h3>
//           <div className="h-[22rem]"><Line data={monthlyData} /></div>
//         </div>
//       </div>

// {/* 📆 Updated Interactive Calendar with Sliding Effect */}
//       <div className="bg-white p-6 mt-10 rounded-lg shadow relative overflow-hidden">
//         <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
//           <button
//             onClick={() => setCalendarStart((prev) => Math.max(0, prev - 1))}
//             className={`px-3 py-1 rounded-full shadow text-white ${calendarStart <= 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
//           >⬅️Next</button>

//           <h3 className="text-lg font-bold text-blue-700 text-center w-full sm:w-auto">🗓️ 6-Month Activity Calendar</h3>

//           <button
//             onClick={() => setCalendarStart((prev) => Math.min(activityCalendar.length - 6, prev + 1))}
//             className={`px-3 py-1 rounded-full shadow text-white ${calendarStart >= activityCalendar.length - 6 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
//           > Prev ➡️</button>
//         </div>

//         <div className="relative h-auto w-full overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${calendarStart * 16.66}%)`,
//               width: `${activityCalendar.length * 16.66}%`,
//             }}
//           >
//             {activityCalendar.map((month, idx) => (
//               <div key={idx} className="w-[16.66%] p-2 sm:p-3">
//                 <div className="bg-gray-50 rounded-lg p-2 shadow-sm">
//                   <h4 className="text-center text-sm font-medium text-gray-700 mb-2">{month.month}</h4>
//                   <div className="grid grid-cols-7 gap-[3px]">
//                     {month.days.map((val, i) => (
//                       <div
//                         key={i}
//                         className={`w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-sm transition duration-200 ease-in-out ${
//                           val > 3
//                             ? "bg-green-600"
//                             : val > 1
//                             ? "bg-green-400"
//                             : val === 1
//                             ? "bg-green-200"
//                             : "bg-gray-200"
//                         }`}
//                         title={`Solved ${val} problems`}
//                       ></div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>


//       {/* ✏️ Profile Edit Modal */}
//       {editMode && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-xl">
//             <h3 className="text-xl font-semibold text-blue-700 mb-4">Edit Profile</h3>
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               {[
//                 "name",
//                 "email",
//                 "college"
//               ].map((field) => (
//                 <div key={field}>
//                   <label className="block text-gray-700 mb-1">{field[0].toUpperCase() + field.slice(1)}</label>
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     name={field}
//                     value={form[field]}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded"
//                   />
//                 </div>
//               ))}
//               <div>
//                 <label className="block text-gray-700 mb-1">Languages Known</label>
//                 <select
//                   multiple
//                   value={form.languages}
//                   onChange={handleLanguageChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded h-32 bg-blue-50 text-blue-800 font-medium"
//                 >
//                   {["C", "C++", "JavaScript", "Python", "Java", "Go", "Rust", "TypeScript"].map((lang) => (
//                     <option key={lang} value={lang}>{lang}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-1">Profile Image</label>
//                 <input type="file" accept="image/*" onChange={handleFileUpload} className="w-full" />
//               </div>
//               <div className="flex justify-end gap-4">
//                 <button type="button" onClick={() => setEditMode(false)} className="px-4 py-2 rounded border border-gray-400">Cancel</button>
//                 <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;















// 🆕 All updates for dynamic stats and calendar integration
import React, { useState, useEffect, useMemo } from "react";
import { FaEdit, FaStar, FaMedal } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// 🔧 Converts any date to YYYY-MM-DD format for consistency
const getDateKey = (date) => new Date(date).toISOString().split("T")[0];

// 🔁 Get last X days in YYYY-MM-DD format (for weekly chart)
const getLastXDays = (days) => {
  const today = new Date();
  return [...Array(days)].map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    return getDateKey(d);
  }).reverse();
};

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    level: "Intermediate",
    rank: "#421",
    college: "",
    languages: ["JavaScript"],
    problemsSolved: 0,
    avatar: "https://avatars.githubusercontent.com/u/000000?v=4",
    joined: "",
    instituteRank: "#12"
  });

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user);
  const [userStats, setUserStats] = useState(() => JSON.parse(localStorage.getItem("userStats") || "{}"));
  const [calendarStart, setCalendarStart] = useState(0);

  const { weeklyData, monthlyData, activityCalendar, totalSolved, calendarStartInit } = useMemo(() => {
    const dateMap = {};
    Object.values(userStats || {}).forEach((arr) => {
      if (Array.isArray(arr)) {
        arr.forEach((date) => {
          const key = getDateKey(date);
          dateMap[key] = (dateMap[key] || 0) + 1;
        });
      }
    });

    const last7Days = getLastXDays(7);
    const weeklyData = {
      labels: last7Days.map((d) => d.slice(5)),
      datasets: [{
        label: "Weekly Solved",
        data: last7Days.map((d) => dateMap[d] || 0),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        fill: true,
        tension: 0.4,
      }],
    };

    const today = new Date();
    const monthlyData = {
      labels: Array.from({ length: 4 }, (_, i) => `Week ${i + 1}`),
      datasets: [{
        label: "Monthly Solved",
        data: [0, 0, 0, 0],
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
        fill: true,
        tension: 0.4,
      }],
    };

    Object.keys(dateMap).forEach((d) => {
      const date = new Date(d);
      const diffDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
      const week = 3 - Math.floor(diffDays / 7);
      if (week >= 0 && week < 4) monthlyData.datasets[0].data[week] += dateMap[d];
    });

    const calendarMonths = [];
    for (let m = 11; m >= 0; m--) {
      const d = new Date(today);
      d.setMonth(d.getMonth() - m);
      calendarMonths.push({
        month: d.toLocaleString("default", { month: "short" }),
        days: [...Array(30)].map((_, i) => {
          const day = new Date(d.getFullYear(), d.getMonth(), i + 1);
          const key = getDateKey(day);
          return dateMap[key] || 0;
        }),
      });
    }
    calendarMonths.reverse();
    const calendarStartInit = 0;
    const totalSolved = Object.values(userStats).flat().length;
    return { weeklyData, monthlyData, activityCalendar: calendarMonths, totalSolved };
  }, [userStats]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      setUser((prev) => ({ ...prev, ...localUser }));
      setForm((prev) => ({ ...prev, ...localUser }));
    }
  }, []);

  useEffect(() => {
    const stats = JSON.parse(localStorage.getItem("userStats") || "{}");
    setUserStats(stats);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleLanguageChange = (e) => {
    const selected = [...e.target.options].filter((o) => o.selected).map((o) => o.value);
    setForm({ ...form, languages: selected });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(form);
    setEditMode(false);
    localStorage.setItem("user", JSON.stringify(form));
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setForm({ ...form, avatar: reader.result });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-100 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-28">
      {/* 👤 Profile Card */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center gap-4">
        <div className="relative group">
          <img src={user.avatar} alt="Profile Avatar" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-blue-500 shadow-md" />
          <button onClick={() => setEditMode(true)} className="absolute bottom-1 right-1 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700">
            <FaEdit />
          </button>
        </div>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <div className="mt-2 flex justify-center gap-2 text-green-600 font-semibold text-md sm:text-lg">
            <FaStar className="text-yellow-400" />
            Rank: <span className="font-bold">{user.rank}</span>
          </div>
          <p className="mt-2 text-lg font-bold text-purple-700">🎓 {user.college}</p>
          <div className="flex justify-center mt-1 text-yellow-600 text-sm sm:text-md font-semibold">
            <FaMedal className="mr-1" />
            Institute Rank: <span>{user.instituteRank}</span>
          </div>
          <p className="mt-2 text-md font-semibold text-orange-600">🧠 {user.languages.join(", ")}</p>
          <p className="mt-2 text-blue-600 font-semibold text-md sm:text-lg">✔️ Total Solved: {totalSolved}</p>
        </div>
      </div>

      {/* 📈 Weekly and Monthly Chart */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-3">📈 Weekly Stats</h3>
          <div className="h-[22rem]"><Line data={weeklyData} /></div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h3 className="text-base sm:text-lg font-semibold text-green-600 mb-3">📊 Monthly Stats</h3>
          <div className="h-[22rem]"><Line data={monthlyData} /></div>
        </div>
      </div>

      {/* 📆 Calendar */}
      <div className="bg-white p-4 sm:p-6 mt-10 rounded-lg shadow relative overflow-hidden">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <button
            onClick={() => setCalendarStart((prev) => Math.max(0, prev - 1))}
            className={`px-3 py-1 rounded-full shadow text-white ${calendarStart <= 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
          >⬅️ Next</button>

          <h3 className="text-base sm:text-lg font-bold text-blue-700 text-center w-full sm:w-auto">🗓️ 12-Month Activity Calendar</h3>

          <button
            onClick={() => setCalendarStart((prev) => Math.min(activityCalendar.length - 6, prev + 1))}
            className={`px-3 py-1 rounded-full shadow text-white ${calendarStart >= activityCalendar.length - 6 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
          >Prev ➡️</button>
        </div>

        <div className="relative h-auto w-full overflow-x-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out min-w-full"
            style={{
              transform: `translateX(-${calendarStart * 16.66}%)`,
              width: `${activityCalendar.length * 16.66}%`,
            }}
          >
            {activityCalendar.map((month, idx) => (
              <div key={idx} className="w-[16.66%] p-1 sm:p-2 min-w-[180px]">
                <div className="bg-gray-50 rounded-lg p-2 shadow-sm">
                  <h4 className="text-center text-sm font-medium text-gray-700 mb-2">{month.month}</h4>
                  <div className="grid grid-cols-7 gap-[3px]">
                    {month.days.map((val, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-sm transition duration-200 ease-in-out ${
                          val > 3
                            ? "bg-green-600"
                            : val > 1
                            ? "bg-green-400"
                            : val === 1
                            ? "bg-green-200"
                            : "bg-gray-200"
                        }`}
                        title={`Solved ${val} problems`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✏️ Edit Modal */}
      {editMode && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Edit Profile</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {["name", "email", "college"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 mb-1">{field[0].toUpperCase() + field.slice(1)}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>
              ))}
              <div>
                <label className="block text-gray-700 mb-1">Languages Known</label>
                <select
                  multiple
                  value={form.languages}
                  onChange={handleLanguageChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded h-32 bg-blue-50 text-blue-800 font-medium"
                >
                  {["C", "C++", "JavaScript", "Python", "Java", "Go", "Rust", "TypeScript"].map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Profile Image</label>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="w-full" />
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setEditMode(false)} className="px-4 py-2 rounded border border-gray-400">Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;






