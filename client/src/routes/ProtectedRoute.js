import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import AdminLayout from "../components/Layouts/AdminLayout";

const ProtectedRoutes = () => {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default ProtectedRoutes;
