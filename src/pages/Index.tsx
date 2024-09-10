import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <h1>Hi, welcome to News Dashboard!</h1>
      <button><Link to="/signup">Sign Up</Link></button>
      <button><Link to="/login">Login</Link></button>
    </>
  )
};

export default Index
