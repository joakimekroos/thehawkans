import React from 'react';
import { Route, Routes } from '../router';

import Home from './content/Home';
import Band from './content/Band';
import Contact from './content/Contact';
import NotFound from './content/NotFound';

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/band" element={<Band />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Content;
