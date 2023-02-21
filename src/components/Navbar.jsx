import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Shop from "./Shop";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar">
      <p>
        <a
          onClick={() => {
            navigate("/shop");
            setMenu(!menu);
          }}
        >
          SHOP
        </a>
        {menu ? <Shop /> : null}
      </p>
      <p>
        <a onClick={() => navigate("/about-us")}>ABOUT US</a>
      </p>
      <h1>
        <a className="logo" onClick={() => navigate("/")}>
          Rare Beauty
        </a>

        <input className="search" type="text" placeholder="Search..." />
        <i class="fa-solid fa-magnifying-glass"></i>

        <PermIdentityIcon
          className="auth-icon"
          onClick={() => navigate("/login")}
        />
      </h1>
    </div>
  );
};

export default Navbar;
