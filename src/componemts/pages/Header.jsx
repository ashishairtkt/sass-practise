import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import dropdownMenu from "../data/dropdown.json";
import Searchbar from "./Searchbar";

export default function Header() {
  const [isSticky, setIsSticky] = useState(true);
  const [isdropdownMenu, setisdropdownMenu] = useState(dropdownMenu);

  const [formUserInfo, setFormUserInfo] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    const handleIsSticky = () =>
      window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

    window.addEventListener("scroll", handleIsSticky);

    return () => {
      window.removeEventListener("scroll", handleIsSticky);
    };
  }, [isSticky]);

  const toggleSearch = () => {
    setShowSearch(true);
  };

  console.log(isdropdownMenu);
  return (
    <>
      <div className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="menu">
            <div className="logo">
              <Link to="/">Shop</Link>
            </div>

            <div className="user_actions">
              <ul>
                <li onClick={() => toggleSearch(true)}>
                  <AiOutlineSearch />
                  <div className="tooltip">Search</div>
                </li>
                <li>
                  <AiOutlineShoppingCart />
                  <div className="tooltip">Cart</div>
                </li>
                <li>
                  <AiOutlineUser />
                  <div className="dropdownwrapper-outerbox">
                    <div className="dropdownwrapper">
                      <p>Access account and manage orders</p>

                      <div className="dividerline"></div>

                      {!formUserInfo && (
                        <button
                          type="button"
                          // onClick={() => toggleForm(true)}
                        >
                          Login / Signup
                        </button>
                      )}
                      <ul>
                        {isdropdownMenu.map((item) => (
                          <li key={item.id}>
                            <Link to={item.path}>{item.link}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showSearch && (
        <Searchbar isSearchOpen={showSearch} toggleSearch={setShowSearch} />
      )}
    </>
  );
}
