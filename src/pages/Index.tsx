import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="unauthenticated-background">
      <div className="unauthenticated-content">
        <p>
          Hi, welcome to
          <br/>
          <h2>News Dashboard!</h2>
        </p>
        <p>Your trusted space for staying informed with clarity and peace of mind.</p>
        <button className="m-btn"><Link to="/signup">Sign Up</Link></button>
        <button className="m-btn"><Link to="/login">Login</Link></button>
      </div>
    </div>
  )
};

export default Index;
