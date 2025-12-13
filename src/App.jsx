import React from "react";
import { useState, useRef } from "react";
import products from "./pages/components/data/data";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
import WishList from "./pages/WishList";
const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/items/:id"} element={<Item />}></Route>
      <Route path={"/wish"} element={<WishList />}></Route>
    </Routes>
  );
};

export default App;
