import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipePage from "./pages/RecipePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { getMe } from "./api";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getMe(token).then((res) => {
        if (res) setUser(res);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} setUser={setUser} />
      <div className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipePage user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;


