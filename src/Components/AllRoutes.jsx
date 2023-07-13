import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Login from "./Login";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
   </Routes>
    </div>
  );
};

export default AllRoutes;
