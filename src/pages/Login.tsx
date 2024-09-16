import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import Email from "../assets/email.svg";
import Password from "../assets/password.svg";
import { useAuth } from "../context/auth-context";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void =>{
    event.preventDefault();
    let newErrors: {[key: string]: string} = {};

    //validations
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0){
      console.log(formData);
      login(formData.email, formData.password);
      navigate("/");
    }

  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value});
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
            img={Email}
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
            img={Password}
          />
          <button type="submit" className="m2-btn">Login</button>
        </form>
        <p>
          Don't have an account?
          <br/>
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login