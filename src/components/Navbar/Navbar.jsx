import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { useAuth } from "../../contexts/AuthContextProvider";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const navigate = useNavigate();

  const { name, surname, mail, handleLogout, checkAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  return (
    <div className="navbar">
      <p>
        <a onClick={() => navigate("/shop")}>SHOP</a>
      </p>
      <p>
        <a onClick={() => navigate("/about-us")}>ABOUT US</a>
      </p>
      <h1>
        <a className="logo" onClick={() => navigate("/")}>
          Rare Beauty
        </a>
      </h1>

      <input className="search" type="text" placeholder="Search..." />
      <i className="fa-solid fa-magnifying-glass"></i>

      <PermIdentityIcon
        className="auth-icon"
        onClick={() => navigate("/login")}
      />
      <AddIcon className="add-product-icon" onClick={() => navigate("/add")} />

      {/* {name ? (
        <a className="user">
          <CheckIcon className="accept-user" /> {name}
        </a>
      ) : (
        <label className="user">No auth user</label>
      )} */}
      {mail ? (
        <p className="user">
          <CheckIcon className="accept-user" /> {mail}
          <LogoutIcon className="logout" onClick={handleLogout} />
        </p>
      ) : (
        <label className="user">No auth user</label>
      )}
    </div>
  );
};

export default Navbar;
