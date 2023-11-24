import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Skills from './componente/Skills';
import Tumbal from './componente/Tumbal';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tumbal" element={<Tumbal />} />
      </Routes>
  );
};

export default App;
