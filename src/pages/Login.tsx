import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import IconEmail from "../assets/email.svg";
import IconPassword from "../assets/password.svg";
import { useAuth } from "../context/auth-context";
import "../styles/Form.css";

interface FormData{
  email: string;
  password: string;
};

function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> =>{
    event.preventDefault();
    let newErrors: {[key: string]: string} = {};

    //validations
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0){
      const user = await login(formData.email, formData.password)
      if (!user){
          setLoginError("Incorrect email or password");
      } else {
        navigate("/");
      }
    }
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value});

    let newErrors: {[key: string]: string} = {...errors};

    if (name === "email"){
      if (!value) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
        newErrors.email = "Invalid email format";
      } else {
        delete newErrors.email;
      }
    };

    if(name === "password"){
      if(!value){
        newErrors.password = "Password is required";
      } else if (value.length < 6){
        newErrors.password = "Invalid password";
      } else {
        delete newErrors.password;
      }
    };

    setErrors(newErrors);
  }

  return (
    <div className="unauthenticated-background">
      <div className="unauthenticated-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form-container">  
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Email"
            placeholder="username@gmail.com"
            error={errors.email}
            Icon={IconEmail}
            isConfirmed={!errors.email && formData.email.length >= 6}
          />
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Password"
            placeholder="Password"
            error={errors.password}
            Icon={IconPassword}
            isConfirmed={!errors.password && formData.password.length >= 6}
          />
          <button type="submit" className="m2-btn-light font-m">Login</button>
          {loginError && <p className="font-s login-error">{loginError}</p>}
        </form>
        <p className="font-s redirect-message">
          Don't have an account?
          <br/>
          <Link to="/signup" className="link">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login