import { useState } from "react";
import IconSearch from "../assets/search.svg";
import "../styles/Search.css";
import { useTheme } from "../context/theme-context";

interface SearchProps{
  onSubmit: (title: string) => void;
};

function Search({onSubmit}: SearchProps) {
  const [word, setWord] = useState<string>("");
  const { isDarkMode } = useTheme();

  const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setWord(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(word);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={isDarkMode? "search-form-dark" : "search-form-light"}>
        <button className={isDarkMode? "search-btn-dark" : "search-btn-light"}>
          <IconSearch/>
        </button>
        <input 
          type="text" 
          placeholder="Search..." 
          className={isDarkMode? "search-input-dark" : "search-input-light"}
          onChange={handleWordChange}
        />
      </form>
    </>
  )
};

export default Search;
