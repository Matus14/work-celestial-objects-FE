// src/routes/Router.jsx
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ObjectList from "../pages/ObjectList.jsx";
import ObjectDetail from "../pages/ObjectDetail.jsx";
import ObjectForm from "../pages/ObjectForm.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/objects" />} />
      <Route path="/objects" element={<ObjectList />} />
      <Route path="/objects/new" element={<ObjectForm />} />
      <Route path="/objects/:id" element={<ObjectDetail />} />
      <Route path="/objects/:id/edit" element={<ObjectForm />} />
    </Routes>
  );
};

export default Router;