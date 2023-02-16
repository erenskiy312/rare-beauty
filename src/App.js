import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RegisterSuccess from "./components/Auth/RegisterSuccess";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Shop from "./components/Shop";
import AddProduct from "./components/product/AddProduct";

function App() {
  return (
    <>
      <Navbar />
      {/* <SearchAppBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
