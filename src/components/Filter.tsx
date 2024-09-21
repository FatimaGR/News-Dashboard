import { useEffect, useRef, useState } from "react";
import { NewsArticle } from "../interfaces";
import { getNews } from "../services/services";
import { useTheme } from "../context/theme-context";

interface FilterProps{
  filter: string[];
  onFilterChange: (newFilter: string[]) => void;
};

function Filter({ filter, onFilterChange }: FilterProps) {
  const [localFilter, setLocalFilter] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const { isDarkMode } = useTheme();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const getSources = (news:NewsArticle[]) => {
    let sources: string[] = [];
    news.map((article) => {
      const sourceName = article.source.name;
      if (!sources.includes(sourceName) && sourceName !== "[Removed]"){
        sources.push(sourceName);
      }
    });
    return sources;
  };

  useEffect(() => {
    getNews()
      .then((list) => {
        const sourcesList = getSources(list.articles);
        setSources(sourcesList);
      })
      .catch((error) => {
        console.log(error);
      })
  },[]);

  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void =>{
    const {value, checked} = event.target;
    let updatedFilter: string[] = [...localFilter];

    if (checked){
      updatedFilter.push(value);
    } else {
      updatedFilter = updatedFilter.filter(source => source != value);
    }

    setLocalFilter(updatedFilter);
    onFilterChange(updatedFilter);
  };

  return (
    <div className="source-container">
      <p>News Sources</p>
      <div className="filter-container">
        {sources?.map((source, index) => (
          <label key={index} 
            htmlFor={source}
            className={`${isDarkMode ? "s-btn-dark font-s" : "s-btn-light font-s"} ${
              inputRefs.current[index]?.checked ? "checked-filter" : ""
            }`}
          >
            {source}
            <input 
              type="checkbox" 
              id={source}
              name={source}
              value={source}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={handleCheckbox}
              />
          </label>
        ))}
      </div>
    </div>
  )
};

export default Filter;
