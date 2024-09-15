import { createUserWithEmailAndPassword, User, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";

interface AuthContextProps{
  user: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  signUp: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({children}: {children: ReactNode}){
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const signUp = async (email: string, password: string) => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error){
      console.error("Sign up error", error);
      return null;
    }
  };

  const login = async (email: string, password: string) => {
    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error){
      console.log("Login error", error);
      return null;
    }
  };

  const logout = async () => {
    try{
      await signOut(auth);
      setUser(null);
    } catch (error){
      console.log("Logout error", error);
    }
  };

  return(
    <AuthContext.Provider value ={{
      user, signUp, login, logout
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth(){
  const context = useContext(AuthContext);
  if (!context){
    throw new Error("useAuth must be in AuthProvider");
  }
  return context;
};