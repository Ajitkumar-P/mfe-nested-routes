import React from "react";
import Button from "./components/Button/Button";
import "./App.css";

const App = () => {
  return (
    <div>
      Core UI
      <Button variant="primary" onClick={() => alert("Hello from Core UI")}>
        Click me
      </Button>
    </div>
  );
};

export default App;
