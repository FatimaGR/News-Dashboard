import { Link } from "react-router-dom";
import Input from "../components/Input";

function Login() {
  return (
    <>
      <p>Login</p>
      <Input/>
      <Input/>
      <button>Login</button>
      <p><Link to="/signup">Sign Up</Link></p>
    </>
  )
}

export default Login