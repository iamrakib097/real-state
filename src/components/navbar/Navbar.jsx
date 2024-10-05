import { useState } from "react";
import "./navbar.scss";
import logo from "/logo.png";
import menu from "/menu.png";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  function handleClick() {
    setShowSidebar((value) => !value);
  }
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
        <div className="menuIcon">
          <img src={menu} alt="" onClick={handleClick} />
        </div>
        <div className={showSidebar ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
