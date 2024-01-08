import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

export default function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Shop</Link>
        </div>

        <div className="search_field">
          <AiOutlineSearch />
        </div>

        <div className="user_actions">
          <AiOutlineShoppingCart />
          <AiOutlineUser />
        </div>
      </div>
    </header>
  );
}
