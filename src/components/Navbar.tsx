import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useTheme } from "../context/theme-context";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";

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
        <img src={isDarkMode? dark : light} alt={isDarkMode? "moon" : "sun"} />
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
        Saved
      </label>
      <button onClick={logout} className="nav-btn">
        Logout
      </button>
    </div>
  )
};

export default Navbar;