import React from "react";
import { BestSellers, Favourites, Update, Home } from "../pages";
import { Routes as Router, Route } from "react-router-dom";

// Setting up our routes for the project

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="favourites/update/:bookId" element={<Update />} />
      </Router>
    </>
  );
};

export default Routes;
