import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import RecipeCard from "./RecipeCard";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then((res) => {
      if (res) setRecipes(res.recipes || []);
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Recipes</h2>
      {recipes.map((r) => (
        <RecipeCard key={r._id} recipe={r} />
      ))}
    </div>
  );
}

export default RecipeList;

// import React, { useEffect, useState } from "react";
// import { fetchRecipes } from "../api";
// import RecipeCard from "./RecipeCard";

// function RecipeList() {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     fetchRecipes().then((res) => {
//       if (res) setRecipes(res.recipes || []);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-100 via-yellow-100 to-pink-100 p-6">
//       <h2 className="text-4xl font-bold mb-8 text-center text-purple-700 animate-fadeIn">
//         All Recipes
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {recipes.map((r) => (
//           <RecipeCard key={r._id} recipe={r} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RecipeList;
