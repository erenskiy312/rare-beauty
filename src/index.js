import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./components/Navbar/navbar.css";
import "./index.css";
import "./components/product/products.css";
import "./components/Auth/auth.css";
import Artikul1 from "./components/Artikul1/Artikul1";
import "./components/Artikul1/artikul.css";
import Scroller from "./components/Scroller/Scroller";
import "./components/Scroller/scroller.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/footer.css";
import ProductContextProvider from "./context/ProductContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <AuthContextProvider>
        <App />
        {/* <Artikul1 /> */}
        {/* <Scroller /> */}
        <Footer />
      </AuthContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
