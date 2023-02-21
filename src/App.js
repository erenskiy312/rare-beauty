import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Artikul1 from "./components/Artikul1/Artikul1";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
      </Routes>
    </>
  );
}

export default App;
