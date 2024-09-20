import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useTheme } from "../context/theme-context";
import IconLight from "../assets/light.svg";
import IconDark from "../assets/dark.svg";
import IconHome from "../assets/home.svg";
import IconSaved from "../assets/saved.svg";
import IconLogout from "../assets/logout.svg";

function Navbar() {
  const [selected, setSelected] = useState("home");
  const navigate = useNavigate();
  const { isDarkMode, changeTheme } = useTheme();

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
      <h2>News <br/> Dashboard</h2>
      <button onClick={changeTheme} className="theme-btn">
        {isDarkMode? <IconDark/> : <IconLight/>}
        {isDarkMode? "DARK MODE" : "LIGHT MODE"}
      </button>
      <label htmlFor="home" className="nav-btn">
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

      <label htmlFor="saved" className="nav-btn">
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
      <button onClick={logout} className="nav-btn">
        <IconLogout/>
        Logout
      </button>
    </div>
  )
};

export default Navbar;