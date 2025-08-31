import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <Link className="mr-4 hover:underline" to="/">Home</Link>
        <Link className="mr-4 hover:underline" to="/recipes">Recipes</Link>
      </div>
      <div>
        {user ? (
          <>
            <Link className="mr-4 hover:underline" to="/profile">Profile</Link>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="mr-4 hover:underline" to="/login">Login</Link>
            <Link className="hover:underline" to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
