import React from "react";
import { useState, useRef } from "react";
import products from "./pages/components/data/data";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/item/:id"} element={<Item products={products} />}></Route>
    </Routes>
  );
};

export default App;
