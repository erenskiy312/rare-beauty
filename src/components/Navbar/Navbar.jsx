import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../context/AuthContextProvider";
import { useProducts } from "../../context/ProductContextProvider";

const Navbar = () => {
  const navigate = useNavigate();

  const [saearchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(saearchParams.get("search") || "");

  const { getProducts } = useProducts();

  useEffect(() => {
    setSearchParams({
      search: search,
    });
    getProducts();
  }, [search]);

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

      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
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
