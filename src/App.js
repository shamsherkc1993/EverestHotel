import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomePage from "./HomePage/HomePage";
import Errorpage from "./ErrorPage/Errorpage";
import Contact from "./Contact/Contact";
import Explore from "./Explore/Explore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
