import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/Routes/Home";
import ArticleInfo from "./Routes/ArticleInfo";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:article_id" element={<ArticleInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
