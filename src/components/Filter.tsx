import { useEffect, useState } from "react";
import { sources } from "../exampleData";

interface FilterProps{
  filter: string[];
  onFilterChange: (newFilter: string[]) => void;
};

function Filter({ filter, onFilterChange }: FilterProps) {
  const [localFilter, setLocalFilter] = useState<string[]>([]);

  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void =>{
    const {value, checked} = event.target;
    let updatedFilter: string[] = [...localFilter];

    if (checked){
      updatedFilter.push(value);
    } else {
      updatedFilter = updatedFilter.filter(source => source != value)
    }

    setLocalFilter(updatedFilter);
    onFilterChange(updatedFilter);
  }

  return (
    <div className="source-container">
      <p>News Sources</p>
      {sources?.map((source, index) => (
        <label key={index} htmlFor={source.id || source.name} className="is-btn">
          {source.name}
          <input 
            type="checkbox" 
            id={source.id || source.name}
            name={source.name}
            value={source.name}
            onChange={handleCheckbox}
          />
        </label>
      ))}
    </div>
  )
};

export default Filter;
