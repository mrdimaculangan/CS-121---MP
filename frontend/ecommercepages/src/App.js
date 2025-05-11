import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from "./components/pages/buyer/login";
import ProfileInformation from "./components/pages/buyer/profileinformation";
import ItemDescription from "./components/pages/buyer/itemdescription";
import MyCart from "./components/pages/buyer/cart";
import StoreEdit from "./components/pages/seller/storeedit";
import Home from "./components/pages/buyer/home"

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profileinformation" element={<ProfileInformation />} />
      <Route path="/itemdescription" element={<ItemDescription />} />
      <Route path="/storeedit" element={<StoreEdit />} />
      <Route path="/cart" element={<MyCart />} />
    </Routes>
  );
};

export default App;
