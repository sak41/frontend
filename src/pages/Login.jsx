// import React, { useState } from "react";
// import { login } from "../api";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import "tailwindcss";

// function Login({ setUser }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const res = await login({ email, password });
//     if (res && res.token) {
//       localStorage.setItem("token", res.token);
//       setUser(res.user);
//       navigate("/");
//     } else {
//       alert("Login failed ❌");
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8"
//       >
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-3xl font-extrabold text-center text-gray-800 mb-6"
//         >
//           Welcome Back 👋
//         </motion.h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//             />
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
//           >
//             Login
//           </motion.button>
//         </form>

//         {/* Extra links */}
//         <p className="mt-4 text-center text-gray-600 text-sm">
//           Don’t have an account?{" "}
//           <span
//             onClick={() => navigate("/register")}
//             className="text-indigo-600 font-semibold hover:underline cursor-pointer"
//           >
//             Register here
//           </span>
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.token);
      setUser(res.user);
      navigate("/");
    } catch (err) {
      alert(err.message || "Login failed ❌");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 px-4 relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-purple-300 rounded-full opacity-50 animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-pink-300 rounded-full opacity-50 animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md bg-white shadow-2xl rounded-2xl p-10"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-extrabold text-center text-gray-800 mb-6"
        >
          Welcome Back 👋
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition shadow-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition shadow-sm"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Login
          </motion.button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-600 font-semibold hover:underline cursor-pointer"
          >
            Register here
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
