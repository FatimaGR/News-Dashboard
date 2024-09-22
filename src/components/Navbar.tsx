import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useTheme } from "../context/theme-context";
import IconLight from "../assets/light.svg";
import IconDark from "../assets/dark.svg";
import IconHome from "../assets/home.svg";
import IconSaved from "../assets/saved.svg";
import IconLogout from "../assets/logout.svg";
import IconMenu from "../assets/menu.svg";
import IconClose from "../assets/close.svg";
import "../styles/Navbar.css"

function Navbar() {
  const [selected, setSelected] = useState("home");
  const navigate = useNavigate();
  const { isDarkMode, changeTheme } = useTheme();
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSelected(value);

    if (value == "home") {
      navigate("/");
    } else if (value == "saved"){
      navigate("/saved");
    }
  };

  const { logout } = useAuth();

  return (
    <div className="nav-container">
      <div className={isDarkMode? "small-container-dark" : "small-container-light"}>
        <div onClick={handleMenuToggle} className="nav-svg">
          <IconMenu/>
        </div>
        <h3 className="small-nav-title">News Dashboard</h3>
      </div>
      <div
        className={`${isDarkMode? "nav-container-dark" : "nav-container-light"} ${
          menuToggle ? "" : "none"
        }`}
      >
        <h1 className="big-nav-title">News <br/> Dashboard</h1>
        <div onClick={handleMenuToggle} className="close-svg">
          <IconClose/>
        </div>
        <button onClick={changeTheme} className={isDarkMode? "theme-btn-dark" : "theme-btn-light"}>
          {isDarkMode? <IconDark/> : <IconLight/>}
          {isDarkMode? "DARK MODE" : "LIGHT MODE"}
        </button>
        <label 
          htmlFor="home" 
          className={`${isDarkMode? "nav-btn-dark" : "nav-btn-light"} ${
            selected === "home" ? "selected" : ""
          }`}
        >
          <input 
            type="radio" 
            value="home" 
            id="home" 
            name="navbar"
            checked={selected === "home"}
            onChange={handleChange}
          />
          <IconHome/>
          Home
        </label>

        <label 
          htmlFor="saved" 
          className={`${isDarkMode? "nav-btn-dark" : "nav-btn-light"} ${
            selected === "saved" ? "selected" : ""
          }`}
        >
          <input 
            type="radio" 
            value="saved" 
            id="saved" 
            name="navbar"
            checked={selected === "saved"}
            onChange={handleChange}
            />
            <IconSaved/>
          Saved
        </label>
        <button onClick={logout} className={isDarkMode? "nav-btn-dark" : "nav-btn-light"}>
          <IconLogout/>
          Logout
        </button>
      </div>
    </div>
  )
};

export default Navbar;