import {  createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../firebase/friebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({})
  
  const googlePopUpSignin = () => {
    return signInWithPopup(auth, provider)
  }

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOut = () => {
    return signOut(auth)
  }

  const updateUser = userInfo => {
    return updateProfile(auth.currentUser, userInfo)
  }

  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth,
        (loggedUser) => {
          setUser(loggedUser)
        }
      )
      return () => {
        unSubscribe()
      }
  }, [])
 
  const info = {
    googlePopUpSignin,
    emailSignUp,
    emailSignIn,
    signOut,
    user,
    setUser,
    updateUser
  }

  console.log(user)
  
  
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;