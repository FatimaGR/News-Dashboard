interface InputProps{
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  error?: string;
  img: string;
}

function Input({id, name, type = "text", value, onChange, label, placeholder, img, error = ""}: InputProps): JSX.Element {
  return (
    <div key={id}>
      <label htmlFor={id || name} className={error? "error-label" : "form-label"}>{label}</label>
      <div>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={error? "error-input" : "form-input"}
        />
        <img src={img} alt={name}/>
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  )
}

export default Input