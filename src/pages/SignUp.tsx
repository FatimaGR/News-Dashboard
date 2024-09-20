import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import IconUsername from "../assets/user.svg";
import IconEmail from "../assets/email.svg";
import IconPassword from "../assets/password.svg";
import { useAuth } from "../context/auth-context";
import "../styles/Form.css";

interface FormData{
  username: string;
  email: string;
  password: string;
};

function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    let newErrors: {[key: string]: string} = {};

    //validations
    if (!formData.username) newErrors.username = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0){
      signUp(formData.email, formData.password, formData.username);
      navigate("/");
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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

    if(name === "username"){
      if(!value){
        newErrors.username = "Name is required";
      } else if (value.length < 6){
        newErrors.username = "Name must be at least 6 characters";
      } else {
        delete newErrors.username;
      }
    };

    if(name === "password"){
      if(!value){
        newErrors.password = "Password is required";
      } else if (value.length < 6){
        newErrors.password = "Password must be at least 6 characters";
      } else {
        delete newErrors.password;
      }
    };

    setErrors(newErrors);
  }

  return (
    <div className="unauthenticated-background">
      <div className="unauthenticated-content">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit} className="form-container">
          {
          <Input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            label="Username"
            placeholder="Username21"
            error={errors.username}
            Icon={IconUsername}
            isConfirmed={!errors.username && formData.username.length >= 6}
          />
          }
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
          <button type="submit" className="m2-btn-light font-m">Sign up</button>
        </form>
        <p className="font-s redirect-message">
          Have an account?
          <br/>
          <Link to="/login" className="link">Login</Link>
        </p>
      </div>
    </div>
  )
};

export default SignUp