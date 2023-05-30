import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/Routes/Home";
function App() {
  return (
    <>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
