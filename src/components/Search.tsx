import { useState } from "react";
import IconSearch from "../assets/search.svg";
import "../styles/Search.css";

interface SearchProps{
  onSubmit: (title: string) => void;
};

function Search({onSubmit}: SearchProps) {
  const [word, setWord] = useState<string>("");

  const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setWord(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(word);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form-light">
        <button className="search-btn-light">
          <IconSearch/>
        </button>
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input-light"
          onChange={handleWordChange}
        />
      </form>
    </>
  )
};

export default Search;
