// import React, { useEffect, useState } from "react";
// import { getMe } from "../api";

// function Profile({ user }) {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     getMe(token).then((res) => setProfile(res));
//   }, []);

//   if (!profile) return <p>Loading...</p>;

//   return (
//     <div className="bg-white p-6 shadow rounded">
//       <h2 className="text-2xl font-bold mb-2">Profile</h2>
//       <p><strong>Name:</strong> {profile.name}</p>
//       <p><strong>Email:</strong> {profile.email}</p>
//       <h3 className="text-xl mt-4 font-semibold">Favorites:</h3>
//       <ul className="list-disc ml-6">
//         {profile.favorites.map((r) => (
//           <li key={r._id}>{r.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Profile;



import React, { useEffect, useState } from "react";
import { getMe } from "../api";
import { motion } from "framer-motion";

function Profile({ user }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getMe(token).then((res) => setProfile(res));
  }, []);

  if (!profile)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
        <p className="text-white text-xl font-semibold">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-300 to-pink-300 opacity-30 animate-pulse rounded-xl"></div>

      <motion.div
        className="relative z-10 bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full transform transition duration-500 hover:scale-105"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-700 text-center">My Profile</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Name:</span> {profile.name}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Email:</span> {profile.email}
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-purple-600">Favorites</h3>
        {profile.favorites.length === 0 ? (
          <p className="text-gray-500 italic">You have no favorite recipes yet.</p>
        ) : (
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {profile.favorites.map((r) => (
              <motion.li
                key={r._id}
                className="hover:text-purple-500 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {r.title}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

export default Profile;
