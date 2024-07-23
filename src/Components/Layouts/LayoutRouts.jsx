import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Produts.jsx";
import ProductDetails from "../ProductDetails/ProductDetails";

function LayoutRouts() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/Appello-Homez" element={<>
          
          <Products />
        </>} />
        <Route path="/Appello-Homez/ProductDetails/:id" element={<>
        
          <ProductDetails />
        </>} />
      </Routes>
    </Router>
    </>
  );
}

export default LayoutRouts;