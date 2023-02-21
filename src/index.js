import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import "./index.css";
import "./components/product/products.css";
import "./components/Auth/auth.css";
import "./components/Artikul1/artikul.css";
import "./components/Footer/footer.css";
import "./components/Scroller/scroller.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <AuthContextProvider>
        <App />
        {/* <Artikul1 /> */}
        {/* <Footer /> */}
      </AuthContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
