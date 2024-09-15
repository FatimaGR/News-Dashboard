import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticates";
import { useAuth } from "./context/auth-context";

function App() {
  const { user } = useAuth();

  return user ? (
    <Authenticated/>
  ) : (
    <Unauthenticated/>
  )
};

export default App;
