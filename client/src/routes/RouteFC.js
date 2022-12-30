import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import Dashboard from "../pages/Admin/Dashboard";
import Shops from "../pages/Admin/Shops";
import Login from "../pages/Users/Auth/Login";
import Register from "../pages/Users/Auth/Register";
import ProfileAdmin from "../pages/Admin/Profile";

function RouteFC() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/profile" element={<ProfileAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouteFC;
