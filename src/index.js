import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./components/Navbar/navbar.css";
import "./index.css";
import "./components/product/products.css";
import "./components/Auth/auth.css";

import "./components/Artikul1/artikul.css";

import "./components/Scroller/scroller.css";
import "./components/Footer/footer.css";
import "./components/pages/aboutUs.css";
import CartContextProvider from "./contexts/CartContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import Artikul1 from "./components/Artikul1/Artikul1";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          <App />
          {/* <Artikul1 /> */}
          {/* <Footer /> */}
        </AuthContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
