import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="/mfe1">MFE1</Link>{" "}
        <Link to="/mfe2">MFE2</Link>
      </nav>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
