interface SortProps{
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

function Sort({id, value, onChange, label}: SortProps) {
  return(
    <label htmlFor={id} className="s-btn">
      <input
        type="radio"
        id={id}
        value={value}
        name="sort"
        onChange={onChange}
      />
      {label}
    </label>
  )
};

export default Sort;