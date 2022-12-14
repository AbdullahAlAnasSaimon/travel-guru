import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = provider =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOutUser = () =>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setLoading(false);
      setUser(currentUser);
    })

    return () => unsubscribe();
  }, [])

  const authInfo = {
    user,
    setUser, 
    createUser, 
    logInUser,
    logOutUser,
    loading,
    setLoading,
    googleSignIn,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;