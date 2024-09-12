import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticates";

function App() {
  const user = true;

  return user ? (
    <Authenticated/>
  ) : (
    <Unauthenticated/>
  )
};

export default App
