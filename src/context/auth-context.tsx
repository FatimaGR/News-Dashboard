import { createUserWithEmailAndPassword, User, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

interface AuthContextProps{
  user: User | null;
  userData: any | null;
  login: (email: string, password: string) => Promise<User | null>;
  signUp: (email: string, password: string, username: string) => Promise<User | null>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({children}: {children: ReactNode}){
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser){
        const userDocRef = doc(db, "users", currentUser.uid);
        const unsubscribeUserData = onSnapshot(userDocRef, (doc) =>{
          setUserData(doc.data() || null);
        })

        return () => unsubscribeUserData();
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const signUp = async (email: string, password: string, username: string) => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const registeredUser = userCredential.user;

      await setDoc(doc(db, "users", registeredUser.uid), {
        username: username,
        savedNews: []
      });
      return registeredUser;
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
      user, userData, signUp, login, logout
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