import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Artikul1 from "./components/Artikul1/Artikul1";

import Scroller from "./Scroller/Scroller";
import Footer from "./Footer/Footer";
import "./Scroller/Scroller.css";
import "./components/Auth/Auth.css";
import "./components/Artikul1/Artikul.css";
import "./Footer/Footer.css";
import AuthContextProvider from "./context/AuthContextProvider";
import "./components/product/AddProduct.css";
import ProductContextProvider from "./context/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <App />
        <Scroller />
        <Artikul1 />
        <Footer />
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
