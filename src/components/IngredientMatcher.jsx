// import React, { useState } from "react";
// import { matchRecipes } from "../api";
// import RecipeCard from "./RecipeCard";

// function IngredientMatcher() {
//   const [ingredients, setIngredients] = useState("");
//   const [recipes, setRecipes] = useState([]);

//   async function handleMatch() {
//     const list = ingredients.split(",").map((s) => s.trim());
//     const res = await matchRecipes(list, []);
//     if (res) setRecipes(res.map((r) => r.recipe));
//   }

//   return (
//     <div>
//       <h3 className="text-xl font-semibold mb-2">Match Recipes</h3>
//       <input
//         value={ingredients}
//         onChange={(e) => setIngredients(e.target.value)}
//         placeholder="Enter ingredients comma separated"
//         className="border px-3 py-2 mr-2"
//       />
//       <button
//         onClick={handleMatch}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Find Recipes
//       </button>
//       <div className="mt-4">
//         {recipes.map((r) => (
//           <RecipeCard key={r._id} recipe={r} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default IngredientMatcher;

import React, { useState } from "react";
import { matchRecipes } from "../api";
import RecipeCard from "./RecipeCard";
import { motion, AnimatePresence } from "framer-motion";

function IngredientMatcher() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleMatch() {
    if (!ingredients) return alert("Enter some ingredients first");

    const list = ingredients
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    setLoading(true);
    const res = await matchRecipes(list, []); // empty array for dietary preferences for now
    setLoading(false);

    if (res && res.length > 0) {
      setRecipes(res.map((r) => r.recipe));
    } else {
      setRecipes([]);
      alert("No recipes matched your ingredients 😢");
    }
  }

  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl max-w-5xl mx-auto animate-fadeIn">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Match Recipes 🔍</h3>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients, comma separated"
          className="border border-gray-300 px-4 py-2 rounded-lg flex-1 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        />
        <button
          onClick={handleMatch}
          disabled={loading}
          className={`bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition transform ${
            loading ? "opacity-50 cursor-not-allowed animate-pulse" : "hover:scale-105"
          }`}
        >
          {loading ? "Matching..." : "Find Recipes"}
        </button>
      </div>

      <AnimatePresence>
        {recipes.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {recipes.map((r, index) => (
              <motion.div
                key={r._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              >
                <RecipeCard recipe={r} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default IngredientMatcher;
