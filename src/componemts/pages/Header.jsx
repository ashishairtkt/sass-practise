import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import dropdownMenu from "../data/dropdown.json";

export default function Header() {
  const [isSticky, setIsSticky] = useState(true);
  const [isdropdownMenu, setisdropdownMenu] = useState(dropdownMenu);

  const [formUserInfo, setFormUserInfo] = useState(false);
  useEffect(() => {
    const handleIsSticky = () =>
      window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

    window.addEventListener("scroll", handleIsSticky);

    return () => {
      window.removeEventListener("scroll", handleIsSticky);
    };
  }, [isSticky]);

  console.log(isdropdownMenu);
  return (
    <div className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="menu">
          <div className="logo">
            <Link to="/">Shop</Link>
          </div>

          <div className="user_actions">
            <ul>
              <li>
                <AiOutlineSearch />
              </li>
              <li>
                <AiOutlineShoppingCart />
              </li>
              <li>
                <AiOutlineUser />
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
