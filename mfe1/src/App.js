import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const App = () => (
  <div>
    <h1>MFE1</h1>
    <nav>
      <Link to="/mfe1/page1">Page 1</Link> |{" "}
      <Link to="/mfe1/page2">Page 2</Link>
    </nav>
    <Routes>
      <Route path="page1" element={<h2>MFE1 - Page 1</h2>} />
      <Route path="page2" element={<h2>MFE1 - Page 2</h2>} />
    </Routes>
  </div>
);

export default App;
