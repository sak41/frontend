import React from "react";
import { motion } from "framer-motion";

function RecipeCardFull({ recipe }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 25px rgba(0,0,0,0.2)" }}
      className="bg-white rounded-2xl shadow-md p-6 mb-6 transform transition-all duration-300"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2 text-gray-800">{recipe.title}</h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">{recipe.description}</p>

      {/* Recipe Info */}
      <div className="flex flex-wrap gap-4 mb-4 text-gray-700 font-medium">
        <span><strong>Cuisine:</strong> {recipe.cuisine || "N/A"}</span>
        <span><strong>Difficulty:</strong> {recipe.difficulty}</span>
        <span><strong>Cook Time:</strong> {recipe.cookTimeMinutes} min</span>
        <span><strong>Servings:</strong> {recipe.servings}</span>
      </div>

      {/* Ingredients */}
      <h4 className="font-semibold mt-4 mb-2 text-gray-800">Ingredients:</h4>
      <ul className="list-disc ml-6 text-gray-700">
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>
            {ing.qty} {ing.unit} {ing.name}
          </li>
        ))}
      </ul>

      {/* Steps */}
      <h4 className="font-semibold mt-4 mb-2 text-gray-800">Steps:</h4>
      <ol className="list-decimal ml-6 text-gray-700">
        {recipe.steps.map((step, i) => (
          <li key={i} className="mb-1">{step}</li>
        ))}
      </ol>

      {/* Nutrition */}
      <h4 className="font-semibold mt-4 mb-2 text-gray-800">Nutrition:</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-gray-700 mb-2">
        <span>Calories: {recipe.nutrition?.calories || "N/A"} kcal</span>
        <span>Protein: {recipe.nutrition?.protein || "N/A"} g</span>
        <span>Fat: {recipe.nutrition?.fat || "N/A"} g</span>
        <span>Carbs: {recipe.nutrition?.carbs || "N/A"} g</span>
      </div>

      {/* Tags */}
      {recipe.tags?.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {recipe.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default RecipeCardFull;
