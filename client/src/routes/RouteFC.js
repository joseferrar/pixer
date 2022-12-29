import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import Dashboard from "../pages/Admin/Dashboard";
import Shops from "../pages/Admin/Shops";

function RouteFC() {

  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/shops" element={<Shops />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouteFC;