// import React from "react";
// import { useParams } from "react-router-dom";
// import RecipeDetail from "../components/RecipeDetail";

// function RecipePage({ user }) {
//   const { id } = useParams();
//   return (
//     <div>
//       <RecipeDetail id={id} user={user} />
//     </div>
//   );
// }

// export default RecipePage;




import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetail from "../components/RecipeDetail";
import { motion } from "framer-motion";

function RecipePage({ user }) {
  const { id } = useParams();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 p-6 flex justify-center items-start relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/25"></div>

      <motion.div
        className="relative z-10 w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 mt-10"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <RecipeDetail id={id} user={user} />
      </motion.div>
    </div>
  );
}

export default RecipePage;

