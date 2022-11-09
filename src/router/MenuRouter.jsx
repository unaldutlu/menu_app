import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Breakfast from "../pages/Breakfast";
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import Coffee from "../pages/Coffee";
import Footer from "../components/Footer";

function MenuRouter({ data }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Layout/>}>
          <Route path='' element={<Breakfast data={data} />} />
          <Route path='lunch' element={<Lunch data={data} />} />
          <Route path='dinner' element={<Dinner data={data} />} />
          <Route path='coffee' element={<Coffee data={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MenuRouter;
