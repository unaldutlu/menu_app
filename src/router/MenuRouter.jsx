import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breakfast from "../pages/Breakfast";
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import Coffee from "../pages/Coffee";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import data from "../data/data";

function MenuRouter() {
  const [filter, setFilter] = useState([]);
  const [filterLunch, setFilterLunch] = useState([]);
  const [filterDinner, setFilterDinner] = useState([]);
  const [filterCoffee, setFilterCoffee] = useState([]);
  useEffect(() => {
    const fikterBreakfast = data.filter(
      (item) => item.category === "breakfast"
    );
    setFilter(fikterBreakfast);
  }, []);
  useEffect(() => {
    const fikterLunch = data.filter((item) => item.category === "lunch");
    setFilterLunch(fikterLunch);
  }, []);
  useEffect(() => {
    const filterDinner = data.filter((item) => item.category === "dinner");
    setFilterDinner(filterDinner);
  }, []);
  useEffect(() => {
    const filterCoffee = data.filter((item) => item.category === "coffee");
    setFilterCoffee(filterCoffee);
  }, []);

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/' element={<Breakfast filter={filter} />} />
        <Route path='lunch' element={<Lunch filterLunch={filterLunch} />} />
        <Route path='dinner' element={<Dinner filterDinner={filterDinner} />} />
        <Route path='coffee' element={<Coffee filterCoffee={filterCoffee} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MenuRouter;
