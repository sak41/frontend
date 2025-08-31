// const API_URL = "http://localhost:5000/api";

// async function request(url, method = "GET", body = null, token = null) {
//   const headers = { "Content-Type": "application/json" };
//   if (token) headers["Authorization"] = `Bearer ${token}`;
//   const res = await fetch(API_URL + url, {
//     method,
//     headers,
//     body: body ? JSON.stringify(body) : null
//   });
//   if (!res.ok) return null;
//   return await res.json();
// }

// export const register = (data) => request("/auth/register", "POST", data);
// export const login = (data) => request("/auth/login", "POST", data);
// export const getMe = (token) => request("/users/me", "GET", null, token);

// export const fetchRecipes = () => request("/recipes");
// export const fetchRecipeById = (id) => request(`/recipes/${id}`);
// export const matchRecipes = (ingredients, dietary) =>
//   request("/recipes/match", "POST", { ingredients, dietary });
// export const rateRecipe = (id, rating, token) =>
//   request(`/recipes/${id}/rate`, "POST", { rating }, token);

// export const addFavorite = (id, token) =>
//   request("/users/favorites", "POST", { recipeId: id }, token);
// export const removeFavorite = (id, token) =>
//   request("/users/favorites", "DELETE", { recipeId: id }, token);


// export async function uploadImage(file) {
//   const formData = new FormData();
//   formData.append("image", file);

//   const res = await fetch(`${API_URL}/uploads/image`, {
//     method: "POST",
//     body: formData
//   });

//   if (!res.ok) return null;
//   return await res.json();
// }


// const API_URL = "http://localhost:5000/api";

// async function request(url, method = "GET", body = null, token = null) {
//   const headers = { "Content-Type": "application/json" };
//   if (token) headers["Authorization"] = `Bearer ${token}`;

//   const res = await fetch(API_URL + url, {
//     method,
//     headers,
//     body: body ? JSON.stringify(body) : null
//   });

//   let data;
//   try {
//     data = await res.json();
//   } catch {
//     data = {};
//   }

//   if (!res.ok) throw new Error(data.message || "Request failed");
//   return data;
// }

// // Auth
// export const register = (data) => request("/auth/register", "POST", data);
// export const login = (data) => request("/auth/login", "POST", data);
// export const getMe = (token) => request("/users/me", "GET", null, token);

// // Recipes
// export const fetchRecipes = () => request("/recipes");
// export const fetchRecipeById = (id) => request(`/recipes/${id}`);
// export const matchRecipes = (ingredients, dietary) =>
//   request("/recipes/match", "POST", { ingredients, dietary });
// export const rateRecipe = (id, rating, token) =>
//   request(`/recipes/${id}/rate`, "POST", { rating }, token);

// // Favorites
// export const addFavorite = (id, token) =>
//   request("/users/favorites", "POST", { recipeId: id }, token);
// export const removeFavorite = (id, token) =>
//   request("/users/favorites", "DELETE", { recipeId: id }, token);

// // Image upload
// export async function uploadImage(file) {
//   const formData = new FormData();
//   formData.append("image", file);

//   const res = await fetch(`${API_URL}/uploads/image`, {
//     method: "POST",
//     body: formData
//   });

//   if (!res.ok) return null;
//   return await res.json();
// }


const API_URL = "https://backend-eyt0.onrender.com";

// Generic request function
async function request(url, method = "GET", body = null, token = null) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(API_URL + url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  // If backend wraps response inside "data", unwrap it
  if (data && typeof data === "object" && "data" in data) {
    data = data.data;
  }

  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}

// ----------------- AUTH -----------------
export const register = (formData) => request("/auth/register", "POST", formData);
export const login = (formData) => request("/auth/login", "POST", formData);
export const getMe = (token) => request("/users/me", "GET", null, token);

// ----------------- RECIPES -----------------
export const fetchRecipes = () => request("/recipes");
export const fetchRecipeById = (id) => request(`/recipes/${id}`);
export const matchRecipes = (ingredients, dietary) =>
  request("/recipes/match", "POST", { ingredients, dietary });
export const rateRecipe = (id, rating, token) =>
  request(`/recipes/${id}/rate`, "POST", { rating }, token);

// ----------------- FAVORITES -----------------
export const addFavorite = (id, token) =>
  request("/users/favorites", "POST", { recipeId: id }, token);
export const removeFavorite = (id, token) =>
  request("/users/favorites", "DELETE", { recipeId: id }, token);

// ----------------- IMAGE UPLOAD -----------------
export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${API_URL}/uploads/image`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Image upload failed");
  return await res.json();
}
