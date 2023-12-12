import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import { Provider } from "react-redux";
import store from "./Store/store";
import Cart from "./Pages/Cart";

const MyRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default MyRoutes;
