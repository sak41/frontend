// import React, { useState } from "react";
// import { register } from "../api";
// import { useNavigate } from "react-router-dom";

// function Register({ setUser }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const res = await register({ name, email, password });
//     if (res && res.token) {
//       localStorage.setItem("token", res.token);
//       setUser(res.user);
//       navigate("/");
//     } else {
//       alert("Register failed");
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow rounded">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border w-full p-2 mb-3"/>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border w-full p-2 mb-3"/>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border w-full p-2 mb-3"/>
//       <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">Register</button>
//     </form>
//   );
// }

// export default Register;


// import React, { useState } from "react";
// import { register } from "../api";
// import { useNavigate } from "react-router-dom";

// function Register({ setUser }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const res = await register({ name, email, password });
//     if (res && res.token) {
//       localStorage.setItem("token", res.token);
//       setUser(res.user);
//       navigate("/");
//     } else {
//       alert("Register failed");
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md transform transition duration-500 hover:scale-105 animate-fadeIn"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center text-purple-700 animate-bounce">
//           Register
//         </h2>

//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           className="border-2 border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
//         />
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="border-2 border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="border-2 border-gray-300 rounded-lg w-full p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
//         />

//         <button
//           type="submit"
//           className="bg-purple-600 text-white px-6 py-3 rounded-xl w-full font-semibold hover:bg-purple-700 transition transform hover:scale-105"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;



import React, { useState } from "react";
import { register } from "../api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorShake, setErrorShake] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await register({ name, email, password });

      if (res && res.token) {
        localStorage.setItem("token", res.token);
        setUser(res.user);
        navigate("/");
      } else {
        triggerError("Registration failed. Please try again.");
      }
    } catch (err) {
      triggerError(err.message || "Something went wrong");
    }
  }

  const triggerError = (msg) => {
    setErrorMsg(msg);
    setErrorShake(true);
    setTimeout(() => setErrorShake(false), 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -50 }}
        animate={
          errorShake
            ? { x: [0, -10, 10, -10, 10, 0] }
            : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md relative overflow-hidden"
      >
        {/* Decorative gradient circle */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>

        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-6 text-center text-purple-700"
        >
          Create Account
        </motion.h2>

        {/* Error Message */}
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-center text-red-500 font-semibold"
          >
            {errorMsg}
          </motion.div>
        )}

        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#9f7aea" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="border-2 border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          required
        />

        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#9f7aea" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="border-2 border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          required
        />

        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#9f7aea" }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border-2 border-gray-300 rounded-lg w-full p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          required
        />

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#6b46c1" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-xl w-full font-semibold hover:bg-purple-700 transition"
        >
          Register
        </motion.button>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-purple-700 font-semibold hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </motion.form>
    </div>
  );
}

export default Register;
