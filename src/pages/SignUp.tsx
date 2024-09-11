import { Link } from "react-router-dom";
import Input from "../components/Input";

function SignUp() {
  return (
    <>
      <p>SignUp</p>
      <Input/>
      <Input/>
      <Input/>
      <button>Sign up</button>
      <p><Link to="/login">Login</Link></p>
    </>
  )
};

export default SignUp