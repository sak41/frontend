

import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Recipe title */}
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{recipe.title}</h3>

      {/* Recipe description */}
      <p className="text-gray-600 mb-4 line-clamp-3">{recipe.description}</p>

      {/* Tags if available */}
      {recipe.tags && recipe.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* View details button */}
      <Link
        to={`/recipes/${recipe._id}`}
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}

export default RecipeCard;
