import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticates";
import { useAuth } from "./context/auth-context";
import { ThemeProvider } from "./context/theme-context";

function App() {
  const { user } = useAuth();

  return user ? (
    <ThemeProvider>
      <Authenticated/>
    </ThemeProvider>
  ) : (
    <Unauthenticated/>
  )
};

export default App;
