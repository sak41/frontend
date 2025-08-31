// import React, { useEffect, useState } from "react";
// import { fetchRecipeById, rateRecipe, addFavorite, removeFavorite } from "../api";

// function RecipeDetail({ id, user }) {
//   const [recipe, setRecipe] = useState(null);
//   const [rating, setRating] = useState("");

//   useEffect(() => {
//     fetchRecipeById(id).then((res) => setRecipe(res));
//   }, [id]);

//   async function handleRate() {
//     if (!user) return alert("Login required");
//     const token = localStorage.getItem("token");
//     const res = await rateRecipe(id, Number(rating), token);
//     if (res) alert("Rated successfully");
//   }

//   async function handleFavorite() {
//     if (!user) return alert("Login required");
//     const token = localStorage.getItem("token");
//     await addFavorite(id, token);
//     alert("Added to favorites");
//   }

//   async function handleRemoveFavorite() {
//     if (!user) return alert("Login required");
//     const token = localStorage.getItem("token");
//     await removeFavorite(id, token);
//     alert("Removed from favorites");
//   }

//   if (!recipe) return <p>Loading...</p>;

//   return (
//     <div className="bg-white p-6 shadow rounded">
//       <h2 className="text-2xl font-bold">{recipe.title}</h2>
//       <p className="mb-2">{recipe.description}</p>
//       <h4 className="font-semibold">Ingredients:</h4>
//       <ul className="list-disc ml-6">
//         {recipe.ingredients.map((ing, i) => (
//           <li key={i}>{ing.qty} {ing.unit} {ing.name}</li>
//         ))}
//       </ul>
//       <h4 className="font-semibold mt-4">Steps:</h4>
//       <ol className="list-decimal ml-6">
//         {recipe.steps.map((s, i) => <li key={i}>{s}</li>)}
//       </ol>
//       <p className="mt-2">Avg rating: {recipe.avgRating}</p>
//       <div className="flex items-center space-x-2 mt-2">
//         <input
//           type="number"
//           min="1"
//           max="5"
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//           className="border px-2 py-1 w-16"
//         />
//         <button onClick={handleRate} className="bg-blue-500 text-white px-3 py-1 rounded">
//           Rate
//         </button>
//       </div>
//       <div className="mt-2">
//         <button onClick={handleFavorite} className="bg-green-500 text-white px-3 py-1 rounded mr-2">Add Favorite</button>
//         <button onClick={handleRemoveFavorite} className="bg-gray-500 text-white px-3 py-1 rounded">Remove Favorite</button>
//       </div>
//     </div>
//   );
// }

// export default RecipeDetail;
 

import React, { useEffect, useState } from "react";
import { fetchRecipeById, rateRecipe, addFavorite, removeFavorite } from "../api";
import { motion } from "framer-motion";

function RecipeDetail({ id, user }) {
  const [recipe, setRecipe] = useState(null);
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetchRecipeById(id).then((res) => setRecipe(res));
  }, [id]);

  async function handleRate() {
    if (!user) return alert("Login required");
    const token = localStorage.getItem("token");
    const res = await rateRecipe(id, Number(rating), token);
    if (res) alert("Rated successfully");
  }

  async function handleFavorite() {
    if (!user) return alert("Login required");
    const token = localStorage.getItem("token");
    await addFavorite(id, token);
    alert("Added to favorites");
  }

  async function handleRemoveFavorite() {
    if (!user) return alert("Login required");
    const token = localStorage.getItem("token");
    await removeFavorite(id, token);
    alert("Removed from favorites");
  }

  if (!recipe) return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl mx-auto mb-6 transform transition-all hover:scale-105 hover:shadow-2xl"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2 text-gray-800">{recipe.title}</h2>
      <p className="text-gray-600 mb-4">{recipe.description}</p>

      {/* Ingredients */}
      <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
      <ul className="list-disc ml-6 text-gray-700">
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing.qty} {ing.unit} {ing.name}</li>
        ))}
      </ul>

      {/* Steps */}
      <h4 className="font-semibold text-gray-800 mt-4 mb-2">Steps:</h4>
      <ol className="list-decimal ml-6 text-gray-700">
        {recipe.steps.map((s, i) => <li key={i} className="mb-1">{s}</li>)}
      </ol>

      {/* Rating */}
      <p className="mt-2 text-gray-700 font-medium">Avg rating: {recipe.avgRating}</p>
      <div className="flex items-center space-x-2 mt-2">
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border px-2 py-1 w-16 rounded focus:ring-2 focus:ring-blue-400 outline-none transition"
        />
        <button
          onClick={handleRate}
          className="bg-blue-500 text-white px-4 py-1 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Rate
        </button>
      </div>

      {/* Favorites */}
      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleFavorite}
          className="bg-green-500 text-white px-4 py-1 rounded-lg shadow hover:bg-green-600 transition"
        >
          Add Favorite
        </button>
        <button
          onClick={handleRemoveFavorite}
          className="bg-gray-500 text-white px-4 py-1 rounded-lg shadow hover:bg-gray-600 transition"
        >
          Remove Favorite
        </button>
      </div>
    </motion.div>
  );
}

export default RecipeDetail;
