import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticates";

function App() {
  const user = false;

  return user ? (
    <Authenticated/>
  ) : (
    <Unauthenticated/>
  )
};

export default App
