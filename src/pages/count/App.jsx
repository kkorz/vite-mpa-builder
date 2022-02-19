import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Count from './components/Count';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
