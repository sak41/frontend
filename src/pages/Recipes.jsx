// import React from "react";
// import RecipeList from "../components/RecipeList";

// function Recipes() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">All Recipes</h1>
//       <RecipeList />
//     </div>
//   );
// }

// export default Recipes;


import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import { motion } from "framer-motion";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then((res) => {
      if (res && res.recipes) setRecipes(res.recipes);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 p-6">
      {/* Animated heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-purple-700 mb-10"
      >
        All Recipes
      </motion.h1>

      {/* Recipe grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {recipes.map((recipe) => (
          <motion.div
            key={recipe._id}
            whileHover={{ scale: 1.05, y: -5 }}
            className="cursor-pointer"
          >
            <RecipeCard recipe={recipe} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Recipes;
