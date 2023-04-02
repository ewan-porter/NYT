import React from "react";
import { BestSellers, Favourites, Update } from "../pages";
import { Routes as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" element={<BestSellers />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/update" element={<Update />} />
      </Router>
    </>
  );
};

export default Routes;
