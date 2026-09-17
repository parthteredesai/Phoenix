import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import ProductsPage from "./landing_page/products/ProductsPage";
import SupportPage from "./landing_page/support/SupportPage";
import AboutPage from "./landing_page/about/AboutPage";
import SignupPage from "./landing_page/signup/SignupPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import RouteError from "./landing_page/RouteError";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="appContainer">
      <Navbar />
      <div className="space">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="*" element={<RouteError />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>,
);
