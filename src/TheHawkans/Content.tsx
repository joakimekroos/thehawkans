import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Band from "./pages/Band";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const Content = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/band" element={<Band />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<NotFound />} />
      </Routes>
  )
}

export default Content;
