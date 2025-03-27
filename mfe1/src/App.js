import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Button from "core_ui/Button";
import 'core_ui/App.css';

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>MFE1</h1>
      <Button variant="primary" onClick={() => alert("Hello from MFE1")}>Click me</Button>
      <nav>
        <Link to="/mfe1/page1">Page 1</Link> |{" "}
        <Link to="/mfe1/page2">Page 2</Link>
      </nav>

      <button onClick={() => navigate("/mfe2")}>Navigate to MFE 2</button>
      <Routes>
        <Route path="page1" element={<h2>MFE1 - Page 1</h2>} />
        <Route path="page2" element={<h2>MFE1 - Page 2</h2>} />
      </Routes>
    </div>
  );
};

export default App;
