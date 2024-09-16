import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import Username from "../assets/user.svg";
import Email from "../assets/email.svg";
import Password from "../assets/password.svg";
import { useAuth } from "../context/auth-context";

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
      console.log(formData);
      signUp(formData.email, formData.password, formData.username);
      navigate("/");
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value});
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
            img={Username}
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
          <button type="submit" className="m2-btn">Sign up</button>
        </form>
        <p>
          Have an account?
          <br/>
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
};

export default SignUp