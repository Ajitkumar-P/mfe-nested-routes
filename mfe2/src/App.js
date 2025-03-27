import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>MFE2</h1>
      <nav>
        <Link to="/mfe2/pageA">Page A</Link> |{" "}
        <Link to="/mfe2/pageB">Page B</Link>
      </nav>

      <button onClick={() => navigate("/mfe1")}>Navigate to MFE 1</button>
      <Routes>
        <Route path="pageA" element={<h2>MFE2 - Page A</h2>} />
        <Route path="pageB" element={<h2>MFE2 - Page B</h2>} />
      </Routes>
    </div>
  );
};

export default App;
