import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Breakfast from "../pages/Breakfast";
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import Coffee from "../pages/Coffee";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MenuRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/*' element={<Layout />}>
          <Route path='' element={<Breakfast />} />
          <Route path='lunch' element={<Lunch />} />
          <Route path='dinner' element={<Dinner />} />
          <Route path='coffee' element={<Coffee />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MenuRouter;
