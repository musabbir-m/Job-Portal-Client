import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext= createContext()
const auth= getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    //signup
    const signUp= (email,password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //for login

    const login= (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(email, password)
    }
    //logout
    const logOut= ()=>{
        setLoading(true)
        return signOut(auth)
      }

    //user monitor

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
          setLoading(false)  
        });
        return () => {
          unsubscribe();
        };
      }, []);

      const authInfo = {
        user,
        loading,
        signUp,
        login,
        logOut,
        
      };

    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;