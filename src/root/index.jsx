import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<h1>home</h1>} />
        <Route path="/properties" element={<h1>Properties</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;