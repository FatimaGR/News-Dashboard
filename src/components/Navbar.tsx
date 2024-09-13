import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [selected, setSelected] = useState("home");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSelected(value);

    if (value == "home") {
      navigate("/");
    } else if (value == "saved"){
      navigate("/saved");
    }
  };

  return (
    <div className="nav-container">
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
    </div>
  )
};

export default Navbar;