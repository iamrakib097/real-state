import { useContext, useState } from "react";
import "./navbar.scss";
import logo from "/logo.png";
import menu from "/menu.png";
import noavatar from "/noavatar.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { currentUser } = useContext(AuthContext);
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
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || noavatar} alt="avatar" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div className="link">
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </div>
        )}
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
