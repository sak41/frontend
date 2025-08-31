// import React from "react";
// import IngredientMatcher from "../components/IngredientMatcher";
// import ImageUpload from "../components/ImageUpload";
// import { motion } from "framer-motion";

// function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center px-6 py-12">
//       {/* Animated heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-md text-center"
//       >
//         Smart Recipe Generator
//       </motion.h1>

//       {/* Animated subtitle */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//         className="text-lg text-gray-700 mb-8 text-center max-w-2xl"
//       >
//         Find delicious recipes instantly by typing your ingredients or uploading a food image.  
//         <br /> Cooking made smarter ✨
//       </motion.p>

//       {/* Card container for components */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.7, duration: 0.6 }}
//         className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 space-y-6"
//       >
//         <IngredientMatcher />
//         <ImageUpload />
//       </motion.div>
//     </div>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from "react";
// import { fetchRecipes } from "../api";
// import RecipeCard from "../components/RecipeCard";
// import IngredientMatcher from "../components/IngredientMatcher";
// import ImageUpload from "../components/ImageUpload";
// import { motion } from "framer-motion";

// function Home() {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     fetchRecipes().then((res) => {
//       if (res && res.recipes) setRecipes(res.recipes);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-6 py-12">
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-md text-center"
//       >
//         Smart Recipe Generator
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//         className="text-lg text-gray-700 mb-8 text-center max-w-2xl"
//       >
//         Find delicious recipes instantly by typing your ingredients or uploading a food image.  
//         <br /> Cooking made smarter ✨
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.7, duration: 0.6 }}
//         className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 space-y-6 mb-10"
//       >
//         <IngredientMatcher />
//         <ImageUpload />
//       </motion.div>

//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-6 text-purple-700 text-center animate-fadeIn">
//           All Recipes
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {recipes.map((recipe) => (
//             <RecipeCard key={recipe._id} recipe={recipe} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import RecipeCardFull from "../components/RecipeCardFull";
import IngredientMatcher from "../components/IngredientMatcher";
import ImageUpload from "../components/ImageUpload";
import { motion } from "framer-motion";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then((res) => {
      if (res && res.recipes) setRecipes(res.recipes);
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative px-6 py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1950&q=80')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative z-10">
        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg"
        >
          Smart Recipe Generator
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-white mb-10 text-center max-w-3xl mx-auto drop-shadow-md"
        >
          Find delicious recipes instantly by typing your ingredients or uploading a food image.
        </motion.p>

        {/* Ingredient matcher & image upload */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 space-y-6 mx-auto"
        >
          <IngredientMatcher />
          <ImageUpload />
        </motion.div>

        {/* All recipes */}
        <div className="mt-12 max-w-5xl mx-auto space-y-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <RecipeCardFull recipe={recipe} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
