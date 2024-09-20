import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate("/signup");
  }

  const navigateLogin = () => {
    navigate("/login");
  }

  return (
    <div className="unauthenticated-background">
      <div className="unauthenticated-content">
        <div>
          <p>Hi, welcome to</p>
          <h2>News Dashboard!</h2>
        </div>
        <p>Your trusted space for staying informed with clarity and peace of mind.</p>
        <button onClick={navigateSignUp} className="m-btn-light font-m">Sign Up</button>
        <button onClick={navigateLogin} className="m-btn-light font-m">Login</button>
      </div>
    </div>
  )
};

export default Index;
