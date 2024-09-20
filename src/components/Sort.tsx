interface SortProps{
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
};

function Sort({id, value, onChange, label, Icon}: SortProps) {
  return(
    <label htmlFor={id} className="is-btn">
      <input
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