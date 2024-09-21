import { useRef } from "react";
import { useTheme } from "../context/theme-context";

interface SortProps{
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
};

function Sort({id, value, onChange, label, Icon}: SortProps) {
  const { isDarkMode } = useTheme();
  const inputRef = useRef<(HTMLInputElement | null)>(null);

  return(
    <label 
      htmlFor={id}
      className={`${isDarkMode? "is-btn-dark font-s" : "is-btn-light font-s"} ${
        inputRef.current?.checked ? "selected-sort" : ""
      }`}
    >
      <input
        ref={inputRef}
        type="radio"
        id={id}
        value={value}
        name="sort"
        onChange={onChange}
      />
      <Icon className="icon-input"/>
      {label}
    </label>
  )
};

export default Sort;