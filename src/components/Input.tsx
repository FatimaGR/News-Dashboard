interface InputProps{
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  error?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
  isConfirmed?: boolean;
};

function Input({id, name, type = "text", value, onChange, label, placeholder, Icon, error = "", isConfirmed}: InputProps): JSX.Element {
  return (
    <div 
      key={id} 
      id={id} 
      className={
        error
          ? "error-container"
          : isConfirmed
          ? "confirmed-container" 
          : "input-container"
      }
    >
      <label htmlFor={id || name} className={error? "error-label" : "form-label"}>{label}</label>
      <div className="form-input">
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <Icon className="icon-input"/>
      </div>
      {error && <p className="font-xs">{error}</p>}
    </div>
  )
};

export default Input;
