import { useState } from "react";
import SearchIcon from "../assets/search.svg";

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
      <form onSubmit={handleSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input"
          onChange={handleWordChange}
        />
        <button className="search-btn">
          <img src={SearchIcon} alt="search button"/>
        </button>
      </form>
    </>
  )
};

export default Search;
