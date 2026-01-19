import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";
import userContext from "../../utils/hooks/userContext";
import { useSelector } from "react-redux";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus"; 

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation();

  const onlineStatus = useOnlineStatus(); 

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/search", label: "🔍 Search" },
    { path: "/contact", label: "Contact" },
    { path: "/grocery", label: "Grocery" },
  ];

  return (
    <header className="sticky top-0 w-full lg:w-[81%] mx-auto bg-orange-200 shadow z-50">
      <div className="mx-auto w-full md:w-[80%] lg:w-[81%] flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <img className="w-16 md:w-20" src={LOGO_URL} alt="logo" />

        {/* Desktop view navbar and  Tablet view navabr*/}
        <ul className="hidden md:flex items-center font-bold gap-4">
          {/* Navigation Links to every page  */}
          {navLinks.map((link) => (
            <li
              key={link.path}
              className={`px-4 border-b-2 pb-1 transition-all duration-300 hover:text-gray-500 hover:border-gray-600 ${
                location.pathname === link.path
                  ? "border-gray-600 text-gray-700"
                  : "border-transparent"
              }`}
            >
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}

          {/* Cart functionality*/}
          <li className="px-4 border-b-2 pb-1 transition-all duration-300 hover:text-gray-500 hover:border-gray-600">
            <Link to="/cart">🛒({cartItems.length})</Link>
          </li>

          {/* Login / Logout functionality with online logo */}
          <li className="relative ml-3">
            <button
              className={`px-4 py-1 border rounded transition-colors duration-200 ${
                isLoggedIn
                  ? "bg-green-100 hover:bg-green-200"
                  : "bg-red-100 hover:bg-red-200"
              }`}
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>

            {/* Online badge by using custom hook*/}
            {onlineStatus && (
              <span
                className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-green-500 animate-pulse border border-white"
                title="Online"
              ></span>
            )}
          </li>
        </ul>

        {/* Hamburger icon for small screen like mobile */}
        <div className="flex items-center gap-4 md:hidden">
          {/*  Cart icon for mobile*/}
          <Link to="/cart" className="relative">
            🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>

          <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* menu open when we click hamburger icon*/}
      {menuOpen && (
        <div className="md:hidden bg-orange-100 px-6 py-4 space-y-3 font-bold">
          {/* Online status */}
          <div className="flex items-center gap-2">
            <div
              className={`w-4 h-4 rounded-full ${
                onlineStatus ? "bg-green-500 animate-pulse" : "bg-red-500"
              }`}
            ></div>
            <span className="text-sm">{onlineStatus ? "Online" : "Offline"}</span>
          </div>

          {/* Navbar Links */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              onClick={() => setMenuOpen(false)}
              to={link.path}
              className={`block ${location.pathname === link.path ? "text-gray-700" : ""}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Login Button */}
          <button
            className="block border px-4 py-1 rounded"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
