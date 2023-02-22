import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { useAuth } from "../../contexts/AuthContextProvider";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../contexts/CartContextProvider";

const Navbar = () => {
  const { name, surname, mail, handleLogout, checkAuth } = useAuth();

  const [count, setCount] = React.useState(0);

  const { addProductToCart, getCountProductsInCart } = useCart();

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  const navigate = useNavigate();

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

      <Badge className="cart-icon" color="error" badgeContent={count}>
        <ShoppingCartIcon
          className="cart-icon"
          sx={{ color: "#7f2549" }}
          onClick={() => navigate("/cart")}
        />
      </Badge>

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
