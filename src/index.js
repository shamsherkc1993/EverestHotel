import React, { createContext } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import HomePage from "./HomePage/HomePage";
// import Errorpage from "./ErrorPage/Errorpage";
// import Contact from "./Contact/Contact";
// import Explore from "./Explore/Explore";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HomeContent } from "./ContentSource/HomeContent";
import { FooterLinkList } from "./ContentSource/FooterLinks";
import { footerDetails } from "./ContentSource/FooterLinks";

const HomeContents = createContext();
const FooterLinks = createContext();
const FooterDetail = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter> */}
    <HomeContents.Provider value={HomeContent}>
      <FooterLinks.Provider value={FooterLinkList}>
        <FooterDetail.Provider value={footerDetails}>
          <App />
        </FooterDetail.Provider>
      </FooterLinks.Provider>
    </HomeContents.Provider>
  </>
);

export { HomeContents, FooterLinks, FooterDetail };
