import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const App = () => (
  <div>
    <h1>MFE2</h1>
    <nav>
      <Link to="/mfe2/pageA">Page A</Link> |{" "}
      <Link to="/mfe2/pageB">Page B</Link>
    </nav>
    <Routes>
      <Route path="pageA" element={<h2>MFE2 - Page A</h2>} />
      <Route path="pageB" element={<h2>MFE2 - Page B</h2>} />
    </Routes>
  </div>
);

export default App;
